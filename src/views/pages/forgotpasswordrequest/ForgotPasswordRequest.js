// ForgotPasswordRequest.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  CCardGroup
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilEnvelopeClosed } from '@coreui/icons';
import logoImage from '../../../../public/logo/tlogo1.png';

const ForgotPasswordRequest = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://54.244.180.151:3002/api/auths/send-email', { email });
      setMessage(response.data.message);
      if (response.status === 200) {
       navigate('/verifyOTP');
      }
    } catch (error) {
      setMessage("Failed to send password reset email");
    }
  };

return (
  <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer className="d-flex justify-content-center align-items-center min-vh-100">
      <CRow className="justify-content-center">
        <CCol md={20}>
          <CCardGroup className="shadow-lg">
          <CCard className="p-4 bg-dark-gray image" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white'}}>
              <CCardBody>
                <CForm>
                <div className="mb-4 text-center">
                    <img src={logoImage} alt="Logo" style={{ maxWidth: '50%', height: 'auto' }} />
                  </div>
                  <h1 className="text-center text-dark">Forgot Password</h1>
                  <p className="text-light text-center">Enter your email to reset your password</p>
                  {message && <p className="text-success text-center">{message}</p>}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilEnvelopeClosed} />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CRow className="justify-content-center">
                    <CCol xs={12} className="text-center">
                      <CButton style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white'}} className="px-4" onClick={handleForgotPassword}>
                       Send OTP
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
}
export default ForgotPasswordRequest;
