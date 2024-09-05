import React, { useState, useEffect } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CSpinner } from '@coreui/react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faCirclePlus, faPuzzlePiece, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
const Shops = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        fetchShop();
    }, []);

    const handleClick = (id) => {
        console.log("hgf",id);
        
        navigate('/SubscriptionOverview',{state:{id}});
    };

    const fetchShop = async () => {
        const vendorId = localStorage.getItem('vendorID');
        try {
            const response = await axios.get(`http://54.244.180.151:3002/api/ShopDetails/shop/${vendorId}`);
            setShops(response.data);
        } catch (error) {
            console.error('Error fetching shops:', error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="container mt-4">
            <div className='d-flex justify-content-between'>
                <h4>Subscription Listings</h4>
            </div>
             {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                    <CSpinner color="primary" size="lg" />
                </div>
            ) : (
            <CTable className="table mt-3">
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>S.No</CTableHeaderCell>
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Shop</CTableHeaderCell>
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}> Plan</CTableHeaderCell>
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}> Amount</CTableHeaderCell>
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Expiry Date</CTableHeaderCell>
                        {/* <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Action</CTableHeaderCell> */}
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {shops.map((shop, index) => (
                        <CTableRow key={shop.id}>
                            <CTableDataCell style={{ textAlign: "center" }}>{index + 1}</CTableDataCell>
                            <CTableDataCell style={{ textAlign: "center" }}>{shop.shopName}</CTableDataCell>
                            <CTableDataCell style={{ textAlign: "center" }}>{shop.subscriptionPlan}</CTableDataCell>
                            <CTableDataCell style={{ textAlign: "center" }}>
                                {shop.paymentHistory && shop.paymentHistory.length > 0 ? shop.paymentHistory[0].amountPaid : 'null'}
                            </CTableDataCell>

                            <CTableDataCell style={{ textAlign: "center" }}>
                                {shop.planExpiryDate ? shop.planExpiryDate.split('T')[0] : null}
                            </CTableDataCell>

                            {/* <CTableDataCell className='text-center'>
                                <Tooltip title="Vies Subscription">
                                    <button
                                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                                        onClick={() => handleClick(shop._id)}
                                    >
                                        <FontAwesomeIcon icon={faEye} style={{ color: "#007bff", fontSize: '20px' }} />
                                    </button>
                                </Tooltip>
                            </CTableDataCell> */}
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
            )}
        </div>
    );
};

export default Shops;
