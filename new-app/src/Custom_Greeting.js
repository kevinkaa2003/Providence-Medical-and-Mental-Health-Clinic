import React, {useState, useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';
import './Custom_Greeting.css';
import providervideo1 from './providervideo1.mp4';
import providervideo2 from './providervideo2.mp4';
import providervideo3 from './providervideo3.mp4';
import logo from './providence medical logo.jpg';

const HomeGreeting = () => {
    const navigate = useNavigate();
    
    const goToContact = () => {
        navigate("/Contact");
    };

    const goToPortfolio = () => {
        navigate("/Portfolio");   
    };

    //Video Sources
    const videoSources = [providervideo1, providervideo2, providervideo3];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    //Video Handler Function
    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    };

    return (  
        <>
        <div className="homegreeting">
            <div className="welcomecontainer">
                <div className="welcomeparagraph">
                    
                    <div className="welcomeparagraph1">
                        <p>Providence Medical and
                            <br/> Mental Health Clinic</p>
                    </div>
                    <br/>
                    <div className="welcomeparagraph2">
                        <p>At Providence Medical and Mental Health Clinic, we serve as a dual practice medical and psychiatric health care center. The goal of our team is to provide convenient access to health care by offering in-person appointments in the clinic, same-day sick visits, and telemedicine appointments.</p>
                    </div>
                    <br/>
                    <div className="welcomeparagraph3">
                        <p> Feel free to browse our services as well as send us a message regarding any inquiry or service.</p>
                    </div>
                    <br/>
                    <div className="welcomebuttons">
            
                        <button><a href="http://provider.kareo.com/dr-esther-eke-huber#?view=booking">Schedule an Appointment</a></button>
                    </div>
    
                </div>
                <div className="video">
                    <video src={videoSources[currentVideoIndex]} autoPlay muted playsInline onEnded={handleVideoEnd}/>            
                </div>
            </div>
            
         
        </div>
        </>
    );
}
 
export default HomeGreeting;