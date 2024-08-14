import { FaHome, FaFacebookF, FaSearch, FaTwitter, FaInstagram, FaHeart, FaClipboardList, FaEnvelope, FaCog, FaQuestionCircle, FaShoppingCart, FaUser } from 'react-icons/fa';

export const BUYER_NAVLINKS = [
    { 
        icon: <FaHome />, 
        text: 'Home', 
        link: '/buyer'
     },
     {
        icon: <FaUser />,
        text: 'Profile Management',
        link: '/buyer/profile'
     },
     {
        icon: <FaSearch />,
        text: 'Browse Listings',
        link: '/buyer/browse-listings'
     },
    { 
        icon: <FaHeart />, 
        text: 'Saved Listings', 
        link: '/buyer/saved-listings' 
    },
    { 
        icon: <FaShoppingCart />, 
        text: 'Orders', 
        link: '/buyer/orders' 
    },
    { 
        icon: <FaEnvelope />, 
        text: 'Messages', 
        link: '/buyer/messages' 
    },
    { 
        icon: <FaClipboardList />, 
        text: 'Wishlist', 
        link: '/buyer/wishlist'
     },
    { 
        icon: <FaCog />, 
        text: 'Settings', 
        link: '/buyer/settings' 
    },
    { 
        icon: <FaQuestionCircle />, 
        text: 'Support', 
        link: '/buyer/support' 
    },
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
    }];
