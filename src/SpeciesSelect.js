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
  CFormSelect,
  CButton,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const SpeciesSelect = () => {
  const [speciesList, setSpeciesList] = useState([]);
  const [speciesDetails, setSpeciesDetails] = useState({
    speciesName: '',
    speciesImage: null,
    price: '',
    shopId:''
  });
  const location = useLocation();
  const { id } = location.state || {}
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSpeciesDetails({
      ...speciesDetails,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setSpeciesDetails({
      ...speciesDetails,
      speciesImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('speciesName', speciesDetails.speciesName);
    formData.append('speciesImage', speciesDetails.speciesImage);
    formData.append('price', speciesDetails.price);
    formData.append('shopId', id);


    try {
      const response = await axios.post('http://54.244.180.151:3002/api/species/addSpecies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const newSpecies = response.data;
      setSpeciesList([...speciesList, newSpecies]);
      setSpeciesDetails({
        speciesName: '',
        speciesImage: null,
        price: '',
      });
       navigate('/Shops')
    } catch (error) {
      console.error('Error adding species:', error);
    }
  };

  const handleAddMore = async () => {
    await handleSubmit();
    document.getElementById('addMoreSection').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFinalSubmit = async () => {
    console.log('Submitting all species:', speciesList);
    setSpeciesList([]);
    navigate('/Extension');
  };

  return (
    <CContainer style={{ padding: '5rem' }}>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCard>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <h1 style={{ color: '#20c997' }}>Species Registration</h1>
                <div className="mb-3">
                  <CFormLabel htmlFor="speciesName" style={{ color: 'chocolate', fontStyle: 'inherit' }}>
                    Species Name
                  </CFormLabel>
                  <CFormSelect
                    id="speciesName"
                    name="speciesName"
                    value={speciesDetails.speciesName}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select species</option>
                    <option value="Deer">Deer</option>
                    <option value="Elk">Elk</option>
                    <option value="Bears">Bears</option>
                    <option value="Cats">Cats</option>
                    <option value="African Game">African Game</option>
                    <option value="Birds">Birds</option>
                    <option value="Fish">Fish</option>
                    <option value="Whitetail Deer">Whitetail Deer</option>
                    <option value="Mule Deer">Mule Deer</option>
                    <option value="Elk">Elk</option>
                    <option value="Black Bear">Black Bear</option>
                    <option value="Bobcat">Bobcat</option>
                    <option value="Wild Turkey">Wild Turkey</option>
                    <option value="Waterfowl">Waterfowl</option>
                    <option value="Upland Game Birds">Upland Game Birds</option>
                    <option value="Predators">Predators</option>
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="speciesImage" style={{ color: 'chocolate', fontStyle: 'inherit' }}>
                    Species Image
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    id="speciesImage"
                    name="speciesImage"
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
                    value={speciesDetails.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <CButton type="submit" color="primary">
                  Add Species
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {speciesList.length > 0 && (
        <div id="addedSpecies" className="mt-5">
          <h2>Added Species</h2>
          <CListGroup>
            {speciesList.map((species, index) => (
              <CListGroupItem key={index}>
                <strong>{species.speciesName}</strong> - {species.price}
              </CListGroupItem>
            ))}
          </CListGroup>
          <CButton color="primary" onClick={handleFinalSubmit} className="mt-3">
            Submit All Species
          </CButton>
        </div>
      )}

      {/* <div id="addMoreSection" className="mt-5">
        <CButton color="secondary" onClick={handleAddMore}>
          Add More Species
        </CButton>
      </div> */}
    </CContainer>
  );
};

export default SpeciesSelect;
