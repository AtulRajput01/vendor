import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardText,
  CButton,
  CRow,
  CCol,
  CContainer,
  CBadge,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const SubscriptionOverview = () => {
  const [subscription, setSubscription] = useState({
    type: 'Taxidermy Shop Owner',
    plan: 'Premium Plan',
    status: 'Active',
    renewalDate: '2024-09-15',
    benefits: [
      'Access to premium taxidermy tutorials',
      'Priority customer support',
      'Discounts on supplies',
      'Exclusive access to taxidermy events',
    ],
    features: [
      'Unlimited project submissions',
      'High-quality video content',
      'Dedicated account manager',
      'Advanced tools and resources',
    ],
  });

  const [showPlansModal, setShowPlansModal] = useState(false);
  const [supportInfo, setSupportInfo] = useState({
    email: 'support@taxidermyshop.com',
    phone: '+1-123-456-7890',
  });

  const textStyle = { color: '#198754' };
  const titleStyle = { color: '#c81e65' };
  const headerTitleStyle = { color: '#6f42c1' };
  const bigCardStyle = { backgroundColor: '#f8f9fa' };

  const getStatusBadge = (status) => {
    return status === 'Active' ? 'success' : 'danger';
  };

  const handleUpgradeDowngrade = () => {
    setShowPlansModal(true);
  };

  useEffect(() => {
    const renewalDate = new Date(subscription.renewalDate);
    const today = new Date();
    const timeUntilRenewal = renewalDate.getTime() - today.getTime();

    if (timeUntilRenewal > 0) {
      const timeoutId = setTimeout(() => {
        alert('Your subscription renewal is approaching. Please update your payment settings.');
      }, timeUntilRenewal);

      return () => clearTimeout(timeoutId);
    }
  }, [subscription.renewalDate]);

  const availablePlans = [
    {
      name: 'Premium Plan',
      features: [
        'Unlimited project submissions',
        'High-quality video content',
        'Dedicated account manager',
        'Advanced tools and resources',
      ],
      price: '$99/month',
    },
    {
      name: 'Standard Plan',
      features: [
        'Limited project submissions',
        'Standard video content',
        'Basic tools and resources',
      ],
      price: '$49/month',
    },
    // Add more plans as needed
  ];

  return (
    <CContainer className="py-5">
      <CCard className="text-center shadow-lg" style={{ ...bigCardStyle, padding: "2rem 2rem" }}>
        <CCardHeader>
          <CCardTitle className="h2" style={headerTitleStyle}>Subscription Overview</CCardTitle>
        </CCardHeader>
        <CCardBody style={{ padding: "2rem 2rem" }}>
          <CRow className="justify-content-center">
            <CCol sm="12" md="8" className="mb-4">
              <CCard className="shadow">
                <CCardHeader>
                  <CCardTitle style={titleStyle}>{subscription.type}</CCardTitle>
                  <CBadge color={getStatusBadge(subscription.status)}>{subscription.status}</CBadge>
                </CCardHeader>
                <CCardBody>
                  <CCardText style={textStyle}>
                    <strong>Current Plan:</strong> {subscription.plan}
                  </CCardText>
                  <CCardText style={textStyle}>
                    <strong>Renewal Date:</strong> {subscription.renewalDate}
                  </CCardText>
                  <CCardTitle style={titleStyle}>Benefits</CCardTitle>
                  <CListGroup className="mb-3">
                    {subscription.benefits.map((benefit, index) => (
                      <CListGroupItem key={index}>{benefit}</CListGroupItem>
                    ))}
                  </CListGroup>
                  <CCardTitle style={titleStyle}>Features</CCardTitle>
                  <CListGroup>
                    {subscription.features.map((feature, index) => (
                      <CListGroupItem key={index}>{feature}</CListGroupItem>
                    ))}
                  </CListGroup>
                  <div className="mt-3">
                    <CButton color="secondary" onClick={handleUpgradeDowngrade}>
                      Upgrade/Downgrade
                    </CButton>
                  </div>
                  <div className="mt-3">
                    <h5 style={titleStyle}>Support and Assistance</h5>
                    <p>
                      For any subscription-related inquiries or issues, please contact us:
                      <br />
                      Email: <a href={`mailto:${supportInfo.email}`}>{supportInfo.email}</a>
                      <br />
                      Phone: <a href={`tel:${supportInfo.phone}`}>{supportInfo.phone}</a>
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* Modal for displaying available plans */}
      <CModal visible={showPlansModal} onClose={() => setShowPlansModal(false)}>
        <CModalHeader onClose={() => setShowPlansModal(false)}>
          <CModalTitle>Available Plans</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {availablePlans.map((plan, index) => (
            <div key={index} className="mb-4">
              <h5>{plan.name}</h5>
              <p><strong>Price:</strong> {plan.price}</p>
              <h6>Features:</h6>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <CButton color="primary">Select Plan</CButton>
            </div>
          ))}
        </CModalBody>
      </CModal>
    </CContainer>
  );
};

export default SubscriptionOverview;
