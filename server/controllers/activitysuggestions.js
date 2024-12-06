import React from 'react';

const ActivitySuggestions = ({ destination }) => {
    const suggestions = {
        'Paris': [
            'Visit the Eiffel Tower',
            'Explore the Louvre Museum',
            'Stroll through Montmartre',
            'Enjoy a Seine River Cruise',
            'Try authentic French cuisine at a local bistro'
        ],
        'Tokyo': [
            'Visit the Senso-ji Temple',
            'Explore Akihabara for electronics and anime',
            'Stroll through Shibuya Crossing',
            'Enjoy sushi at Tsukiji Outer Market',
            'Relax in Ueno Park'
        ],
        'New York': [
            'Visit the Statue of Liberty',
            'Explore Central Park',
            'See a Broadway show',
            'Visit the Metropolitan Museum of Art',
            'Walk across the Brooklyn Bridge'
        ],
        'Bali': [
            'Relax on the beaches of Seminyak',
            'Visit the Uluwatu Temple',
            'Explore the rice terraces in Ubud',
            'Go snorkeling in Nusa Penida',
            'Experience a traditional Balinese dance'
        ],
        // Add more destinations and activities as needed
    };

    return (
        <div>
            <h2>Suggested Activities for {destination}</h2>
            {suggestions[destination] ? (
                <ul>
                    {suggestions[destination].map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            ) : (
                <p>No suggestions available for this destination.</p>
            )}
        </div>
    );
};

export default ActivitySuggestions;