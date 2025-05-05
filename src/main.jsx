import { StrictMode } from 'react';
import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import store, { persistor } from './redux/store.js';
import store from './redux/store.js';
// import { PersistGate } from 'redux-persist/integration/react';
import App from '../src/components/App/App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
)
