import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  CSpinner, // Import CSpinner for the loader
} from '@coreui/react'; // Adjust imports based on your setup
import { useLocation } from 'react-router-dom';

const ExtensionSelect = () => {
  const [speciesOptions, setSpeciesList] = useState([]);
  const [extensionDetails, setExtensionDetails] = useState({
    species: '', // Updated state property name
    extensionName: '',
    extensionDescription: '',
    extensionImage: null,
    price: '',
    shopId: '',
    role: 'vendor'
  });
  const [loading, setLoading] = useState(false); // Loader state
  const location = useLocation();
  const { id } = location.state || {}
  const navigate = useNavigate();

  useEffect(() => {
    fetchSpecie(id);
  }, [id]);

  const fetchSpecie = async (id) => {
    setLoading(true);
    try {
      const response = await axios.post(`http://54.71.141.115:3002/species/getSpecies/${id}`);
      setSpeciesList(response.data.data);
    } catch (error) {
      console.error('Error in fetching species:', error);
    }
    finally {
      setLoading(false); // Stop loader after fetching
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExtensionDetails({
      ...extensionDetails,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setExtensionDetails({
      ...extensionDetails,
      extensionImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader when submitting the form
    const formData = new FormData();
    formData.append('specie', extensionDetails.species); // Updated property name
    formData.append('extensionName', extensionDetails.extensionName);
    formData.append('extensionDescription', extensionDetails.extensionDescription);
    formData.append('extensionImage', extensionDetails.extensionImage);
    formData.append('price', extensionDetails.price);
    formData.append('shopId', id);
    formData.append('role', extensionDetails.role);

    try {
      await axios.post('http://54.71.141.115:3002/Extension/addExtension', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/Shops');
    } catch (error) {
      console.error('Error adding extension:', error);
    } finally {
      setLoading(false); // Stop loader after submission
    }
  };

  return (
    <CContainer style={{ padding: '5rem' }}>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCard>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <h1 style={{ color: '#20c997' }}>Extension Registration</h1>
                <div className='mb-3'>
                  <CFormLabel htmlFor="species" style={{ color: 'chocolate', fontStyle: 'inherit' }}>
                    Specie Name
                  </CFormLabel>
                  <CFormSelect
                    id="species"
                    name="species"
                    value={extensionDetails.species}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select species</option>
                    {speciesOptions.map((species) => (
                      <option key={species.id} value={species.speciesName}>
                        {species.speciesName}
                      </option>
                    ))}
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="extensionName" style={{ color: 'chocolate', fontStyle: 'inherit' }}>
                    Extension Name
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="extensionName"
                    name="extensionName"
                    placeholder="Enter extension name"
                    value={extensionDetails.extensionName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="extensionDescription" style={{ color: 'chocolate', fontStyle: 'inherit' }}>
                    Extension Description
                  </CFormLabel>
                  <CFormTextarea
                    id="extensionDescription"
                    name="extensionDescription"
                    rows="4"
                    placeholder="Enter extension description"
                    value={extensionDetails.extensionDescription}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="extensionImage" style={{ color: 'chocolate', fontStyle: 'inherit' }}>
                    Extension Image
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    id="extensionImage"
                    name="extensionImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="price" style={{ color: 'chocolate', fontStyle: 'inherit' }}>
                    Price
                  </CFormLabel>
                  <CFormInput
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Enter price"
                    value={extensionDetails.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <CButton
                          type = 'submit'
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
                          className="px-4"
                          disabled={loading} // Disable button while loading
                        >
                          {loading ? <CSpinner size="sm" /> : 'Add Extension'} {/* Show loader in button */}
                        </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ExtensionSelect;
