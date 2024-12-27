import React from "react";

const LoginModal = ({close}) => {
    const handleLogin = (e) => {
        e.preventDefault();
        alert('Logged in successfully');
        close();
    };

    const handleForgotPassword = () => {
        alert('Forgot Password? Redirecting...')
    };
    
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                    <button type="button" onClick={close}>Cancel</button>
                </form>
                <p onClick={handleForgotPassword} className="forgot-password">Forgot Password?</p>
            </div>
        </div>
    );
};

export default LoginModal;