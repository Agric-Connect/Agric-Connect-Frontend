import React, { useState } from 'react';
import CreateListingForm from '../forms/createListingForm';
import BrowseListings from '../browseListings';

const CreateListingsWrapper = () => {
  const [listings, setListings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);

  const handleSave = (listing) => {
    if (isEditing) {
      setListings(listings.map(l => (l.id === listing.id ? listing : l)));
    } else {
      setListings([...listings, { ...listing, id: Date.now().toString() }]);
    }
    setIsEditing(false);
    setCurrentListing(null);
  };

  const handleEdit = (listing) => {
    setCurrentListing(listing);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setListings(listings.filter(l => l.id !== id));
  };

  return (
    <div>
      {isEditing ? (
        <CreateListingForm onSave={handleSave} initialData={currentListing} />
      ) : (
        <div>
          <CreateListingForm onSave={handleSave} />
          <BrowseListings listings={listings} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default CreateListingsWrapper;
