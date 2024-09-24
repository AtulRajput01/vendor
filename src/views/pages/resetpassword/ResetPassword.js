import React, { useEffect, useState } from 'react';
import { useLocation , Link, useNavigate } from 'react-router-dom';
import '../../../../src/scss/common.css';
import {
  CCard,
  CCardBody,
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCardGroup,
  CSpinner // Import CSpinner for the loader
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked } from '@coreui/icons';
import logoImage from '../../../../public/logo/tlogo1.png';

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
      const response = await fetch('https://www.taxidermyvendor.hunt30.com/api/auths/reset-password', {
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
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer className="d-flex justify-content-center align-items-center min-vh-100">
        <CRow className="justify-content-center">
          <CCol md={20}>
            <CCardGroup className="shadow-lg">
            <CCard className="p-4 bg-dark-gray image" style={{ backgroundColor: '#FE3C00'}}>
                <CCardBody>
                  <CForm>
                  <div className="mb-4 text-center">
                      <img src={logoImage} alt="Logo" style={{ maxWidth: '50%', height: 'auto' }} />
                    </div>
                    <h3 className="text-center mb-4 text-dark">Reset Password</h3>
                    <p className="text-light text-center" >Reset your password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Enter new password"
                        autoComplete="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CRow className="justify-content-center">
                      <CCol xs={12} className="text-center">
                      <CButton
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
                          className="px-4"
                          onClick={handleResetPassword}
                          disabled={loading} // Disable button while loading
                        >
                          {loading ? <CSpinner size="sm" /> : 'Reset Password'} {/* Show spinner if loading */}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ResetPassword;
