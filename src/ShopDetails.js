import React, { useState, useRef } from 'react';
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
  CSpinner,
  CFormCheck,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

const ShopDetails = () => {
  const [shopDetails, setShopDetails] = useState({
    shopName: '',
    shopDescription: '',
    ownerName: '',
    ownerEmail: '',
    contactNumber: '',
    availableFrom: '',
    availableTo: '',
    shopLogo: null,
    address: '',
    latitude: '',
    longitude: '',
    vendorId: '',
    takeAppointment: false, // Added for checkbox state
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const autocompleteRef = useRef(null);

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

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    const address = place.formatted_address;
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();

    setShopDetails({
      ...shopDetails,
      address,
      latitude,
      longitude,
    });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setShopDetails((prevState) => ({
      ...prevState,
      takeAppointment: checked,
    }));

    if (checked) {
      const now = new Date();
      const availableFrom =''
      const availableTo = '' 

      setShopDetails((prevState) => ({
        ...prevState,
        availableFrom,
        availableTo,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('shopName', shopDetails.shopName);
    formData.append('shopDescription', shopDetails.shopDescription);
    formData.append('ownerName', shopDetails.ownerName);
    formData.append('ownerEmail', shopDetails.ownerEmail);
    formData.append('contactNumber', shopDetails.contactNumber);
    formData.append('availableFrom', shopDetails.availableFrom);
    formData.append('availableTo', shopDetails.availableTo);
    formData.append('address', shopDetails.address);
    formData.append('latitude', shopDetails.latitude);
    formData.append('longitude', shopDetails.longitude);
    formData.append('shopLogo', shopDetails.shopLogo);
    formData.append('vendorId', localStorage.getItem('vendorID'));

    try {
      const response = await axios.post('http://www.taxidermyvendor.hunt30.com/api/ShopDetails/add', formData, {
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
        availableTo: '',
        shopLogo: null,
        address: '',
        latitude: '',
        longitude: '',
        vendorId: '',
        takeAppointment: false,
      });
      navigate('/Subscription', { state: { shopId: response.data.shopDetails._id } });
    } catch (error) {
      console.error('Error creating shop details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDknLyGZRHAWa4s5GuX5bafBsf-WD8wd7s" libraries={libraries}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCard style={{ padding: '1rem', borderRadius: '0.5rem' }}>
              <CCardBody>
                <CForm onSubmit={handleSubmit} style={{ padding: '0.5rem' }}>
                  <h2 style={{ color: '#20c997', textAlign: 'center', fontSize: '1.5rem' }}>Shop Registration</h2>

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
                        type="email"
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

                  <div className="mb-2">
                    <CFormCheck
                      id="takeAppointment"
                      name="takeAppointment"
                      label="Appointment not required"
                      checked={shopDetails.takeAppointment}
                      onChange={handleCheckboxChange}
                      style={{ fontSize: '0.875rem' }}
                    />
                  </div>

                  {!shopDetails.takeAppointment && (
                    <>
                      <div className="mb-2 d-flex">
                        <div className="flex-grow-1 me-2">
                          <CFormLabel htmlFor="availableFrom" style={{ fontSize: '0.875rem' }}>Available From</CFormLabel>
                          <CFormInput
                            type="time"
                            id="availableFrom"
                            name="availableFrom"
                            value={shopDetails.availableFrom}
                            onChange={handleInputChange}
                            required
                            style={{ fontSize: '0.875rem', height: '2rem' }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <CFormLabel htmlFor="availableTo" style={{ fontSize: '0.875rem' }}>Available To</CFormLabel>
                          <CFormInput
                            type="time"
                            id="availableTo"
                            name="availableTo"
                            value={shopDetails.availableTo}
                            onChange={handleInputChange}
                            required
                            style={{ fontSize: '0.875rem', height: '2rem' }}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mb-2">
                    <CFormLabel htmlFor="address" style={{ fontSize: '0.875rem' }}>Shop Address</CFormLabel>
                    <Autocomplete
                      onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                      onPlaceChanged={handlePlaceSelect}
                    >
                      <CFormInput
                        id="address"
                        name="address"
                        placeholder="Enter shop address"
                        value={shopDetails.address}
                        onChange={handleInputChange}
                        required
                        style={{ fontSize: '0.875rem', height: '2rem' }}
                      />
                    </Autocomplete>
                  </div>

                  <div className="d-grid gap-2">
                    <CButton
                      type="submit"
                      color="success"
                      style={{ fontSize: '0.875rem', height: '2.5rem' }}
                    >
                      {loading ? <CSpinner size="sm" /> : 'Register Shop'}
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </LoadScript>
  );
};

export default ShopDetails;
