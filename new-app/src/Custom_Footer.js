import './Custom_Footer.css';
import { useNavigate } from 'react-router-dom';
import logo from './providence medical logo.jpg';



const CustomFooter = () => {
    const navigate = useNavigate();
    const goToContact = () => navigate('/Contact');
    
    return (
        <>
        <div className="mainfooter">
            <div className="footerlogo">
                <img src={logo}/>
            </div>
            <div className="footercontact">
                <button className="dropdowncontactbtn" onClick={goToContact}><strong>CONTACT</strong>
                    </button>
                    <div className="footercontactinfo">
                        <br/>
                        <strong>Phone:</strong> +1 (281)-920-0344
                        <br/>
                        <br/>
                        <strong>E-mail:</strong> PLACEHOLDER
                        <br/>
                        <br/>
                        <strong>Address:</strong> 13155 Westheimer Road, Suite 133, Houston, TX 77077
                        <br/>
                        <br/>
                        <br/>
                        <div className="footersocialmedia">
                            <a href="#" className="facebookfooter">Facebook</a>
                            <br/>
                            <br/>
                            <a href="#" className="twitterfooter">Twitter</a>
                            <br/>
                            <br/>
                            <a href="#" className="instagramfooter">Instagram</a>
                        </div>
                        
                    </div>
            </div>
            <div className='map'>
                <iframe loading="lazy" src="https://maps.google.com/maps?q=3155%20Westheimer%20Road%2C%20Suite%20133%20Houston%2C%20TX%2077077&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="3155 Westheimer Road, Suite 133 Houston, TX 77077" aria-label="3155 Westheimer Road, Suite 133 Houston, TX 77077"></iframe>
            </div>
        </div>
        </>

      );
}
 
export default CustomFooter;