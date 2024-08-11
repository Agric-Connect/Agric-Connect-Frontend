import { FaUser, FaChartLine, FaSeedling, FaPlusCircle, FaEnvelope, FaDollarSign, FaCog, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const NAVLINKS = [
    {
        icon: <FaUser />,
        text: "Profile Management",
        link: "/farmer-dashboard/profile"
    },
    {
        icon: <FaChartLine />,
        text: "Sales Trends",
        link: "/farmer-dashboard/overview"
    },
    {
        icon: <FaSeedling />,
        text: "Browse Listings",
        link: "/farmer-dashboard/browse"
    },
    {
        icon: <FaPlusCircle />,
        text: "Create Listing",
        link: "/farmer-dashboard/create"
    },
    {
        icon: <FaEnvelope />,
        text: "Messages",
        link: "/farmer-dashboard/messages"
    },
    {
        icon: <FaDollarSign />,
        text: "Earnings",
        link: "/farmer-dashboard/earnings"
    },
    {
        icon: <FaCog />,
        text: "Settings",
        link: "/farmer-dashboard/settings"
    }
];

export const SOCIAL_LINKS = [
    {
        icon: <FaFacebookF />,
        link: "https://facebook.com"
    },
    {
        icon: <FaTwitter />,
        link: "https://twitter.com"
    },
    {
        icon: <FaInstagram />,
        link: "https://instagram.com"
    }
];
