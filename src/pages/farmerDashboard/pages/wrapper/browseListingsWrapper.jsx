import React, { useState, useEffect } from 'react';
import BrowseListings from '../browseListings';
import ListingForm from '../forms/listingForm'; 
import { apiFetchListings, apiUpdateListing, apiDeleteListing } from '../../../../services/listings'; 
import Pageloader from '../../../../components/pageLoader'; 

const BrowseListingsWrapper = () => {
  const [listings, setListings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListingsData = async () => {
      try {
        const response = await apiFetchListings();
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListingsData();
  }, []);

  const handleEdit = (listing) => {
    setCurrentListing(listing);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await apiDeleteListing(id);
      setListings(listings.filter(listing => listing.id !== id));
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  const handleSave = async (updatedListing) => {
    try {
      if (updatedListing.id) {
        // Update existing listing
        await apiUpdateListing(updatedListing.id, updatedListing);
        setListings(listings.map(listing => listing.id === updatedListing.id ? updatedListing : listing));
      } else {
        // Add new listing (assuming this is the same form as in the `CreateListingForm`)
        await createListing(updatedListing); // You need to implement this or adjust as necessary
        setListings([...listings, { ...updatedListing, id: Date.now().toString() }]);
      }
      setIsEditing(false);
      setCurrentListing(null);
    } catch (error) {
      console.error('Error saving listing:', error);
    }
  };

  return (
    <div>
      {loading ? (
        <Pageloader />
      ) : isEditing ? (
        <ListingForm
          listing={currentListing}
          onSave={handleSave}
          onCancel={() => {
            setIsEditing(false);
            setCurrentListing(null);
          }}
        />
      ) : (
        <BrowseListings
          listings={listings}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default BrowseListingsWrapper;
