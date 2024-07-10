import React, { useState, useEffect } from 'react';
import { getGuests, addGuest, updateGuest, deleteGuest } from '../utils/api';

const Guests = () => {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const fetchGuests = async () => {
      const data = await getGuests();
      setGuests(data);
    };
    fetchGuests();
  }, []);

  const handleAddGuest = async () => {
    await addGuest(newGuest);
    setGuests([...guests, newGuest]);
    setNewGuest({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  const handleUpdateGuest = async (guest) => {
    await updateGuest(guest.id, guest);
    setGuests(guests.map((g) => (g.id === guest.id ? guest : g)));
  };

  const handleDeleteGuest = async (id) => {
    await deleteGuest(id);
    setGuests(guests.filter((g) => g.id !== id));
  };

  return (
    <div className="content">
      <h1>Guests</h1>
      <div className="guest-list">
        {guests.map((guest) => (
          <div key={guest.id} className="guest-card">
            <h2>{guest.name}</h2>
            <p>Email: {guest.email}</p>
            <p>Phone: {guest.phone}</p>
            <p>Address: {guest.address}</p>
            <button onClick={() => handleUpdateGuest(guest)}>Update</button>
            <button onClick={() => handleDeleteGuest(guest.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-guest">
        <h2>Add New Guest</h2>
        <input
          type="text"
          placeholder="Name"
          value={newGuest.name}
          onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newGuest.email}
          onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={newGuest.phone}
          onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
        />
        <textarea
          placeholder="Address"
          value={newGuest.address}
          onChange={(e) => setNewGuest({ ...newGuest, address: e.target.value })}
        />
        <button onClick={handleAddGuest}>Add Guest</button>
      </div>
    </div>
  );
};

export default Guests;