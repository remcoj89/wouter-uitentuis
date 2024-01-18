import {createContext, useState, useEffect} from 'react';

export const appScreenWidthContext = createContext({
    screenWidth: 0,
})

export const AppScreenWidthProvider = (({children}) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const value = {
    screenWidth,
  };

  return(
    <appScreenWidthContext.Provider value={value} >
      {children}
    </appScreenWidthContext.Provider>
  )
})
