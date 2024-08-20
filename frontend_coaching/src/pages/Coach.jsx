import React, { useState, useEffect } from 'react';

const Coach = () => {
  const [availability, setAvailability] = useState([]);
  const [upcomingSlots, setUpcomingSlots] = useState([]);
  const [pastSessions, setPastSessions] = useState([]);
  const [newSlotDate, setNewSlotDate] = useState('');
  const [newSlotTime, setNewSlotTime] = useState('');
  const [rating, setRating] = useState('');
  const [notes, setNotes] = useState('');
  
  useEffect(() => {
    // Fetch upcoming slots and past sessions from the API when the component mounts
    fetchUpcomingSlots();
    fetchPastSessions();
  }, []);

  const fetchUpcomingSlots = async () => {
    // Mock fetch call - replace with your API call
    const slots = [
      { id: 1, date: '2024-08-21', time: '10:00 AM', student: 'John Doe' },
      { id: 2, date: '2024-08-22', time: '02:00 PM', student: 'Jane Smith' },
    ];
    setUpcomingSlots(slots);
  };

  const fetchPastSessions = async () => {
    // Mock fetch call - replace with your API call
    const sessions = [
      { id: 1, date: '2024-08-15', rating: 4, notes: 'Good session, very interactive.' },
      { id: 2, date: '2024-08-16', rating: 5, notes: 'Excellent understanding of concepts.' },
    ];
    setPastSessions(sessions);
  };

  const addAvailabilitySlot = async (e) => {
    e.preventDefault();
    // Here, you would typically send a request to your backend to save the slot
    const newSlot = {
      date: newSlotDate,
      time: newSlotTime,
      duration: 120, // 2 hours
    };
    
    setAvailability([...availability, newSlot]); // Update the local state
    setNewSlotDate('');
    setNewSlotTime('');
  };

  const [newSlot, setNewSlot] = useState('');

  const handleAddSlot = () => {
    if (!newSlot) return;

    const startTime = new Date(newSlot);
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 2); // Add 2 hours to the start time

    // Create a new slot object
    const slot = {
      id: availability.length + 1, // Mock ID
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      booked: false, // Slot is initially not booked
    };

    // Update the availability state
    setAvailability([...availability, slot]);
    setNewSlot(''); // Clear the input field
  };

  console.log(availability)

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Coach Dashboard</h2>

      {/* Add Availability Section */}
      {/* Add Availability Slot Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Add Availability</h3>
        <input
          type="datetime-local"
          value={newSlot}
          onChange={(e) => setNewSlot(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleAddSlot}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Slot
        </button>
      </div>

            {/* Upcoming Slots Section */}
    <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Available Slots</h3>
        <ul className="border rounded p-4">
          {availability.length > 0 ? (
            availability.map((slot) => (
              <li key={slot.id} className="border-b py-2">
                {new Date(slot.startTime).toDateString()} at 
                {new Date(slot.startTime).toTimeString()} 
              </li>
            ))
          ) : (
            <li>No upcoming slots.</li>
          )}
        </ul>
      </div>

      {/* Upcoming Slots Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Upcoming Slots</h3>
        <ul className="border rounded p-4">
          {upcomingSlots.length > 0 ? (
            upcomingSlots.map((slot) => (
              <li key={slot.id} className="border-b py-2">
                {slot.date} at {slot.time} - Student: {slot.student}
              </li>
            ))
          ) : (
            <li>No upcoming slots.</li>
          )}
        </ul>
      </div>

      {/* Past Sessions Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Past Sessions</h3>
        <ul className="border rounded p-4">
          {pastSessions.length > 0 ? (
            pastSessions.map((session) => (
              <li key={session.id} className="border-b py-2">
                Date: {session.date} - Rating: {session.rating} - Notes: {session.notes}
              </li>
            ))
          ) : (
            <li>No past sessions recorded.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Coach;
