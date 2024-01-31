import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import bankStore from './Stores/BankStore';
// import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


// Perform or dispatch an action :  CREATE
bankStore.dispatch({type:"CREATE"}); 

root.render(
  <React.StrictMode>
    {/* Step3: Use <Provider/>  to share the store to components */}
    <Provider store={bankStore}>
        <App  />
     </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
