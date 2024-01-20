import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppDataProvider } from './context/data-context/data.context';
import { AppScrollProvider } from './context/scroll-context/scroll.context';
import { AppScreenWidthProvider } from './context/screen-width-context/screen-width.context';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppScreenWidthProvider>
        <AppScrollProvider>
          <AppDataProvider>
            <App />
          </AppDataProvider>
        </AppScrollProvider>
      </AppScreenWidthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
