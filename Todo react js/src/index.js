import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './test';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Wheather from "./wheather.jsx"
import Todo from "./Todo.js"
import Calculator from './calculator.jsx';
import MyComponent from './testttt.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  {/* <Calculator/> */}
   {/* <Wheather/> */}
    {/*<App/><MyComponent/>*/}    
     <Todo/>  
{/* <App1/> */}
  </React.StrictMode>
);

reportWebVitals();
