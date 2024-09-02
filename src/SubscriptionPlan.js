import React, { useState, useEffect } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CSpinner } from '@coreui/react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faCirclePlus, faPuzzlePiece, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
const Shops = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true); // Loader state
    const navigate = useNavigate();

    useEffect(() => {
        fetchShop();
    }, []);

    const handleClick = () => {
        navigate('/SubscriptionOverview');
    };

    const fetchShop = async () => {
        const vendorId = localStorage.getItem('vendorID');
        try {
            const response = await axios.get(`http://54.244.180.151:3002/api/ShopDetails/shop/${vendorId}`);
            setShops(response.data);
        } catch (error) {
            console.error('Error fetching shops:', error);
        } finally {
            setLoading(false); // Stop loading after data fetch or error
        }
    };

    const handleDelete = async (id) => {
        setLoading(true); // Start loading during delete operation
        try {
            await axios.delete(`http://54.244.180.151:3002/api/ShopDetails/deleteShop/${id}`);
            fetchShop();
        } catch (error) {
            console.error('Error deleting shop:', error);
        } finally {
            setLoading(false); // Stop loading after delete operation
        }
    };

    const handleViewClick = async (shopId) => {
        navigate('/listing', { state: { shopId } });
    };

    const AddSpesies = async (id) => {
        navigate('/SpeciesSelect', { state: { id } });
    }

    const AddExtension = async (id) => {
        navigate('/Extension', { state: { id } });
    }

    const goToSubscription = async (shopId) => {
        navigate('/Subscription', { state: { shopId } });
    }

    return (
        <div className="container mt-4">
            <div className='d-flex justify-content-between'>
                <h4>Subscription Listings</h4>
                <CButton style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }} className="px-4" onClick={handleClick}>Add Shops</CButton>
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
                        {/* <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Shop Name</CTableHeaderCell> */}
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}> Plan</CTableHeaderCell>
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}> Amount</CTableHeaderCell>
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Expiry Date</CTableHeaderCell>
                        <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {shops.map((shop, index) => (
                        <CTableRow key={shop.id}>
                            <CTableDataCell style={{ textAlign: "center" }}>{index + 1}</CTableDataCell>
                            <CTableDataCell style={{ textAlign: "center" }}>{shop.shopName}</CTableDataCell>
                            {/* <CTableDataCell style={{ textAlign: "center" }}>{shop.ownerName}</CTableDataCell> */}
                            <CTableDataCell style={{ textAlign: "center" }}>{shop.subscriptionPlan}</CTableDataCell>
                            <CTableDataCell style={{ textAlign: "center" }}>
                                {shop.paymentHistory && shop.paymentHistory.length > 0 ? shop.paymentHistory[0].amountPaid : 'null'}
                            </CTableDataCell>

                            <CTableDataCell style={{ textAlign: "center" }}>
                                {shop.planExpiryDate ? shop.planExpiryDate.split('T')[0] : null}
                            </CTableDataCell>

                            <CTableDataCell className='text-center'>
                                <Tooltip title="Vies Species">
                                    <button
                                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                                        onClick={() => handleClick()}
                                    >
                                        <FontAwesomeIcon icon={faEye} style={{ color: "#007bff", fontSize: '20px' }} />
                                    </button>
                                </Tooltip>

                                {/* <button
                                    style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                                    onClick={() => handleDelete(shop._id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#fd2b2b", fontSize: '20px' }} />
                                </button>
                                {shop.isSubscription && !shop.isSubscriptionExpired ? (
                                    <>
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
                                                <FontAwesomeIcon icon={faPuzzlePiece} fade />
                                            </button>
                                        </Tooltip>
                                    </>
                                ) : (
                                    <>
                                        {shop.isSubscription && shop.isSubscriptionExpired ? (
                                            <Tooltip title="Upgrade Subscription">
                                                <button
                                                    style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                                                    onClick={() => goToSubscription(shop._id)}
                                                >
                                                    <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: '5px' }} />
                                                </button>
                                            </Tooltip>
                                        ) : (
                                            <Tooltip title="Go to Subscription">
                                                <button
                                                    style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                                                    onClick={() => goToSubscription(shop._id)}
                                                >
                                                    <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '5px' }} />
                                                </button>
                                            </Tooltip>
                                        )}
                                    </>
                                )} */}
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
            )}
        </div>
    );
};

export default Shops;
