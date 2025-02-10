import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  About  from "./About";
import Blog from './blog';
import Users from './Pages/Users';
import SingleUser from './Pages/SingleUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/blog" element={<Blog />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/home" element={<App/>} ></Route>
        <Route path="/users" element={<Users/>} ></Route>
        <Route path="/users/:id" element={<SingleUser/>} ></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
