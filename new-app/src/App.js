import './App.css';
import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import {  Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import Insurances from './Home.js';
import { DataProvider } from './DataProvider.js';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path ='/' element = {<Home/>}/> {/*Path for Home Page*/} 
          <Route path = '/Contact' element = {<Contact/>}/> {/*Path for Contact Page*/}
        </Routes>
      </div>
    </>

  );
}

export default App;
