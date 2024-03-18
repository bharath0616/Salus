// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './main.css'
import axios from 'axios';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
const Partner = () => {
  const [salesOrderId, setSalesOrderId] = useState('');
  const [salesOrderItem, setSalesOrderItem] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const makeApiRequest = async () => {
    if (!salesOrderId || !salesOrderItem) {
      setError('Enter both Sales Order ID and Sales Order Item');
      setData(null);
      return;
    }
    try {
      const response = await axios.get(`http://localhost:3000/billingPlan/${salesOrderId}/${salesOrderItem}`);
      setData(response.data);
      setError(null);
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setError('Entered sales order ID or sales order item doesn\'t exist');
      } else {
        setError(err.message || 'An error occurred during the API request');
      }
      setData(null);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
    makeApiRequest();
  }, [salesOrderId, salesOrderItem]);   

  const handleSalesOrderIdChange = (e) => {
    setSalesOrderId(e.target.value);
  };

  const handleSalesOrderItemChange = (e) => {
    setSalesOrderItem(e.target.value);
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      return 'NULL ';
    }

    const match = dateString.match(/\d+/);

    if (!match) {
      return ''; 
    }

    const timestamp = parseInt(match[0]);
    const formattedDate = new Date(timestamp).toLocaleDateString();
    return formattedDate;
  };

  const renderCell = (value) => {
    return value !== undefined && value !== null && value !== '' ? value : 'NULL';
  };

  return (
    <div className='head' data-aos='fade-left'>
      <div className='input'>
        <label>
          Enter Sales Order ID:
          <input type="number" value={salesOrderId} onChange={handleSalesOrderIdChange} min={0}/>
        </label>
        <label>
          Enter Sales Order Item:
          <input type="number" value={salesOrderItem} onChange={handleSalesOrderItemChange} min={0}/>
        </label>
        <button hidden onClick={makeApiRequest}>Fetch Data</button> 
      </div>
      
      {data && (
        <div>
          <table data-aos='fade-left'>
            <thead>
              <tr>
                <th>Billing Plan ID</th>
                <th>Billing Plan Item</th>
                {/* Add more columns based on your API response */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{renderCell(data.d.BillingPlanID)}</td>
                <td>{renderCell(data.d.BillingPlanItem)}</td>
                {/* Add more cells based on your API response */}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {error && (
        <div className='error' data-aos="fade-right">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Partner;
