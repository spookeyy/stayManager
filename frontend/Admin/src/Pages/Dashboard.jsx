import React, { useState, useEffect } from 'react';
import { getHotelMetrics } from '../utils/api';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalBookings: 0,
    occupancyRate: 0,
    revenue: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      const data = await getHotelMetrics();
      setMetrics(data);
    };
    fetchMetrics();
  }, []);

  return (
    <div className="content">
      <h1>Dashboard</h1>
      <div className="metrics">
        <div>
          <h2>Total Bookings</h2>
          <p>{metrics.totalBookings}</p>
        </div>
        <div>
          <h2>Occupancy Rate</h2>
          <p>{metrics.occupancyRate}%</p>
        </div>
        <div>
          <h2>Revenue</h2>
          <p>${metrics.revenue}</p>
        </div>
      </div>
      {/* Add more dashboard components here */}
    </div>
  );
};

export default Dashboard;