import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegistrationForm from './pages/auth/registerForm';
import LoginForm from './pages/auth/loginForm';
import RecoverPasswordForm from './pages/auth/recoverPasswordForm';
import LandingPage from './pages/landingPage/landingPage';
import FarmerDashboardLayout from './pages/farmerDashboard/layout';
import Home from './pages/farmerDashboard/pages/home';
import ProfileManagement from './pages/farmerDashboard/pages/profileManagement';
import CreateListing from './pages/farmerDashboard/pages/createListing';
import Messages from './pages/farmerDashboard/pages/messages';
import Settings from './pages/farmerDashboard/pages/settings';
import Earnings from './pages/farmerDashboard/pages/earnings';
import SalesTrends from './pages/farmerDashboard/pages/salesTrends';
import ErrorBoundary from './pages/farmerDashboard/error/errorBoundry';
import CreateListingsWrapper from './pages/farmerDashboard/pages/wrapper/createListingsWrapper';
import BrowseListingsWrapper from './pages/farmerDashboard/pages/wrapper/browseListingsWrapper';

const router = createBrowserRouter([
  { path: '/register', element: <RegistrationForm /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/recover-password', element: <RecoverPasswordForm /> },
  { path: '/', element: <LandingPage /> },

  {
    path: '/farmer-dashboard',
    element: (
      <ErrorBoundary>
        <FarmerDashboardLayout />
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'profile', element: <ProfileManagement /> },
      { path: 'browse', element: <BrowseListingsWrapper /> }, 
      { path: 'create', element: <CreateListingsWrapper /> },
      { path: 'messages', element: <Messages /> },
      { path: 'settings', element: <Settings /> },
      { path: 'earnings', element: <Earnings /> },
      { path: 'overview', element: <SalesTrends /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
