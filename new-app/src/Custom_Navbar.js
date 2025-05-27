import React, { useState, useEffect } from 'react';
import './Custom_Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from './providence medical logo.jpg';
 

const Navbar = () => {

    const[searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const[isInputFocused, setIsInputFocused] = useState(false);
    const searchBar = document.getElementById('searchbar');
    const searchResultsDiv = document.getElementById('search-results');



    useEffect( () => {
        const searchBar = document.getElementById('searchbar');
        const searchResultsDiv = document.getElementById('search-results');
          
        const handleInput = (event) => {
            if (isInputFocused) {
               if (event.target.value.length > 0) {
                    searchResultsDiv.style.display = 'block';
               }
            
                else {
                    searchResultsDiv.style.display = 'none';
                }
            } else {
                searchResultsDiv.style.display = 'none';
            }
            
        };
         
        const handleFocus = () => {
            setIsInputFocused(true); //Set focus flag
           
            if(searchTerm.length > 0) {
                searchResultsDiv.style.display = 'block';
            }
                if(searchTerm.length > 0 && searchResults.length == 0) {
                searchResultsDiv.style.display = 'block';
            } else {
                searchResultsDiv.style.display = 'none';
            }

        };

        searchBar.addEventListener('input', handleInput);
        searchBar.addEventListener('focus', handleFocus);
        
    }, [isInputFocused, searchTerm, searchResults]);


   
    //Search Function
    function search(event) {

        const input = event.target.value.toLowerCase();
        setSearchTerm(input); //Update the state
       
        const searchItems = [
            { name: "Home", url: "/" },
            { name: "Contact", url: "/Contact" },
            { name: "Phone", url: "/Contact" },
            { name: "Address", url: "/Contact" },
            { name: "E-mail", url: "/Contact" },
            { name: "email", url: "/Contact" },
            { name: "Services", url: "/#services" },
            { name: "IV Therapy", url: "/#services" },
            { name: "Weight Loss", url: "/#services" },
            { name: "Anxiety", url: "/#services" },
            { name: "ADHD", url: "/#services" },
            { name: "Bipolar Disorder", url: "/#services" },
            { name: "PTSD", url: "/#services" },
            { name: "Schizophrenia", url: "/#services" },
            { name: "Personality Disorder", url: "/#services" },
            { name: "Obsessive Compulsive Disorder", url: "/#services" },
            { name: "Social Anxiety", url: "/#services" },
            { name: "Sleep Disorder", url: "/#services" },
            { name: "Sexual Addiction", url: "/#services" },
            { name: "Family Medicine", url: "/#services" }
            
         ];
         
         const filteredSearch = searchItems.filter(searchItems => searchItems.name.toLowerCase().includes(input));
            
         setSearchResults(filteredSearch);
    };
    
    
    function renderSearchResults(searchResults, searchTerm) {
        //Check if there are search results
        if (searchResults.length > 0) {
            return searchResults.map(function(result, index) {
                return (
                    <a key={index} onClick={() => navigate(result.url)}>{result.name}</a>
                )
            });
        }   
        
        
        //Check if the search term is present and no results were found
        else if (searchTerm.length > 0) {
            return (
                <div>No Results Matched your Search</div>
            );
        }
        // If no search term is present, do not display anything
        else {
            return null; //No need to render anything
        }
    };


    

    //Navigation 
    const navigate = useNavigate(); 

    const goToHome = () => {
        navigate('/')
    };

    const goToContact = () => {
        navigate('/Contact')
    };
    const goToServices = () => {
        navigate('/#services');//Navigate to Home, then scroll
        setTimeout(() => {
            const element = document.getElementById('services');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); //Small delay to ensure navigation
    };


    return ( 

        <> 
        <div className="navbar">
            <div className = "navbarname">
                <a href=""><img src={logo} style={{verticalAlign: 'middle', height: '350px', width: '350px'}}/></a>{/*Logo or Header Image*/}
             
            </div>
            <div className="navbarcomponents">
                <div className="search"> {/*Search Bar */}
                    <input id="searchbar" 
                    value = {searchTerm}
                    onChange= {search}
                    type="text"
                    placeholder="Search..."/>
                    <div className="search-results" id="search-results"> 
                        {renderSearchResults(searchResults, searchTerm)}
                    </div>
                </div>
                <div className = "navbarhome">
                    <button className = "navbarhomebtn" onClick={goToHome}>
                        <a > 
                        <strong>HOME</strong>
                        </a>
                    </button>
                </div>
                <div className="bookonline">
                    <button className="bookonlinebtn"><a href="http://provider.kareo.com/dr-esther-eke-huber#?view=booking">
						<strong>BOOK ONLINE</strong></a>
                    </button>
                </div>
                <div className="dropdowncontact"> {/*Create link to contact form. Create Links to each social media and list phone,email, and office location in DIV*/}
                    <button className="dropdowncontactbtn" onClick={goToContact}><a><strong>CONTACT</strong></a>
                    </button>
                    <div className="dropdown-content-contact">
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
                        <a href="#" className="facebooknav">Facebook</a>
                        <a href="#" className="twitternav">Twitter</a>
                        <a href="#" className="instagramnav">Instagram</a>
                    </div>
                </div>
                
                <div className="dropdownservices">
                    <button className='dropdownservicesbtn' onClick={goToServices}><a><strong>SERVICES</strong></a></button>
                    <div className="dropdowncontentservices">
                        <a onClick={goToServices} className="services1">IV Therapy</a>
                        <a onClick={goToServices} className="services2">Weight Loss</a>
                        <a onClick={goToServices} className="services3">Anxiety</a>
                        <a onClick={goToServices} className="services4">ADHD</a>
                        <a onClick={goToServices} className="services5">Bipolar Disorder</a>
                        <a onClick={goToServices} className="services6">PTSD</a>
                        <a onClick={goToServices} className="services7">Schizophrenia</a>
                        <a onClick={goToServices} className="services8">Personality Disorder</a>
                        <a onClick={goToServices} className="services9">Obsessive Compulsive</a>
                        <a onClick={goToServices} className="services10">Social Anxiety</a>
                        <a onClick={goToServices} className="service11">Sleep Disorder</a>
                        <a onClick={goToServices} className="services12">Sexual Addiction</a>
                        <a onClick={goToServices} className="services13">Family Medicine</a>
                    </div>
                </div>
            </div>
        </div>
        </>

     );
}
 
export default Navbar;

