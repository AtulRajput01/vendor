import React, { useState } from 'react';
import axios from 'axios';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
  CFormSelect,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const ShopDetails = () => {
  const [shopDetails, setShopDetails] = useState({
    shopName: '',
    shopDescription: '',
    ownerName: '',
    ownerEmail: '',
    contactNumber: '',
    availableFrom: '',
    availableFromPeriod: 'AM',
    availableTo: '',
    availableToPeriod: 'PM',
    shopLogo: null,
    address: '',
    vendorId: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopDetails({
      ...shopDetails,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setShopDetails({
      ...shopDetails,
      shopLogo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('shopName', shopDetails.shopName);
    formData.append('shopDescription', shopDetails.shopDescription);
    formData.append('ownerName', shopDetails.ownerName);
    formData.append('ownerEmail', shopDetails.ownerEmail);
    formData.append('contactNumber', shopDetails.contactNumber);
    formData.append('availableFrom', shopDetails.availableFrom);
    formData.append('availableFromPeriod', shopDetails.availableFromPeriod);
    formData.append('availableTo', shopDetails.availableTo);
    formData.append('availableToPeriod', shopDetails.availableToPeriod);
    formData.append('address', shopDetails.address);
    formData.append('shopLogo', shopDetails.shopLogo);
    formData.append('vendorId', localStorage.getItem('vendorID'));

    try {
      const response = await axios.post('http://54.244.180.151:3002/api/ShopDetails/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setShopDetails({
        shopName: '',
        shopDescription: '',
        ownerName: '',
        ownerEmail: '',
        contactNumber: '',
        availableFrom: '',
        availableFromPeriod: 'AM',
        availableTo: '',
        availableToPeriod: 'PM',
        shopLogo: null,
        address: '',
        vendorId: ''
      });
      navigate('/Subscription',{state:{shopId:response.data.shopDetails._id}});
    } catch (error) {
      console.error('Error creating shop details:', error);
    }
  };

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="6">
          <CCard style={{ padding: '1rem', borderRadius: '0.5rem' }}>
            <CCardBody>
              <CForm onSubmit={handleSubmit} style={{ padding: '0.5rem' }}>
                <h2 style={{ color: '#20c997', textAlign: 'center', fontSize: '1.5rem' }}>Shop Registration</h2>
                
                {/* Shop Name */}
                <div className="mb-2">
                  <CFormLabel htmlFor="shopName" style={{ fontSize: '0.875rem' }}>Shop Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="shopName"
                    name="shopName"
                    placeholder="Enter shop name"
                    value={shopDetails.shopName}
                    onChange={handleInputChange}
                    required
                    style={{ fontSize: '0.875rem', height: '2rem' }}
                  />
                </div>
                
                <div className="mb-2">
                  <CFormLabel htmlFor="shopDescription" style={{ fontSize: '0.875rem' }}>Shop Description</CFormLabel>
                  <CFormTextarea
                    id="shopDescription"
                    name="shopDescription"
                    rows="2"
                    placeholder="Enter shop description"
                    value={shopDetails.shopDescription}
                    onChange={handleInputChange}
                    style={{ fontSize: '0.875rem', height: '3rem' }}
                  />
                </div>

                {/* Owner Name */}
                <div className="mb-2 d-flex">
                  <div className="flex-grow-1 me-2">
                    <CFormLabel htmlFor="ownerName" style={{ fontSize: '0.875rem' }}>Owner Name</CFormLabel>
                    <CFormInput
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      placeholder="Enter owner's name"
                      value={shopDetails.ownerName}
                      onChange={handleInputChange}
                      required
                      style={{ fontSize: '0.875rem', height: '2rem' }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <CFormLabel htmlFor="ownerEmail" style={{ fontSize: '0.875rem' }}>Owner Email</CFormLabel>
                    <CFormInput
                      type="text"
                      id="ownerEmail"
                      name="ownerEmail"
                      placeholder="Enter owner's email"
                      value={shopDetails.ownerEmail}
                      onChange={handleInputChange}
                      required
                      style={{ fontSize: '0.875rem', height: '2rem' }}
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div className="mb-2 d-flex">
                  <div className="flex-grow-1 me-2">
                    <CFormLabel htmlFor="contactNumber" style={{ fontSize: '0.875rem' }}>Contact Number</CFormLabel>
                    <CFormInput
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      placeholder="Enter contact number"
                      value={shopDetails.contactNumber}
                      onChange={handleInputChange}
                      style={{ fontSize: '0.875rem', height: '2rem' }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <CFormLabel htmlFor="shopLogo" style={{ fontSize: '0.875rem' }}>Shop Logo/Image</CFormLabel>
                    <CFormInput
                      type="file"
                      id="shopLogo"
                      name="shopLogo"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ fontSize: '0.875rem', height: '2rem' }}
                    />
                  </div>
                </div>

                {/* Available From */}
                <div className="mb-2">
                  <CFormLabel htmlFor="availableFrom" style={{ fontSize: '0.875rem' }}>Available From</CFormLabel>
                  <div className="d-flex">
                    <CFormInput
                      type="time"
                      id="availableFrom"
                      name="availableFrom"
                      value={shopDetails.availableFrom}
                      onChange={handleInputChange}
                      style={{ fontSize: '0.875rem', height: '2rem', flex: 1 }}
                    />
                    <CFormSelect
                      id="availableFromPeriod"
                      name="availableFromPeriod"
                      value={shopDetails.availableFromPeriod}
                      onChange={handleInputChange}
                      style={{ fontSize: '0.875rem', height: '2rem', width: 'auto', flexShrink: 0 }}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </CFormSelect>
                  </div>
                </div>

                {/* Available To */}
                <div className="mb-2">
                  <CFormLabel htmlFor="availableTo" style={{ fontSize: '0.875rem' }}>Available To</CFormLabel>
                  <div className="d-flex">
                    <CFormInput
                      type="time"
                      id="availableTo"
                      name="availableTo"
                      value={shopDetails.availableTo}
                      onChange={handleInputChange}
                      style={{ fontSize: '0.875rem', height: '2rem', flex: 1 }}
                    />
                    <CFormSelect
                      id="availableToPeriod"
                      name="availableToPeriod"
                      value={shopDetails.availableToPeriod}
                      onChange={handleInputChange}
                      style={{ fontSize: '0.875rem', height: '2rem', width: 'auto', flexShrink: 0 }}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </CFormSelect>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-2">
                  <CFormLabel htmlFor="address" style={{ fontSize: '0.875rem' }}>Address</CFormLabel>
                  <CFormTextarea
                    id="address"
                    name="address"
                    rows="2"
                    placeholder="Enter address"
                    value={shopDetails.address}
                    onChange={handleInputChange}
                    style={{ fontSize: '0.875rem', height: '3rem' }}
                  />
                </div>

                <CButton type="submit" color="primary" style={{ fontSize: '0.875rem', height: '2.5rem' }}>Submit</CButton>
              </CForm>
              {/* <div className="mt-2">
                <CButton color="secondary" style={{ fontSize: '0.875rem', height: '2.5rem' }}>Book an Appointment</CButton>
              </div> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ShopDetails;
