import React, { useState } from 'react';
import BrowseListings from '../browseListings';
import ListingForm from '../forms/listingForm';
import { dummyListings } from '../../components/constants/index'; // Adjust the import path as necessary

const BrowseListingsWrapper = () => {
  const [listings, setListings] = useState(dummyListings);
  const [isEditing, setIsEditing] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);

  const handleEdit = (listing) => {
    setCurrentListing(listing);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setListings(listings.filter(listing => listing.id !== id));
  };

  const handleSave = (updatedListing) => {
    setListings(listings.map(listing => listing.id === updatedListing.id ? updatedListing : listing));
    setIsEditing(false);
    setCurrentListing(null);
  };

  return (
    <div>
      {isEditing ? (
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
