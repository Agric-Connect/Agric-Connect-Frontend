import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationForm from "./pages/auth/registerForm";
import LoginForm from "./pages/auth/loginForm";
import RecoverPasswordForm from "./pages/auth/recoverPasswordForm";
import LandingPage from "./pages/landingPage/landingPage";
import FarmerDashboardLayout from "./pages/farmerDashboard/layout";
import Home from "./pages/farmerDashboard/pages/home";
import ProfileManagement from "./pages/farmerDashboard/pages/profileManagement";
import CreateListing from "./pages/farmerDashboard/pages/createListing";
import Messages from "./pages/farmerDashboard/pages/messages";
import Settings from "./pages/farmerDashboard/pages/settings";
import Earnings from "./pages/farmerDashboard/pages/earnings";
import SalesTrends from "./pages/farmerDashboard/pages/salesTrends";
import ErrorBoundary from "./pages/farmerDashboard/error/errorBoundry";
import CreateListingsWrapper from "./pages/farmerDashboard/pages/wrapper/createListingsWrapper";
import BrowseListingsWrapper from "./pages/farmerDashboard/pages/wrapper/browseListingsWrapper";
import BuyerDashboardLayout from "./pages/buyerDasboard/layout";
import BuyerHome from "./pages/buyerDasboard/pages/buyerHome";
import BuyerBrowseListings from "./pages/buyerDasboard/pages/buyerBrowseListings";
import SavedListings from "./pages/buyerDasboard/pages/savedListings";
import Orders from "./pages/buyerDasboard/pages/orders";
import ViewOrder from "./pages/buyerDasboard/pages/viewOrder";
import BuyerMessages from "./pages/buyerDasboard/pages/buyerMessages";
import Wishlist from "./pages/buyerDasboard/pages/wishList";
import BuyerProfileManagement from "./pages/buyerDasboard/pages/buyerProfileManagement";
import BuyerSettings from "./pages/buyerDasboard/pages/buyerSettings";
import Support from "./pages/buyerDasboard/pages/support";
import ProduceSection from "./pages/landingPage/produceSection";
import ProduceDetail from "./pages/landingPage/produceDetail";
import LogoutPage from "./pages/auth/logoutPage";

const router = createBrowserRouter([
  { path: "/register", element: <RegistrationForm /> },
  { path: "/login", element: <LoginForm /> },
  { path: "/logout", element: <LogoutPage /> },
  { path: "/recover-password", element: <RecoverPasswordForm /> },
  { path: "/", element: <LandingPage /> },

  { path: "buyer/orders/:id", element: <ViewOrder /> },


  {
    path: "/farmer-dashboard",
    element: (
      <ErrorBoundary>
        <FarmerDashboardLayout />
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <ProfileManagement /> },
      { path: "browse", element: <BrowseListingsWrapper /> },
      { path: "create", element: <CreateListingsWrapper /> },
      { path: "messages", element: <Messages /> },
      { path: "settings", element: <Settings /> },
      { path: "earnings", element: <Earnings /> },
      { path: "overview", element: <SalesTrends /> },
    ],
  },

  {
    path: "/buyer",
    element: <BuyerDashboardLayout />,
    children: [
      { index: true, element: <BuyerHome /> },
      { path: "browse-listings", element: <BuyerBrowseListings /> },
      { path: "saved-listings", element: <SavedListings /> },
      { path: "orders", element: <Orders /> },
      { path: "messages", element: <BuyerMessages /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "profile", element: <BuyerProfileManagement /> },
      { path: "settings", element: <BuyerSettings /> },
      { path: "support", element: <Support /> },
    ],
  },

  { path: "/produce", element: <ProduceSection /> },
  { path: "/produce/:id", element: <ProduceDetail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
