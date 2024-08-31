import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CContainer,
  CFormCheck,
} from '@coreui/react';

const initialNotifications = [
  {
    id: 1,
    title: 'New Order Received',
    message: 'You have received a new order from John Doe.',
    timestamp: '2024-07-03 10:00 AM',
    stage: 'Order Received',
  },
  {
    id: 2,
    title: 'Processing Started',
    message: 'Processing of Order #1234 has started.',
    timestamp: '2024-07-03 11:00 AM',
    stage: 'Processing Started',
  },
  {
    id: 3,
    title: 'Order Shipped',
    message: 'Order #1234 has been shipped.',
    timestamp: '2024-07-03 04:00 PM',
    stage: 'Order Shipped',
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    stage: '',
  });
  const [notificationPreferences, setNotificationPreferences] = useState({
    orderReceived: true,
    processingStarted: true,
    orderShipped: true,
    completion: true,
  });

  const handleDelete = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  const handleNewNotificationChange = (e) => {
    const { name, value } = e.target;
    setNewNotification({ ...newNotification, [name]: value });
  };

  const handleSendNotification = () => {
    const newNotif = {
      id: notifications.length + 1,
      ...newNotification,
      timestamp: new Date().toLocaleString(),
    };
    setNotifications([newNotif, ...notifications]);
    setNewNotification({ title: '', message: '', stage: '' });
  };

  const handlePreferencesChange = (e) => {
    const { name, checked } = e.target;
    setNotificationPreferences({ ...notificationPreferences, [name]: checked });
  };

  return (
    <CContainer className="mt-4">
      <CRow>
        <CCol md="8">
          <h2>Notifications</h2>
          <CRow className="row-cols-1 g-4">
            {notifications.map(notification => (
              <CCol key={notification.id}>
                <CCard className="bg-light text-dark">
                  <CCardHeader>{notification.title}</CCardHeader>
                  <CCardBody>
                    <p>{notification.message}</p>
                    <small className="text-muted">{notification.timestamp}</small>
                    <div className="mt-2">
                      <CButton color="primary" className="me-2">View Details</CButton>
                      <CButton color="danger" onClick={() => handleDelete(notification.id)}>Delete</CButton>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </CRow>
        </CCol>
        <CCol md="4">
          {/* <h2>Send Manual Update</h2>
          <CCard className="bg-light text-dark mb-4">
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="title">Title</CFormLabel>
                  <CFormInput
                    type="text"
                    id="title"
                    name="title"
                    value={newNotification.title}
                    onChange={handleNewNotificationChange}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="message">Message</CFormLabel>
                  <CFormTextarea
                    id="message"
                    name="message"
                    value={newNotification.message}
                    onChange={handleNewNotificationChange}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="stage">Stage</CFormLabel>
                  <CFormInput
                    type="text"
                    id="stage"
                    name="stage"
                    value={newNotification.stage}
                    onChange={handleNewNotificationChange}
                  />
                </div>
                <CButton color="primary" onClick={handleSendNotification}>Send Notification</CButton>
              </CForm>
            </CCardBody>
          </CCard> */}

          {/* <h2>Notification Preferences</h2>
          <CCard className="bg-light text-dark">
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormCheck
                    type="checkbox"
                    id="orderReceived"
                    name="orderReceived"
                    label="Order Received"
                    checked={notificationPreferences.orderReceived}
                    onChange={handlePreferencesChange}
                  />
                </div>
                <div className="mb-3">
                  <CFormCheck
                    type="checkbox"
                    id="processingStarted"
                    name="processingStarted"
                    label="Processing Started"
                    checked={notificationPreferences.processingStarted}
                    onChange={handlePreferencesChange}
                  />
                </div>
                <div className="mb-3">
                  <CFormCheck
                    type="checkbox"
                    id="orderShipped"
                    name="orderShipped"
                    label="Order Shipped"
                    checked={notificationPreferences.orderShipped}
                    onChange={handlePreferencesChange}
                  />
                </div>
                <div className="mb-3">
                  <CFormCheck
                    type="checkbox"
                    id="completion"
                    name="completion"
                    label="Completion"
                    checked={notificationPreferences.completion}
                    onChange={handlePreferencesChange}
                  />
                </div>
              </CForm>
            </CCardBody>
          </CCard> */}
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Notifications;
