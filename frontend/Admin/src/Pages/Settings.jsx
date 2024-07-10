import React, { useState, useEffect } from 'react';
import { getSettings, updateSettings } from '../utils/api';

const Settings = () => {
  const [settings, setSettings] = useState({
    hotelName: '',
    address: '',
    phone: '',
    email: '',
    policies: '',
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getSettings();
      setSettings(data);
    };
    fetchSettings();
  }, []);

  const handleUpdateSettings = async () => {
    await updateSettings(settings);
  };

  return (
    <div className="content">
      <h1>Settings</h1>
      <div className="settings-form">
        <label>
          Hotel Name:
          <input
            type="text"
            value={settings.hotelName}
            onChange={(e) => setSettings({ ...settings, hotelName: e.target.value })}
          />
        </label>
        <label>
          Address:
          <textarea
            value={settings.address}
            onChange={(e) => setSettings({ ...settings, address: e.target.value })}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={settings.phone}
            onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
          />
        </label>
        <label>
          Policies:
          <textarea
            value={settings.policies}
            onChange={(e) => setSettings({ ...settings, policies: e.target.value })}
          />
        </label>
        <button onClick={handleUpdateSettings}>Update Settings</button>
      </div>
    </div>
  );
};

export default Settings;