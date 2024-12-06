import React, { useState } from 'react';

export default function TripPlanner() {
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const services = [
    {
      title: 'Trip Plan',
      description: 'We are planning exhilarating trips around the globe!',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSuccessMessage('Your trip details have been submitted successfully!'); // Set success message
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#08C2FF' }}>Trip Planner</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <img src="/images/Bali.jpeg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <img src="/images/Canada.jpg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <img src="/images/Dubai.jpeg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <img src="/images/France.jpeg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <img src="/images/italy.jpg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <img src="/images/Japan.jpeg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <img src="/images/NewYork.jpg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <img src="/images/Switzerland.jpg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <img src="/images/Turkiye.jpeg" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
          <div key={index} style={{ margin: '20px', maxWidth: '300px' }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Trip Planner Form */}
      <h2 style={{ marginTop: '40px' }}>Tell Us About Your Trip!</h2>
      <form
        style={{ textAlign: 'left', marginTop: '20px', maxWidth: '600px', margin: 'auto' }}
        onSubmit={handleSubmit} // Call handleSubmit on form submission
      >
        <label htmlFor="destination" style={{ display: 'block', marginBottom: '10px' }}>
          Where are you planning to go?
        </label>
        <input
          id="destination"
          type="text"
          placeholder="Destination"
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />

        <label htmlFor="season" style={{ display: 'block', marginBottom: '10px' }}>
          Which month or season?
        </label>
        <select
          id="season"
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        >
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
        </select>

        <label htmlFor="expectations" style={{ display: 'block', marginBottom: '10px' }}>
          What do you expect from the trip?
        </label>
        <textarea
          id="expectations"
          rows="4"
          placeholder="Your expectations"
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />

        <label htmlFor="members" style={{ display: 'block', marginBottom: '10px' }}>
          How many members are going?
        </label>
        <input
          id="members"
          type="number"
          min="1"
          placeholder="Number of members"
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />

        <label htmlFor="budget" style={{ display: 'block', marginBottom: '10px' }}>
          Budget (in USD)
        </label>
        <input
          id="budget"
          type="number"
          min="0"
          step="100"
          placeholder="Your budget"
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#08C2FF', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {successMessage && <p style={{ color: 'red', fontWeight: 'bold', marginTop: '20px' }}>{successMessage}</p>} {/* Display success message */}
    </div>
  );
}