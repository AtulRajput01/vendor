import React, { useState, useEffect } from 'react';
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
  CSpinner
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpeciesSelect = () => {
  const [speciesList, setSpeciesList] = useState([]);
  const [speciesOptions, setSpeciesOptions] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [speciesDetails, setSpeciesDetails] = useState({
    speciesName: '',
    speciesImage: null,
    price: '',
    shopId: ''
  });
  const location = useLocation();
  const { id } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpeciesOptions = async () => {
      try {
        const response = await axios.get('http://54.71.141.115:3002/species/getSpeciesCategories');
        setSpeciesOptions(response.data.data);
      } catch (error) {
        console.error('Error fetching species options:', error);
      }
    };

    fetchSpeciesOptions();
  }, []);

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
    setLoading(true);
    const formData = new FormData();
    formData.append('speciesName', speciesDetails.speciesName);
    formData.append('price', speciesDetails.price);
    formData.append('shopId', id);

    // Find the default image URL for the selected species
    const selectedSpecies = speciesOptions.find(species => species.name === speciesDetails.speciesName);
    const defaultImage = selectedSpecies ? selectedSpecies.image : '';

    // Append the image or default image URL
    if (speciesDetails.speciesImage) {
      formData.append('speciesImage', speciesDetails.speciesImage);
    } else if (defaultImage) {
      formData.append('speciesImage', defaultImage);
    }

    try {
      const response = await axios.post('http://54.71.141.115:3002/species/addSpecies', formData, {
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
      navigate('/Shops');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding species');
    }finally{
      setLoading(false);
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
                    {speciesOptions.map((species) => (
                      <option key={species.id} value={species.name}>
                        {species.name}
                      </option>
                    ))}
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
                <CButton
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
                  className="px-4"
                  type='submit'
                  disabled={loading} // Disable button while loading
                >
                  {loading ? <CSpinner size="sm" /> : 'Add Species'}
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

      <ToastContainer />
    </CContainer>
  );
};

export default SpeciesSelect;
