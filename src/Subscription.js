import React, { useState } from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardText,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CCardFooter
} from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cilX } from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: 0
  });
  const [paymentType, setPaymentType] = useState('credit');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleChoosePlan = (planType, amount) => {
    setSelectedPlan(planType);
    setPaymentDetails({
      ...paymentDetails,
      amount: amount
    });
    setShowPaymentForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment details submitted:', paymentDetails, 'Payment Type:', paymentType);
  };

  const handleClosePaymentForm = () => {
    setShowPaymentForm(false);
    setSelectedPlan(null);
    setPaymentDetails({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      amount: 0
    });
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
                    <li>24/7 Customer Support</li>
                    <li>Basic Analytics</li>
                    <li>Standard Customization</li>
                  </ul>
                  <CButton color="secondary" onClick={() => handleChoosePlan('Monthly', 100)}>Choose Plan</CButton>
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
                    <li>Premium Support</li>
                    <li>Advanced Analytics</li>
                    <li>Full Customization</li>
                    <li>Exclusive Discounts</li>
                  </ul>
                  <CButton color="secondary" onClick={() => handleChoosePlan('Yearly', 1000)}>Choose Plan</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      {showPaymentForm && (
        <CRow className="justify-content-center mt-4">
          <CCol md="6">
            <CCard className="shadow-sm position-relative">
              <CCardHeader className="text-center bg-primary text-white">
                <h3>Payment Details</h3>
                <CButton
                  color="light"
                  className="position-absolute top-0 end-0 m-2"
                  onClick={handleClosePaymentForm}
                >
                  <CIcon icon={cilX} color="danger" />
                </CButton>
              </CCardHeader>
              <CForm onSubmit={handleSubmit}>
                <CCardBody>
                  <CFormLabel htmlFor="cardNumber">Card Number</CFormLabel>
                  <CFormInput
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your card number"
                  />
                  <CRow>
                    <CCol md="6">
                      <CFormLabel htmlFor="expiryDate">Expiry Date</CFormLabel>
                      <CFormInput
                        id="expiryDate"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel htmlFor="cvv">CVV</CFormLabel>
                      <CFormInput
                        id="cvv"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handleInputChange}
                        required
                        placeholder="CVV"
                      />
                    </CCol>
                  </CRow>
                  <CFormLabel htmlFor="amount" className="mt-3">
                    Amount
                  </CFormLabel>
                  <CFormInput
                    id="amount"
                    name="amount"
                    value={paymentDetails.amount}
                    onChange={handleInputChange}
                    disabled
                  />
                  <CFormLabel htmlFor="paymentType" className="mt-3">
                    Payment Type
                  </CFormLabel>
                  <CFormSelect
                    id="paymentType"
                    name="paymentType"
                    value={paymentType}
                    onChange={handlePaymentTypeChange}
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="paypal">PayPal</option>
                  </CFormSelect>
                </CCardBody>
                <CCardFooter>
                  <CButton type="submit" color="primary" block>
                    Pay ${paymentDetails.amount}
                  </CButton>
                </CCardFooter>
              </CForm>
            </CCard>
          </CCol>
        </CRow>
      )}
    </CContainer>
  );
};

export default Subscription;
