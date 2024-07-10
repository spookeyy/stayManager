import React, { useState, useEffect } from 'react';
import { getRooms, addRoom, updateRoom, deleteRoom } from '../utils/api';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    number: '',
    type: '',
    rate: '',
    availability: true,
  });

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  const handleAddRoom = async () => {
    await addRoom(newRoom);
    setRooms([...rooms, newRoom]);
    setNewRoom({
      number: '',
      type: '',
      rate: '',
      availability: true,
    });
  };

  const handleUpdateRoom = async (room) => {
    await updateRoom(room.id, room);
    setRooms(rooms.map((r) => (r.id === room.id ? room : r)));
  };

  const handleDeleteRoom = async (id) => {
    await deleteRoom(id);
    setRooms(rooms.filter((r) => r.id !== id));
  };

  return (
    <div className="content">
      <h2>Rooms</h2>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h3>Room {room.number}</h3>
            <p>Type: {room.type}</p>
            <p>Rate: ${room.rate}</p>
            <p>Availability: {room.availability ? 'Available' : 'Unavailable'}</p>
            <button onClick={() => handleUpdateRoom(room)}>Update</button>
            <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-room">
        <h4>Add New Room</h4>
        <input
          type="text"
          placeholder="Room Number"
          value={newRoom.number}
          onChange={(e) => setNewRoom({ ...newRoom, number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Room Type"
          value={newRoom.type}
          onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rate"
          value={newRoom.rate}
          onChange={(e) => setNewRoom({ ...newRoom, rate: e.target.value })}
        />
        <button onClick={handleAddRoom}>Add Room</button>
      </div>
    </div>
  );
};

export default Rooms;