import React, { useState } from 'react'
import '../Styles/Header.css'

import logo_icon from '../Assets/logo.png'
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';

const Header = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleSignUp = () => {
        setShowSignUp(true);
        setShowLogin(false);
    };

    const handleLogin = () => {
        setShowLogin(true);
        setShowSignUp(false);
    };

  return (
    <div className='header'>
        <img src={logo_icon} alt="Logo" />
        <p>Companies</p>
        <p>Candidates</p>
        <p>Assessment</p>
        <p>Post a Job</p>
        <p>Career Advice</p>
        <button className='btn1' onClick={handleSignUp}>Sign Up</button>
        <button className='btn2' onClick={handleLogin}>Login</button>
        
        {/* Render Modals */}
        {showSignUp && <SignUpModal close={() => setShowSignUp(false)} />}
        {showLogin && <LoginModal close={() => setShowLogin(false)} />}
    </div>
  );
};

export default Header