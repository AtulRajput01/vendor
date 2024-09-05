import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardText,
  CRow,
  CCol,
  CContainer,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SubscriptionOverview = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [supportInfo, setSupportInfo] = useState({
    email: "hunt30@gmail.com",
    phone: "+1 (502) 655-9867"
  });

  const textStyle = { color: '#198754' };
  const titleStyle = { color: '#c81e65' };
  const headerTitleStyle = { color: '#6f42c1' };
  const bigCardStyle = { backgroundColor: '#f8f9fa' };

  useEffect(() => {
    if (id) {
      fetchSubscriptionData();
    }
  }, [id]);

  console.log(subscription,id);
  
  const fetchSubscriptionData = async () => {
    try {
      const response = await axios.get(`http://54.244.180.151:3002/api/subscription/${id}`);
      setSubscription(response.data.data);
    } catch (error) {
      console.error('Error fetching subscription data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!subscription) {
    return <div>No subscription data available.</div>;
  }

  return (
    <CContainer>
      <CCard className="text-center" style={{ ...bigCardStyle, padding: "1rem" }}>
        <CCardHeader>
          <CCardTitle className="h3" style={headerTitleStyle}>Subscription Overview</CCardTitle>
        </CCardHeader>
        <CCardBody style={{ padding: "1rem" }}>
          <CRow className="justify-content-center">
            <CCol sm="12" md="8" className="mb-3">
              <CCard className="shadow">
                <CCardHeader>
                  <CCardTitle style={titleStyle}>{subscription.subscriptionPlan}</CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <CCardText style={textStyle}>
                    <strong>Current Plan:</strong> {subscription.subscriptionPlan}
                  </CCardText>
                  <CCardText style={textStyle}>
                    <strong>Price:</strong> ${subscription.price}
                  </CCardText>
                  <CCardText style={textStyle}>
                    <strong>Expiry Date:</strong> {new Date(subscription.planExpiryDate).toLocaleDateString()}
                  </CCardText>
                  <CCardTitle style={titleStyle}>Description</CCardTitle>
                  <CCardText>{subscription.description}</CCardText>
                  {/* <CCardTitle style={titleStyle}>Features</CCardTitle>
                  <CListGroup className="mb-3">
                    {subscription.features.map((feature, index) => (
                      <CListGroupItem key={index}>{feature}</CListGroupItem>
                    ))}
                  </CListGroup> */}
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
    </CContainer>
  );
};

export default SubscriptionOverview;
