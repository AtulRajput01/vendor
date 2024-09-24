import React, { useState } from 'react';
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
  CSpinner // Import CSpinner for the loader
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilUser, cilMap, cilAt, cilPhone, cilLockLocked } from '@coreui/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logoImage from '../../../../public/logo/tlogo1.png';


const Register = () => {
  const navigateTo = useNavigate();
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading


  const handleRegister = async () => {
    setLoading(true); // Show loader when request starts
    try {
      const response = await axios.post('https://www.taxidermyadmin.hunt30.com/api/auths/Register', {
        name,
        email,
        password,
        mobileNumber,
        role: "vendor"
      });
      setMessage(response.data.message);
      if (response.status === 200) {
        navigateTo('/login');
      }
    } catch (error) {
      setMessage('Registration failed');
    } finally {
      setLoading(false); // Hide loader when request is complete
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="p-4 bg-dark-gray image" style={{ backgroundColor: '#FE3C00' }}>
              <CCardBody className="p-4">
                <CForm>
                  <div className="mb-4 text-center">
                    <img src={logoImage} alt="Logo" style={{ maxWidth: '30%', height: 'auto' }} />
                  </div>
                  <h1 className='text-center'>Register</h1>
                  <p className="text-center text-light">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilAt} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Mobile Number"
                      autoComplete="mobile-number"
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CCol className='text-center'>
                      <CButton
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
                        className="px-4"
                        onClick={handleRegister}
                        disabled={loading} // Disable button while loading
                      >
                        {loading ? <CSpinner size="sm" /> : 'Register'}
                      </CButton>
                    </CCol>
                    <p>{message}</p>
                    <CCol className="text-center">
                      <Link to="/login">
                        <CButton color="link" className="px-0" style={{ color: "white" }}>
                          Login
                        </CButton>
                      </Link>
                    </CCol>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}
export default Register
