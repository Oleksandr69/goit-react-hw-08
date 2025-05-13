import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { persistor, store } from './redux/store';
// import 'modern-normalize';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      
          <App />
      
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


// import { StrictMode } from 'react';
// import React from "react";
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// // import store, { persistor } from './redux/store.js';
// import store from './redux/store.js';
// // import { PersistGate } from 'redux-persist/integration/react';
// import App from '../src/components/App/App.jsx';
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//         <App />
//       {/* </PersistGate> */}
//     </Provider>
//   </StrictMode>,
// )
