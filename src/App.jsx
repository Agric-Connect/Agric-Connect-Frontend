import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import RegistrationForm from './pages/auth/registerForm';
import LoginForm from './pages/auth/loginForm';
import RecoverPasswordForm from './pages/auth/recoverPasswordForm';
import LandingPage from './pages/landingPage/landingPage';
import FarmerDashboardLayout from './pages/farmerDashboard/layout';
import Home from './pages/farmerDashboard/pages/home';
import ProfileManagement from './pages/farmerDashboard/pages/profileManagement';
import BrowseListings from './pages/farmerDashboard/pages/browseListings';
import CreateListing from './pages/farmerDashboard/pages/createListing';
import Messages from './pages/farmerDashboard/pages/messages';
import Settings from './pages/farmerDashboard/pages/settings';
import Earnings from './pages/farmerDashboard/pages/earnings';
import SalesTrends from './pages/farmerDashboard/pages/salesTrends';

const ErrorBoundary = ({ error }) => (
  <div>
    <h1>Something went wrong!</h1>
    <p>{error.message}</p>
  </div>
);

const router = createBrowserRouter([
  { path: '/register', element: <RegistrationForm /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/recover-password', element: <RecoverPasswordForm /> },
  { path: '/', element: <LandingPage /> },

  {
    path: '/farmer-dashboard', element: <FarmerDashboardLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: 'profile', element: <ProfileManagement /> },
      { path: 'browse', element: <BrowseListings /> },
      { path: 'create', element: <CreateListing /> },
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
