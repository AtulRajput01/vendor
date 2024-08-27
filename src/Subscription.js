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
  CModal,
  CModalBody,
  CModalFooter  
} from '@coreui/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../src/scss/vendors/Subscription.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocation ,useNavigate} from 'react-router-dom';
import { CheckCircle } from 'react-feather';

const stripePromise = loadStripe('pk_test_51PVXReF0nycpVOubpSaWStkDMBHLa2JGWJIxdHgpQDmIi59xjuCV43FTHrvse07wZAyT5WhYBdbAN6ldL4AJFec500U8RKXJQU');

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);
  const location = useLocation();
  const {shopId} = location.state || {}; 
  const handleChoosePlan = (planType, amount) => {
    setSelectedPlan({ planType, amount ,shopId});
    setPaymentFormVisible(true);
  };

  return (
    <CContainer className="py-5">
      <CCard className="text-center shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
        <CCardHeader>
          <CCardTitle className="h2" style={{ color: '#6f42c1' }}>Our Subscription Plans</CCardTitle>
        </CCardHeader>
        <CCardBody style={{ padding: "4rem 2rem" }}>
          <CRow className="justify-content-center">
            <CCol sm="12" md="6" className="mb-4">
              <CCard className="shadow" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CCardHeader>
                  <CCardTitle style={{ color: '#c81e65' }}>Monthly Plan</CCardTitle>
                  <h2>$100/month</h2>
                </CCardHeader>
                <CCardBody style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <CCardText style={{ color: '#198754' }}>This plan offers essential features including:</CCardText>
                  <ul style={{ listStyle: "none", padding: "0", flexGrow: 1 }}>
                    <li>24/7 Customer Support</li>
                    <li>Basic Analytics</li>
                    <li>Standard Customization</li>
                  </ul>
                  <CButton color="secondary" onClick={() => handleChoosePlan('Monthly', 100)}>Choose Plan</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="12" md="6" className="mb-4">
              <CCard className="shadow" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CCardHeader>
                  <CCardTitle style={{ color: '#c81e65' }}>Yearly Plan</CCardTitle>
                  <h2>$1000/year</h2>
                </CCardHeader>
                <CCardBody style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <CCardText style={{ color: '#198754' }}>This plan offers all premium features including:</CCardText>
                  <ul style={{ listStyle: "none", padding: "0", flexGrow: 1 }}>
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
      {isPaymentFormVisible && (
        <CCard className="mt-4 shadow-lg">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <CCardTitle className="h3" style={{ color: '#6f42c1' }}>
              Payment Details
            </CCardTitle>
            <CButton
              color="link"
              className="close-button"
              onClick={() => setPaymentFormVisible(false)}
            >
              <FontAwesomeIcon icon={faCircleXmark} size="lg" />
            </CButton>
          </CCardHeader>
          <CCardBody>
            <Elements stripe={stripePromise}>
              <PaymentForm selectedPlan={selectedPlan} />
            </Elements>
          </CCardBody>
        </CCard>
      )}
    </CContainer>
  );
};

const PaymentForm = ({ selectedPlan }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const cardElement = elements.getElement(CardNumberElement);

    try {
      const { error, token } = await stripe.createToken(cardElement);

      if (error) {
        throw new Error(error.message);
      }

      const response = await axios.post('http://54.244.180.151:3002/api/SubscriptionPayment', {
        planType: selectedPlan.planType,
        amount: selectedPlan.amount,
        tokenid: token.id,
        shopId:selectedPlan.shopId
      });
      
      setShowSuccessModal(true);
    } catch (error) {
      setMessage('Error processing payment: ' + error.message);
    }

    setIsLoading(false);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigate('/Shops');
  };

  const cardOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding: '10px',
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
  return (
    <CRow className="justify-content-center">
      <CCol sm="12" md="6">
        <CCard className="p-3 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
          <CCardBody>
            <form className="form" onSubmit={handleSubmit}>
              <div className="credit-card-info--form">
                <div className="input_container">
                  <label htmlFor="amount_field" className="input_label">Amount</label>
                  <input
                    id="amount_field"
                    className="input_field"
                    type="number"
                    value={selectedPlan.amount}
                    placeholder="Enter amount"
                    required
                    readOnly
                  />
                </div>
                <div className="input_container">
                  <label className="input_label">Card Number</label>
                  <div className="stripe-input">
                    <CardNumberElement options={cardOptions} />
                  </div>
                </div>
                <div className="input_container split">
                  <div className="split_input">
                    <label className="input_label">Expiry Date</label>
                    <div className="stripe-input">
                      <CardExpiryElement options={cardOptions} />
                    </div>
                  </div>
                  <div className="split_input">
                    <label className="input_label">CVC</label>
                    <div className="stripe-input">
                      <CardCvcElement options={cardOptions} />
                    </div>
                  </div>
                </div>
              </div>
              <CButton className="purchase--btn" color="primary" type="submit" disabled={isLoading} block>
                {isLoading ? (
                  <>
                    <span className="loader"></span>
                    Processing...
                  </>
                ) : (
                  'Make Payment'
                )}
              </CButton>
              {message && <div className="message">{message}</div>}
            </form>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Success Popup Modal */}
      <CModal visible={showSuccessModal} onClose={handleSuccessModalClose} centered>
        <CModalBody className="payment-success-modal">
          <div className="payment-success-icon">
            <CheckCircle size={64} color="#4CAF50" /> {/* Green checkmark icon */}
          </div>
          <h4 className="payment-success-title">Payment Successful!</h4>
          <p className="payment-success-message">Your payment was processed successfully.</p>
        </CModalBody>
        <CModalFooter style={{ borderTop: 'none', justifyContent: 'center' }}>
          <CButton color="success" onClick={handleSuccessModalClose} className="payment-success-button">
            OK
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  );
};

export default Subscription;
