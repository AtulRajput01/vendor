import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OrderManage = () => {
  const [orderData, setOrderData] = useState({
    statusCounts: { Pending: 0, Shipping: 0, Confirmed: 0, Delivered: 0 },
    totalSales: 0,
    completedSales: 0,
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filterOption, setFilterOption] = useState('last7Days');
  const vendorID = localStorage.getItem('vendorID');

  useEffect(() => {
    const getStartAndEndDate = () => {
      const now = new Date();

      switch (filterOption) {
        case 'today':
          return [now, now];
        case 'yesterday':
          const yesterday = new Date(now);
          yesterday.setDate(now.getDate() - 1);
          return [yesterday, yesterday];
        case 'weekToDate':
          const startOfWeek = new Date(now);
          startOfWeek.setDate(now.getDate() - now.getDay() + 1);
          return [startOfWeek, now];
        case 'lastWeek':
          const startLastWeek = new Date(now);
          startLastWeek.setDate(now.getDate() - now.getDay() - 6);
          return [startLastWeek, now];
        case 'last7Days':
          const last7Days = new Date(now);
          last7Days.setDate(now.getDate() - 7);
          return [last7Days, now];
        case 'monthToDate':
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
          return [startOfMonth, now];
        case 'lastMonth':
          const startLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          return [startLastMonth, now];
        case 'last30Days':
          const last30Days = new Date(now);
          last30Days.setDate(now.getDate() - 30);
          return [last30Days, now];
        default:
          return [now, now];
      }
    };

    const [newStartDate, newEndDate] = getStartAndEndDate();
    setStartDate(newStartDate);
    setEndDate(newEndDate);

    if (vendorID) {
      fetchOrderSummary(newStartDate, newEndDate);
    }
  }, [filterOption, vendorID]);

  const fetchOrderSummary = (start, end) => {
    axios.post(`http://54.71.141.115:3002/summary/${vendorID}`, {
      startDate: start.toISOString().split('T')[0],
      endDate: end.toISOString().split('T')[0],
    })
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching order summary:', error);
      });
  };

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  const handleCustomDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      fetchOrderSummary(start, end);
    }
  };

  const orderStatuses = {
    labels: ['Pending', 'Shipping', 'Confirmed', 'Delivered'],
    datasets: [
      {
        label: 'Order Status Count',
        data: [
          orderData.statusCounts.Pending,
          orderData.statusCounts.Shipping,
          orderData.statusCounts.Confirmed,
          orderData.statusCounts.Delivered,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card bg-primary text-white" style={{ color: 'yellowgreen' }}>
            <div className="card-header">Current Orders</div>
            <div className="card-body">
              <p>Details about the current orders.</p>
              <Link to="/OrderDetails" className="btn btn-light">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-info text-white">
            <div className="card-header">Past Orders</div>
            <div className="card-body">
              <p>Track the status of past orders.</p>
              <Link to="/PastOrders" className="btn btn-light">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Date Filter Options */}
      <div className="mt-4">
        <h4>Filter Orders By Date</h4>
        <div className="btn-group" role="group">
          {['today', 'yesterday', 'weekToDate', 'lastWeek', 'last7Days', 'monthToDate', 'lastMonth', 'last30Days'].map(option => (
            <button
              key={option}
              className={`btn btn-primary ${filterOption === option ? 'active' : ''}`}
              onClick={() => handleFilterChange(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>
      </div>

      {/* Date Picker */}
      <div className="mt-2">
        <DatePicker
          selected={startDate}
          onChange={handleCustomDateChange}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy/MM/dd"
          className="form-control mb-2"
        />
      </div>

      {/* Graphical Data */}
      <div className="mt-4">
        <h4>Order Summary</h4>
        <div className="row">
          <div className="col-md-6">
            <Bar
              data={orderStatuses}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'top' },
                  title: { display: true, text: 'Order Status Overview' },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      precision: 0,
                    },
                  },
                },
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="card bg-secondary text-white">
              <div className="card-header">Total Sales</div>
              <div className="card-body">
                <h5 className="card-title">${orderData.totalSales}</h5>
                <p className="card-text">Sales amount for the selected date range.</p>
              </div>
            </div>
            <div className="card bg-secondary text-white mt-3">
              <div className="card-header">Completed Sales</div>
              <div className="card-body">
                <h5 className="card-title">${orderData.completedSales}</h5>
                <p className="card-text">Completed sales amount for the selected date range.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManage;
