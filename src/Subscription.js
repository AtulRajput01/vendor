import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardText,
  CButton,
  CRow,
  CCol,
  CContainer
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const Subscription = () => {
  const navigate = useNavigate();

  const handleChoosePlan = () => {
    navigate('/dashboard');
  };

  const textStyle = { color: '#198754' };
  const titleStyle = { color: '#c81e65' };
  const headerTitleStyle = { color: '#6f42c1' };
  const bigCardStyle = { backgroundColor: '#f8f9fa' };

  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const cardBodyStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const ulStyle = {
    flexGrow: 1,
  };

  return (
    <CContainer className="py-5">
      <CCard className="text-center shadow-lg" style={bigCardStyle}>
        <CCardHeader>
          <CCardTitle className="h2" style={headerTitleStyle}>Our Subscription Plans</CCardTitle>
        </CCardHeader>
        <CCardBody style={{ padding: "4rem 2rem" }}>
          <CRow className="justify-content-center">
            <CCol sm="12" md="6" className="mb-4">
              <CCard className="shadow" style={cardStyle}>
                <CCardHeader>
                  <CCardTitle style={titleStyle}>Monthly Plan</CCardTitle>
                  <h2>$100/month</h2>
                </CCardHeader>
                <CCardBody style={cardBodyStyle}>
                  <CCardText style={textStyle}>This plan offers essential features including:</CCardText>
                  <ul style={{ listStyle: "none", padding: "0", ...ulStyle }}>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                  <CButton color="secondary" onClick={() => handleChoosePlan('Monthly')}>Choose Plan</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="12" md="6" className="mb-4">
              <CCard className="shadow" style={cardStyle}>
                <CCardHeader>
                  <CCardTitle style={titleStyle}>Yearly Plan</CCardTitle>
                  <h2>$1000/year</h2>
                </CCardHeader>
                <CCardBody style={cardBodyStyle}>
                  <CCardText style={textStyle}>This plan offers all premium features including:</CCardText>
                  <ul style={{ listStyle: "none", padding: "0", ...ulStyle }}>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                  <CButton color="secondary" onClick={() => handleChoosePlan('Yearly')}>Choose Plan</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

export default Subscription;
