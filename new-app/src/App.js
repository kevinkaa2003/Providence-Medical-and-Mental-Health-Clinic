import './App.css';
import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import {  Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import ScrollToTop from './ScrollToTop.js';


function App() {

  return (
    <>
    <ScrollToTop/>
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
