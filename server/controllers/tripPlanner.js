import React, { useState } from 'react';

//import ActivitySuggestions from './path/to/ActivitySuggestions';

const TripPlanner = () => {
    const [destination, setDestination] = useState('');
    const [activities, setActivities] = useState([]);
    const [activityInput, setActivityInput] = useState('');

    const handleAddActivity = () => {
        if (activityInput) {
            setActivities([...activities, activityInput]);
            setActivityInput('');
        }
    };

    const handleRemoveActivity = (index) => {
        const newActivities = activities.filter((_, i) => i !== index);
        setActivities(newActivities);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the submission of the trip plan
        alert(`Trip to ${destination} planned with activities: ${activities.join(', ')}`);
    };

    return (
        <div>
            <h1>Trip Planner</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Destination:
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Add Activity:
                        <input
                            type="text"
                            value={activityInput}
                            onChange={(e) => setActivityInput(e.target.value)}
                        />
                    </label>
                    <button type="button" onClick={handleAddActivity}>
                        Add
                    </button>
                </div>
                <div>
                    <h3>Activities:</h3>
                    <ul>
                        {activities.map((activity, index) => (
                            <li key={index}>
                                {activity}
                                <button type="button" onClick={() => handleRemoveActivity(index)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="submit">Plan Trip</button>
            </form>
            <div>
                <h3>Available Destinations:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {images.map((image, index) => (
                        <div key={index} style={{ margin: '10px' }}>
                            <img src={image} alt={`Destination ${index + 1}`} style={{ width: '150px', height: '100px', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TripPlanner;