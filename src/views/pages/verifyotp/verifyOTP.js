import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://54.244.180.151:3002/api/auths/verify-otp', {otp });
      setMessage(response.data.message);
      const token=response.data.token;
      if (response.status === 200) {
        navigate('/reset-password', { state: { token } });
      }
    } catch (error) {
      setMessage("Failed to verify OTP");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header">Verify OTP</h5>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">OTP:</label>
                <input type="text" value={otp} onChange={e => setOtp(e.target.value)} className="form-control" />
              </div>
              <button onClick={handleVerifyOTP} className="btn btn-info">Verify OTP</button>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
