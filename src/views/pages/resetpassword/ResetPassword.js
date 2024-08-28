import React, { useEffect, useState } from 'react';
import { useLocation , Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const token = location.state?.token;

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3002/api/auths/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          newPassword: password,
        }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setMessage(data.message || 'Failed to reset password');
      }
    } catch (error) {
      setMessage('Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        navigate('/login');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [isSuccess, navigate]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header">Reset Password</h5>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">New Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="form-control"
                  disabled={loading}
                />
              </div>
              <button
                onClick={handleResetPassword}
                className="btn btn-info"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Reset Password'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
