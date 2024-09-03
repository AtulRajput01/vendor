import React, { useEffect, useState } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faCirclePlus, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';

const SpeciesExtensionList = () => {
  const [species, setSpecies] = useState([]);
  const [extensions, setExtensions] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const location = useLocation();
  const { shopId } = location.state || {}
  useEffect(() => {
    fetchSpecies(shopId);
    fetchExtension(shopId);
  }, [shopId]);

  const fetchSpecies = async (shopId) => {
    const response = await axios.post(`http://54.244.180.151:3002/api/species/getSpecies/${shopId}`);
    setSpecies(response.data.data)
  };
  const fetchExtension = async (shopId) => {
    const response = await axios.post(`http://54.244.180.151:3002/api/Extension/getByShop/${shopId}`);
    setExtensions(response.data.data)
  };
  const deleteExtension = async (id) => {
    const response = await axios.delete(`http://54.244.180.151:3002/api/Extension/deleteExten/${id}`);
    fetchExtension(shopId);
  }

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };

  const handleEditSubmit = async () => {
    const apiUrl = selectedItem.speciesName ? `http://54.244.180.151:3002/api/species/updateSpecies/${selectedItem._id}` : `http://54.244.180.151:3002/api/Extension/updateExtension/${selectedItem._id}`;
    const response = await axios.put(apiUrl, selectedItem);

    if (response.status === 200) {
      setEditModalOpen(false);
      selectedItem.speciesName ? fetchSpecies(shopId) : fetchExtension(shopId);
    }
  };

  const deleteSpecies = async (id) => {
    const response = await axios.delete(`http://54.244.180.151:3002/api/species/deleteSpecies/${id}`);
    fetchSpecies(shopId);
  }

  return (
    <div>
      <h3>Species and Extensions</h3>

      <div className="tables-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div className="table" style={{ flex: '1', marginRight: '10px' }}>
          <h5>Species</h5>
          <CTable className="table">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>S.No</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Name</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Image</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Price</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {species.length === 0 ? (
                <CTableRow>
                  <CTableDataCell colSpan="5" style={{ textAlign: "center" }}>No Data</CTableDataCell>
                </CTableRow>
              ) : (
                species.map((specie, index) => (
                  <CTableRow key={specie._id}>
                    <CTableDataCell style={{ textAlign: "center" }}>{index + 1}</CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>{specie.speciesName}</CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>
                      {specie.speciesImage ? (
                        <img src={`http://54.244.180.151:3002/${specie.speciesImage}`} alt="Species" style={{ width: '50px', height: '50px' }} />
                      ) : "No Image"}
                    </CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>{specie.price}</CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>
                      {/* <CButton style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                      <FontAwesomeIcon icon={faPen} style={{ color: "#74C0FC", fontSize: '20px' }} />
                      </CButton> */}
                      {/* Edit Button */}
                      <button
                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                        onClick={() => handleEditClick(specie._id)}
                      >
                        <FontAwesomeIcon icon={faPen} style={{ fontSize: '15px', marginRight: '10px' }} />
                      </button>
                      <button
                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                        onClick={() => deleteSpecies(specie._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} style={{ color: "#fd2b2b", fontSize: '20px' }} />
                      </button>
                    </CTableDataCell>
                  </CTableRow>
                ))
              )}
            </CTableBody>
          </CTable>
        </div>

        <div className="table" style={{ flex: '1', marginLeft: '10px' }}>
          <h5>Extensions</h5>
          <CTable className="table">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>S.No</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Specie</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Name</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Image</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Price</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {extensions.length === 0 ? (
                <CTableRow>
                  <CTableDataCell colSpan="5" style={{ textAlign: "center" }}>No Data</CTableDataCell>
                </CTableRow>
              ) : (
                extensions.map((extension, index) => (
                  <CTableRow key={extension._id}>
                    <CTableDataCell style={{ textAlign: "center" }}>{index + 1}</CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>{extension.specie}</CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>{extension.extensionName}</CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>
                      {extension.image ? (
                        <img src={`http://54.244.180.151:3002/${extension.image}`} alt="Extension" style={{ width: '50px', height: '50px' }} />
                      ) : "No Image"}
                    </CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>{extension.price}</CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>
                      <button
                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                        onClick={() => handleEditClick(extension._id)}
                      >
                        <FontAwesomeIcon icon={faPen} style={{ fontSize: '15px', marginRight: '10px' }} />
                      </button>
                      <button
                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                        onClick={() => deleteExtension(extension._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} style={{ color: "#fd2b2b", fontSize: '20px' }} />
                      </button>
                    </CTableDataCell>
                  </CTableRow>
                ))
              )}
            </CTableBody>
          </CTable>

        </div>
      </div>
      <CModal visible={editModalOpen} onClose={() => setEditModalOpen(false)}>
            <CModalHeader>
              <CModalTitle>Edit Item</CModalTitle>
            </CModalHeader>
            <CModalBody>
              {/* Add form fields here */}
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={selectedItem ? selectedItem.speciesName || selectedItem.extensionName : ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, speciesName: e.target.value })}
                />
              </div>
              {/* Add other fields like Image, Price, etc. */}
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setEditModalOpen(false)}>Cancel</CButton>
              <CButton color="primary" onClick={handleEditSubmit}>Save</CButton>
            </CModalFooter>
          </CModal>
    </div>
  );
};

export default SpeciesExtensionList;
