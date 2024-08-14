import React from 'react';
import { Link } from 'react-router-dom';

const OrderManage = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card bg-primary text-white" style={{ color: 'yellowgreen' }}>
            <div className="card-header">Order Details</div>
            <div className="card-body">
              <p>Details about the order.</p>
              <Link to="/OrderDetails" className="btn btn-light">View Details</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-info text-white">
            <div className="card-header">Order Status Tracking</div>
            <div className="card-body">
              <p>Track the current status of the order.</p>
              <Link to="/OrderStatusTrack" className="btn btn-light">Track Status</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-warning text-dark">
            <div className="card-header">Billing Information</div>
            <div className="card-body">
              <p>Billing details for the order.</p>
              <Link to="/order/billing" className="btn btn-light">View Billing</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManage;
