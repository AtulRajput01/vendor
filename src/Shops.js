import React, { useState, useEffect } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from '@coreui/react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye,faCirclePlus,faPuzzlePiece  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
const Shops = () => {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchShop();
  }, []);

  const handleClick = () => {
    navigate('/ShopDetails');
  };

  const fetchShop = async () => {
    const vendorId = localStorage.getItem('vendorID');
    const response = await axios.get(`http://localhost:3002/api/ShopDetails/shop/${vendorId}`);
    setShops(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3002/api/ShopDetails/deleteShop/${id}`);
    fetchShop();
  };

  const handleViewClick = async (shopId) => {
    navigate('/listing', { state: { shopId } });
  };

  const AddSpesies=async(id)=>{
    navigate('/SpeciesSelect', { state: { id } });
  }

  const AddExtension=async(id)=>{
    navigate('/Extension', { state: { id } });
  }

  return (
    <div className="container mt-4">
      <div className='d-flex justify-content-between'>
        <h2>Shop Listings</h2>
        <CButton color="primary" className="px-4" onClick={handleClick}>Add Shops</CButton>
      </div>
      <CTable className="table mt-3">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>S.No</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Shop Name</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Owner Name</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Owner Email</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Contact Number</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Available From</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Available To</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Address</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Shop Logo</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {shops.map((shop, index) => (
            <CTableRow key={shop.id}>
              <CTableDataCell style={{ textAlign: "center" }}>{index + 1}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{shop.shopName}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{shop.ownerName}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{shop.ownerEmail}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{shop.contactNumber}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{shop.availableFrom}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{shop.availableTo}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{shop.address}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>
                {shop.shopLogo ? (
                  <img src={`http://localhost:3002/${shop.shopLogo}`} alt="Shop Logo" style={{ width: '50px', height: '50px' }} />
                ) : "null"}
              </CTableDataCell>
              <CTableDataCell>
                <Tooltip title="Vies Species">
                  <button
                  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                  onClick={() => handleViewClick(shop._id)}
                  >
                  <FontAwesomeIcon icon={faEye} style={{ color: "#007bff", fontSize: '20px' }} />
                  </button>
                </Tooltip>

                <button
                  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                  onClick={() => handleDelete(shop._id)}
                >
                  <FontAwesomeIcon icon={faTrash} style={{ color: "#fd2b2b", fontSize: '20px' }} />
                </button>
                <Tooltip title="Add Species">
                  <button
                    style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                    onClick={() => AddSpesies(shop._id)}
                  >
                    <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#28a745", fontSize: '20px' }} />
                  </button>
                </Tooltip>
                <Tooltip title="Add Extensions">
                  <button
                    style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                    onClick={() => AddExtension(shop._id)}
                  >
                    <FontAwesomeIcon icon={faPuzzlePiece} fade  />
                  </button>
                </Tooltip>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
};

export default Shops;
