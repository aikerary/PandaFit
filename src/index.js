import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import FormContainer from './FormContainer';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormContainer />
    {/* Use dashboard with variable as the props, and user id */}
    {/* <Dashboard userId={userId} userName={userName} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
