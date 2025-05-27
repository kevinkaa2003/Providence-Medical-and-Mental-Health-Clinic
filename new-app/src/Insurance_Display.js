import React, { useRef, useState, useEffect } from 'react';
import './Insurance_Display.css';
import aetna from './aetna.png';
import ambetter from './ambetter.png';
import bluecross from './bluecross.png';
import cigna from './cigna.png';
import friday from './friday.png';
import medicaid from './medicaid.png';
import tmhp from './tmhp.png';
import wellcare from './wellcare.png';

const Insurances = () => {
    return ( 
    <>
        <div className="insuranceimages">
            <div className="insurancetitle"><strong>Accepted Insurances</strong></div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={aetna}/>
                        </td>
                        <td>
                            <img src={ambetter}/>
                        </td>
                        <td>
                            <img src={bluecross}/>
                        </td>
                        <td>
                            <img src={cigna}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={friday}/>
                        </td>
                        <td>
                            <img src={medicaid}/>
                        </td>
                        <td>
                            <img src={tmhp}/>
                        </td>
                        <td>
                            <img src={wellcare}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
     );
}
 
export default Insurances;