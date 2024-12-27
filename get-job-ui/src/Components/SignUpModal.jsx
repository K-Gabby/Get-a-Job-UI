import React from "react";

const SignUpModal = ({close}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Account created successfully');
        close();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                    <button type="button" onClick={close}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpModal;