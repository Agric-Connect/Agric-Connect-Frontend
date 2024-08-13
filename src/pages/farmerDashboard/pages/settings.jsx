import React, { useState } from 'react';

const Settings = () => {
  const [accountSettings, setAccountSettings] = useState({
    email: 'farmer@example.com',
    password: '',
    name: 'John Doe',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'Everyone',
    contactPermissions: 'Anyone',
  });

  const [languageSettings, setLanguageSettings] = useState({
    language: 'English',
    region: 'Ghana',
    currency: 'GHC',
  });

  const [themeSettings, setThemeSettings] = useState({
    theme: 'Light',
  });

  const handleAccountChange = (e) => {
    setAccountSettings({ ...accountSettings, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (e) => {
    setNotificationSettings({ ...notificationSettings, [e.target.name]: e.target.checked });
  };

  const handlePrivacyChange = (e) => {
    setPrivacySettings({ ...privacySettings, [e.target.name]: e.target.value });
  };

  const handleLanguageChange = (e) => {
    setLanguageSettings({ ...languageSettings, [e.target.name]: e.target.value });
  };

  const handleThemeChange = (e) => {
    setThemeSettings({ ...themeSettings, theme: e.target.value });
  };

  return (
    <div className="p-4 ml-8 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <div className="mt-2">
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={accountSettings.email} 
            onChange={handleAccountChange} 
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-2">Password</label>
          <input 
            type="password" 
            name="password" 
            value={accountSettings.password} 
            onChange={handleAccountChange} 
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            value={accountSettings.name} 
            onChange={handleAccountChange} 
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Notification Settings</h3>
        <div className="mt-2">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="emailNotifications" 
              checked={notificationSettings.emailNotifications} 
              onChange={handleNotificationChange} 
            />
            <span className="ml-2">Email Notifications</span>
          </label>
          <label className="flex items-center mt-2">
            <input 
              type="checkbox" 
              name="smsNotifications" 
              checked={notificationSettings.smsNotifications} 
              onChange={handleNotificationChange} 
            />
            <span className="ml-2">SMS Notifications</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Privacy Settings</h3>
        <div className="mt-2">
          <label className="block mb-2">Profile Visibility</label>
          <select 
            name="profileVisibility" 
            value={privacySettings.profileVisibility} 
            onChange={handlePrivacyChange} 
            className="w-full p-2 border rounded"
          >
            <option value="Everyone">Everyone</option>
            <option value="Only Me">Only Me</option>
            <option value="Connections Only">Connections Only</option>
          </select>
        </div>
        <div className="mt-2">
          <label className="block mb-2">Who Can Contact Me</label>
          <select 
            name="contactPermissions" 
            value={privacySettings.contactPermissions} 
            onChange={handlePrivacyChange} 
            className="w-full p-2 border rounded"
          >
            <option value="Anyone">Anyone</option>
            <option value="Connections Only">Connections Only</option>
            <option value="No One">No One</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Language and Regional Settings</h3>
        <div className="mt-2">
          <label className="block mb-2">Language</label>
          <select 
            name="language" 
            value={languageSettings.language} 
            onChange={handleLanguageChange} 
            className="w-full p-2 border rounded"
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <div className="mt-2">
          <label className="block mb-2">Region</label>
          <select 
            name="region" 
            value={languageSettings.region} 
            onChange={handleLanguageChange} 
            className="w-full p-2 border rounded"
          >
            <option value="Ghana">Ghana</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Kenya">Kenya</option>
            {/* Add more regions as needed */}
          </select>
        </div>
        <div className="mt-2">
          <label className="block mb-2">Currency</label>
          <select 
            name="currency" 
            value={languageSettings.currency} 
            onChange={handleLanguageChange} 
            className="w-full p-2 border rounded"
          >
            <option value="GHC">GHC</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Theme Settings</h3>
        <div className="mt-2">
          <label className="block mb-2">Theme</label>
          <select 
            name="theme" 
            value={themeSettings.theme} 
            onChange={handleThemeChange} 
            className="w-full p-2 border rounded"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
