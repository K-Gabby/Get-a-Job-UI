import React from 'react'
import '../Styles/JobCard.css'

import paystack2_icon from '../Assets/paystack2.png';
import google2_icon from '../Assets/google2.png';
import hr_icon from '../Assets/hr.png';
import access_icon from '../Assets/access.png';

const JobCard = () => {
    const handleApply = (jobTitle) => {
        alert(`You have applied for: ${jobTitle}`)
    }
  return (
    <div className='job-card'>
        <h2>Recommended Jobs</h2>
        <div className="paystack2">
            <h6>Full time</h6>
            <img src={paystack2_icon} alt="Paystack2" style={{ width: '120px', height: '40px' }} />
            <h3>QA Engineer</h3>
            <p>Paystack</p>
            <div className="apply">
                <i class="fas fa-map-marker-alt" style={{ color: 'grey', fontSize: '16px' }}></i> {''} Lagos, Nigeria
                <button onClick={() => handleApply('QA Engineer')}>Apply now</button>
            </div>
        </div>

        <div className="google2">
            <h6>Part time</h6>
            <img src={google2_icon} alt="Google2" style={{ width: '80px', height: '40px' }} />
            <h3>Product Analyst</h3>
            <p>Google</p>
            <div className="apply">
                <i class="fas fa-map-marker-alt" style={{ color: 'grey', fontSize: '16px' }}></i> {''} Lagos, Nigeria
                <button>Apply now</button>
            </div>
        </div>

        <div className="hr">
            <h6>Full time</h6>
            <img src={hr_icon} alt="HR" style={{ width: '80px', height: '40px' }} />
            <h3>HR Manager</h3>
            <p>Flutterwave</p>
            <div className="apply">
                <i class="fas fa-map-marker-alt" style={{ color: 'grey', fontSize: '16px' }}></i> {''} Abuja, Nigeria
                <button>Apply now</button>
            </div>
        </div>

        <div className="access">
            <h6>Full time</h6>
            <img src={access_icon} alt="Access" style={{ width: '120px', height: '40px' }} />
            <h3>QA Engineer</h3>
            <p>Paystack</p>
            <div className="apply">
                <i class="fas fa-map-marker-alt" style={{ color: 'grey', fontSize: '16px' }}></i> {''} Lagos, Nigeria
                <button>Apply now</button>
            </div>
        </div>
    </div>
  );
};

export default JobCard