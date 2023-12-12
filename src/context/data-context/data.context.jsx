import Data from '../../data/data.json'
import {createContext, useState, useEffect} from 'react';


export const appDataContext = createContext({
  gardeningData: {},
  landscapingData: {},
  fieldManagementData: {},
})

export const AppDataProvider = (({children}) => {
  const [gardeningData, setGardeningData] = useState({});
  const [landscapingData, setLandscapingData] = useState({});
  const [fieldManagementData, setFieldManagementData] = useState({});

  useEffect(() => {
    const data = Data;
    setGardeningData(data.gardening);
    setLandscapingData(data.landscaping);
    setFieldManagementData(data.fieldManagement);
  }, []);

  const value = {
    gardeningData,
    landscapingData,
    fieldManagementData,
  };

  return(
    <appDataContext.Provider value={value} >
      {children}
    </appDataContext.Provider>
  )
})
