import React, { useState } from 'react'
import '../Styles/Find.css'

import paystack_icon from '../Assets/paystack.png';
import google_icon from '../Assets/google.png';
import kpmg_icon from '../Assets/kpmg.png';
import hero_icon from '../Assets/hero.png'

const Find = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('Select Location');
    const [showDropDown, setShowDropDown] = useState(false);

    const locations = ['Ikeja', 'Allen', 'Lekki Phase I', 'Lekki Phase II', 'Victoria Island', 'Yaba', 'Obalende', 'Festac'];

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
           alert('Please enter a keyword before searching!')
           return; 
        }
        alert(`Searching for "${searchTerm}" in "${location}"`);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const toggleDropdown = () => {
        setShowDropDown((prev) => !prev);
    };

    const selectLocation = (loc) => {
        setLocation(loc);
        setShowDropDown(false);
    }
    

  return (
    <div className='find-container'>
        <div className="find-job">
            <h2>Find a <span className="highlight">job</span> easily</h2>
            <p>With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
            <div className='search-bar'>
                <input type="text" placeholder='Enter keywords, skill, interest' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress} />
                <div className='location' onClick={toggleDropdown}>
                    <i class="fas fa-map-marker-alt" style={{ color: 'grey', fontSize: '16px' }}></i> {''} Location
                </div>
                {showDropDown && (
                    <div className="dropdown">
                    {locations.map((loc) => (
                        <div key={loc} className='dropdown-item' onClick={() => selectLocation(loc)}>
                            {loc}
                        </div>   
                    ))}
                    </div>
                )}
                <i class="fas fa-search" onClick={handleSearch}></i>
            </div>
            <div className="brand">
                <h6>Trusted by:</h6>
                <div className="brand-icon">
                <img src={paystack_icon} alt="Paystack" />
                <img src={google_icon} alt="Google" />
                <img src={kpmg_icon} alt="KPMG" />
                </div>
            </div>
        </div>
        <img src={hero_icon} alt="Hero" />
    </div>
  )
}

export default Find