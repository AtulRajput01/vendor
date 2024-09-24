import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  CContainer,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter
} from '@coreui/react';
import { cilPencil, cilSave, cilXCircle } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import '@coreui/coreui/dist/css/coreui.min.css';
import avatar7 from '../../../../public/logo/tlogo1.png';
import './profile.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    contactNumber: ''
  });

  const [editingFields, setEditingFields] = useState({
    name: false,
    email: false,
    contactNumber: false
  });

  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: ''
  });
  const vendorId = localStorage.getItem('vendorID');

  useEffect(() => {
    fetchProfile(vendorId);
  }, [vendorId]);

  const fetchProfile = async (vendorId) => {
    const response = await axios.get(`https://www.taxidermyvendor.hunt30.com/api/vendor/profile/${vendorId}`);
    setProfile(response.data.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditClick = (field) => {
    setEditingFields({ ...editingFields, [field]: true });
  };

  const handleCancelClick = (field) => {
    setEditingFields({ ...editingFields, [field]: false });
  };

  const handleSaveClick = async () => {
    await axios.put(`https://www.taxidermyvendor.hunt30.com/api/vendor/profile/${vendorId}`, profile)
      .then(response => {
        alert('Profile saved successfully!');
        setEditingFields({
          name: false,
          email: false,
          contactNumber: false
        });
      })
      .catch(error => {
        console.error('Error saving profile data:', error);
      });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handlePasswordSubmit = async () => {
    await axios.put(`https://www.taxidermyvendor.hunt30.com/api/vendor/changePassword/${vendorId}`, passwords)
      .then(response => {
        alert('Password changed successfully!');
        setChangePasswordModal(false);
        setPasswords({ oldPassword: '', newPassword: '' });
      })
      .catch(error => {
        console.error('Error changing password:', error);
      });
  };

  const isAnyFieldBeingEdited = Object.values(editingFields).includes(true);

  return (
    <CContainer className="profile-page mt-5">
      <CRow>
        <CCol md="3" className="text-center">
          <div className="profile-img-container mb-3">
            <img 
              src={avatar7} 
              className="profile-img"
              alt="Profile"
            />
          </div>
          <h5>Hello,</h5>
          <h3>{profile.name}</h3>
          <CButton 
            color="secondary" 
            className="change-password-btn"
            onClick={() => setChangePasswordModal(true)}
          >
            Change Password
          </CButton>
        </CCol>
        <CCol md="9">
          <CCard 
            className="p-3"
            style={{ maxWidth: '600px', margin: '0 auto' }} // Inline styles for card size
          >
            <CCardHeader className="bg-primary text-white">
              <h5>Personal Information</h5>
            </CCardHeader>
            <CCardBody>
              <CForm>
                <CRow className="mb-3">
                  <CCol md="6">
                    <CFormLabel htmlFor="name">Name</CFormLabel>
                    <CInputGroup>
                      <CFormInput
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        disabled={!editingFields.name}
                        style={{ height: '38px' }} // Increase the height of the input field
                      />
                      {!editingFields.name && !isAnyFieldBeingEdited && (
                        <CInputGroupText>
                          <CIcon
                            icon={cilPencil}
                            onClick={() => handleEditClick('name')}
                            style={{ cursor: 'pointer' }}
                          />
                        </CInputGroupText>
                      )}
                      {editingFields.name && (
                        <CInputGroupText>
                          <CIcon
                            icon={cilXCircle}
                            onClick={() => handleCancelClick('name')}
                            style={{ cursor: 'pointer' }}
                          />
                        </CInputGroupText>
                      )}
                    </CInputGroup>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol md="6">
                    <CFormLabel htmlFor="email">Email Address</CFormLabel>
                    <CInputGroup>
                      <CFormInput
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        disabled={!editingFields.email}
                        style={{ height: '38px' }} // Increase the height of the input field
                      />
                      {!editingFields.email && !isAnyFieldBeingEdited && (
                        <CInputGroupText>
                          <CIcon
                            icon={cilPencil}
                            onClick={() => handleEditClick('email')}
                            style={{ cursor: 'pointer' }}
                          />
                        </CInputGroupText>
                      )}
                      {editingFields.email && (
                        <CInputGroupText>
                          <CIcon
                            icon={cilXCircle}
                            onClick={() => handleCancelClick('email')}
                            style={{ cursor: 'pointer' }}
                          />
                        </CInputGroupText>
                      )}
                    </CInputGroup>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol md="6">
                    <CFormLabel htmlFor="contactNumber">Mobile Number</CFormLabel>
                    <CInputGroup>
                      <CFormInput
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        value={profile.contactNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        disabled={!editingFields.contactNumber}
                        style={{ height: '38px' }} // Increase the height of the input field
                      />
                      {!editingFields.contactNumber && !isAnyFieldBeingEdited && (
                        <CInputGroupText>
                          <CIcon
                            icon={cilPencil}
                            onClick={() => handleEditClick('contactNumber')}
                            style={{ cursor: 'pointer' }}
                          />
                        </CInputGroupText>
                      )}
                      {editingFields.contactNumber && (
                        <CInputGroupText>
                          <CIcon
                            icon={cilXCircle}
                            onClick={() => handleCancelClick('contactNumber')}
                            style={{ cursor: 'pointer' }}
                          />
                        </CInputGroupText>
                      )}
                    </CInputGroup>
                  </CCol>
                </CRow>
                {isAnyFieldBeingEdited && (
                  <CRow className="mt-3">
                    <CCol>
                      <CButton color="primary" onClick={handleSaveClick}>
                        <CIcon icon={cilSave} className="me-2" />
                        Save
                      </CButton>
                    </CCol>
                  </CRow>
                )}
              </CForm>
            </CCardBody>
          </CCard>
          <CModal visible={changePasswordModal} onClose={() => setChangePasswordModal(false)}>
            <CModalHeader>Change Password</CModalHeader>
            <CModalBody>
              <CForm>
                <CRow className="mb-3">
                  <CCol md="12">
                    <CFormLabel htmlFor="oldPassword">Old Password</CFormLabel>
                    <CFormInput
                      type="password"
                      id="oldPassword"
                      name="oldPassword"
                      value={passwords.oldPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter your old password"
                    />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol md="12">
                    <CFormLabel htmlFor="newPassword">New Password</CFormLabel>
                    <CFormInput
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={passwords.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter your new password"
                    />
                  </CCol>
                </CRow>
              </CForm>
            </CModalBody>
            <CModalFooter>
              <CButton color="primary" onClick={handlePasswordSubmit}>
                Change Password
              </CButton>
              <CButton color="secondary" onClick={() => setChangePasswordModal(false)}>
                Cancel
              </CButton>
            </CModalFooter>
          </CModal>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ProfilePage;
