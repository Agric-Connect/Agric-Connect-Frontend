import { FaUser, FaChartLine, FaSeedling, FaPlusCircle, FaEnvelope, FaDollarSign, FaCog, FaFacebookF, FaTwitter, FaInstagram, FaHome } from 'react-icons/fa';
import { hero1, hero2, hero3, hero4, hero5 } from '../../../../assets';

export const NAVLINKS = [
    {
        icon: <FaHome />,
        text: "Overview",
        link: "/farmer-dashboard"
    },
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

export const dummyListings = [
    {
      id: '1',
      type: 'Tomatoes',
      quantity: 100,
      harvestDate: '2024-08-20',
      price: 25.50,
      photos: [hero1]
    },
    {
      id: '2',
      type: 'Cucumbers',
      quantity: 200,
      harvestDate: '2024-09-10',
      price: 15.75,
      photos: [hero2]
    },
    {
      id: '3',
      type: 'Carrots',
      quantity: 150,
      harvestDate: '2024-08-25',
      price: 30.00,
      photos: [hero3]
    },
    {
      id: '4',
      type: 'Lettuce',
      quantity: 80,
      harvestDate: '2024-08-30',
      price: 20.00,
      photos: [hero4]
    },
    {
      id: '5',
      type: 'Bell Peppers',
      quantity: 120,
      harvestDate: '2024-09-05',
      price: 18.40,
      photos: [hero5]
    }
];
