import logo from './logo.svg';
import './Home.css';
import React, { useEffect, useState, createContext, useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Navbar from './Custom_Navbar.js';
import HomeGreeting from './Custom_Greeting.js';
import MeetProviders from './ProviderIntro.js';
import CustomFooter from './Custom_Footer.js';
import Slideshow from './Custom_Slideshow.js';
import Insurances from './Insurance_Display.js';
import Services from './Services.js';
import Reviews from './Reviews.js';
import { DataProvider } from './DataProvider.js';

//Home component
const Home = () => {

    return (
        <>
        <DataProvider>
            <Navbar/>
            <Slideshow/>
            <HomeGreeting/>
            <Services/>
            <MeetProviders/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Reviews/>
            <Insurances/>
            <CustomFooter/>
        </DataProvider>
        </>
    );
}

export default Home;
