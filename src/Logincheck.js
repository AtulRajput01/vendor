import React from 'react';
import './../src/scss/common.css'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCardText,
    CRow,
    CCol,
    CContainer,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

// Import images
import huntLogo from './../public/logo/tlogo1.png';
import clockImage from './../public/logo/clock.png';  // Make sure to replace with the correct path to your clock image

const Logincheck = () => {

    const textStyle = { color: '#198754', fontSize: '18px' }; // Adjusted text size
    const titleStyle = { color: '#c81e65', fontSize: '24px' }; // Adjusted title size
    const headerTitleStyle = { color: '#6f42c1' };
    const bigCardStyle = { backgroundColor: '#f8f9fa' };

    return (
        // <CContainer className="py-4">
            <CCard className="text-center shadow-lg" style={{ ...bigCardStyle, width: "" }}>
                <CCardBody style={{ padding: "2rem 2rem" }}>
                    <CRow className="justify-content-center">
                        <CCol sm="12" md="5" className="mb-4">
                            <CCard className="shadow">
                                <CCardHeader className='image'>
                                    <CCardTitle style={titleStyle}>
                                        {/* Logo Image Insert */}
                                        <img src={huntLogo} alt="Logo" style={{ width: '150px' }} />
                                    </CCardTitle>
                                </CCardHeader>
                                <CCardBody>
                                    <CCardText style={{ marginBottom: '3rem', fontSize: '2rem' }}>
                                        <strong>We are evaluating your account!</strong>
                                    </CCardText>
                                    <CCardTitle style={{ marginBottom: '3rem' }}>
                                        {/* Clock Image Insert */}
                                        <img src={clockImage} alt="Clock" style={{ width: '100px', height: '100px' }} />
                                    </CCardTitle>
                                    <CCardTitle style={{fontStyle: 'italic'}}>
                                        {/* Additional Notification Text */}
                                        We will reach you out via email or phone number for further assistance.                                    
                                        </CCardTitle>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        // </CContainer>
    )
}

export default Logincheck;
