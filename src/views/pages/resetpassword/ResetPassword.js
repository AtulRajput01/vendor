import React, { useEffect, useState } from 'react';
import { useLocation , Link, useNavigate } from 'react-router-dom';
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
  CCardGroup
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked } from '@coreui/icons';
import logoImage from './logo.png';

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
      const response = await fetch('http://54.244.180.151:3002/api/auths/reset-password', {
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
            <CCard className="p-4 bg-dark-gray" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white'}}>
                <CCardBody>
                  <CForm>
                  <div className="mb-4 text-center">
                      <img src={logoImage} alt="Logo" style={{ maxWidth: '50%', height: 'auto' }} />
                    </div>
                    <h3 className="text-center mb-4">Reset Password</h3>
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
                        <CButton color="primary" className="px-4" onClick={handleResetPassword}>
                        Reset Password
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
