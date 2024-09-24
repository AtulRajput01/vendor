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
  CCardGroup,
  CSpinner // Import CSpinner for the loader
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilShieldAlt } from '@coreui/icons';
import logoImage from '../../../../public/logo/tlogo1.png';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading
  const navigate = useNavigate();
  

  const handleVerifyOTP = async () => {
    setLoading(true); // Show loader when request starts
    try {
      const response = await axios.post('http://54.71.141.115:3002/auths/verify-otp', {otp });
      setMessage(response.data.message);
      const token=response.data.token;
      if (response.status === 200) {
        navigate('/reset-password', { state: { token } });
      }
    } catch (error) {
      setMessage("Failed to verify OTP");
    }finally {
      setLoading(false); // Hide loader when request is complete
    }
  };

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
                    <h3 className="text-center mb-4 text-dark">Verify OTP</h3>
                    <p className="text-light text-center" >OTP verification</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilShieldAlt} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Enter otp"
                        autoComplete="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CRow className="justify-content-center">
                      <CCol xs={12} className="text-center">
                      <CButton
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
                          className="px-4"
                          onClick={handleVerifyOTP}
                          disabled={loading} // Disable button while loading
                        >
                          {loading ? <CSpinner size="sm" /> : 'Send OTP'} {/* Show spinner if loading */}
                        </CButton>
                      </CCol>
                    </CRow>
                    {message && <p className="text-center text-light mt-3">{message}</p>} {/* Show message if available */}
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

export default VerifyOTP;
