import React, { useState, useEffect } from 'react';
import CreateListingForm from '../forms/createListingForm';
import BrowseListings from '../browseListings';
import { apiDeleteListing, apiFetchListings, apiCreateListing, apiUpdateListing } from '../../../../services/listings';
import Pageloader from '../../../../components/pageLoader'; 

const CreateListingsWrapper = () => {
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

  const handleSave = async (listing) => {
    try {
      if (isEditing) {
        await apiUpdateListing(listing.id, listing);
        setListings(listings.map(l => (l.id === listing.id ? listing : l)));
      } else {
        await apiCreateListing(listing);
        setListings([...listings, { ...listing, id: Date.now().toString() }]);
      }
      setIsEditing(false);
      setCurrentListing(null);
    } catch (error) {
      console.error('Error saving listing:', error);
    }
  };

  const handleEdit = (listing) => {
    setCurrentListing(listing);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await apiDeleteListing(id);
      setListings(listings.filter(l => l.id !== id));
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  return (
    <div>
      {loading ? (
        <Pageloader />
      ) : isEditing ? (
        <CreateListingForm
          onSave={handleSave}
          initialData={currentListing}
        />
      ) : (
        <div>
          <CreateListingForm
            onSave={handleSave}
          />
          <BrowseListings
            listings={listings}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default CreateListingsWrapper;
