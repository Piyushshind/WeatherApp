import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
const email1 = "apurva@example.com";
const boolean = validateEmail(email1); // Output: true OR false

if (boolean) {
  console.log("Hi i am apurva");
} else {
  console.log(" I am not apurva");
}

const email2 = "invalid-email@com";
const email3 = "example@.com";

console.log(validateEmail(email2)); // Output: false
console.log(validateEmail(email3)); // Output: false
