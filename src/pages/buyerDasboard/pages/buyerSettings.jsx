import React, { useState } from 'react';
import AccountSettings from './settings/accountSettings';
import NotificationSettings from './settings/notificationSettings';
import PrivacySettings from './settings/privacySettings';
import LanguageSettings from './settings/languageSettings';
import ThemeSettings from './settings/themeSettings';

const BuyerSettings = () => {
  const [activeSection, setActiveSection] = useState('account');

  const renderSection = () => {
    switch (activeSection) {
      case 'account':
        return <AccountSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'privacy':
        return <PrivacySettings />;
      case 'language':
        return <LanguageSettings />;
      case 'theme':
        return <ThemeSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-1/4 bg-white p-6 border-r border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Settings</h2>
        <ul className="space-y-4">
          <li
            onClick={() => setActiveSection('account')}
            className={`cursor-pointer p-2 rounded-lg ${activeSection === 'account' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Account Settings
          </li>
          <li
            onClick={() => setActiveSection('notifications')}
            className={`cursor-pointer p-2 rounded-lg ${activeSection === 'notifications' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Notification Settings
          </li>
          <li
            onClick={() => setActiveSection('privacy')}
            className={`cursor-pointer p-2 rounded-lg ${activeSection === 'privacy' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Privacy Settings
          </li>
          <li
            onClick={() => setActiveSection('language')}
            className={`cursor-pointer p-2 rounded-lg ${activeSection === 'language' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Language & Regional Settings
          </li>
          <li
            onClick={() => setActiveSection('theme')}
            className={`cursor-pointer p-2 rounded-lg ${activeSection === 'theme' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Theme Settings
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        {renderSection()}
      </div>
    </div>
  );
};

export default BuyerSettings;
