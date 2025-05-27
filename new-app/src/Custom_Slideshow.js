import React, { useEffect, useState, useRef } from 'react';
import './Custom_Slideshow.css';
import beach from './beach.jpg';
import bridge from './bridge.webp';
import bridge2 from './bridge2.jpg';
import lake from './lake.jpg';
import trees from './trees.jpg';
import waterfall from './waterfall.jpg';
import { useNavigate }from 'react-router-dom';





const Slideshow = () => {

    const [currentRow, setCurrentRow] = useState(0);
    const rowsRef = useRef([]);

    useEffect(() => {
        rowsRef.current = document.querySelectorAll("#slideshowtable tr");
        showRow(0);
        const interval = setInterval (() => nextRow(), 10000); //Change slide every 10 seconds
        return () => clearInterval(interval); //Cleanup on unmount
    }, []);

    function showRow(index) {
        rowsRef.current.forEach((row, i) => {
            const message = row.querySelector(".message");
           

            if (row) {
                row.style.display = i === index ? "table-row" : "none";
                row.classList.toggle("fade-in", i === index); 
            }
            if (message) {
                message.classList.toggle("expand-width", i === index);

            }

            
        });
    }

    function nextRow() {
        setCurrentRow((prev) => {
            const newIndex = (prev + 1 ) % rowsRef.current.length;
            showRow(newIndex);
            return newIndex;
        });
    }

    const Navigate = useNavigate();

    const goToContact = () => {
        Navigate('/Contact')
    };

    return ( 
        <>
        <div className="slideshow" id="slideshow1">
            <table id="slideshowtable" className="slideshowtable">
                <tbody>
                    <tr>
                        <td>
                            <img src={beach}/>
                            <div className="message">Welcome to Providence Medical and Mental Health!</div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={waterfall}/>
                            <div className="message">We provide care and treatment for a range of different mental health conditions.</div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={bridge2}/>
                            <div className="message">Contact us today to schedule an appointment.</div>
                            
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
        </>
     );
}
 
export default Slideshow;