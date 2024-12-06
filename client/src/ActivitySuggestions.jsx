import React from 'react';

export default function ActivitySuggestions() {
  const activities = [
    {
      title: 'Walk in nature',
      image: './images/walk.jpg',
      description: 'Enjoy the fresh air and sunshine while exploring a nearby park or trail. It is a great way to clear your head and get some exercise.'
    },
    {
      title: 'Visit to Museum',
      image: './images/museum.jpg',
      description: 'Curl up with a good book and escape into another world. It is a relaxing and stimulating activity that can spark your imagination.'
    },
    {
      title: 'Relax at the beach',
      image: './images/beach.jpg',
      description: 'Soak up the sun, enjoy the waves, and unwind on the sandy shores.'
    },
    {
      title: 'Shopping',
      image: './images/shopping.jpeg',
      description: 'Explore local shops and find unique items. It’s a fun way to spend your day.'
    },
    {
      title: 'Explore Art Galleries',
      image: './images/artgallery.jpeg',
      description: 'Discover local artists and immerse yourself in creativity and culture.'
    },
    {
      title: 'Stargazing Night',
      image: './images/star.jpg',
      description: 'Spend a night under the stars and marvel at the universe.'
    },
    {
      title: 'Local Cooking Class',
      image: './images/cooking.jpg',
      description: 'Learn new culinary skills and enjoy delicious meals with friends or family.'
    }

  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#08C2FF' }}>Activity Suggestions</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {activities.map((activity, index) => (
          <div 
            key={index} 
            style={{ 
              margin: '20px', 
              maxWidth: '350px', 
              width: '100%',
              height: '300px',
              cursor: 'pointer', 
              transition: 'transform 0.2s', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              overflow: 'hidden',
              backgroundColor: '#CDE8E5'

            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={activity.image} 
              alt={activity.title} 
              style={{ width: '100%', height: '45%' }} 
            />
            <h3 style={{ margin: '10px 0', color: '#003366' }}>{activity.title}</h3>
            <p style={{ padding: '0 10px', color: '#003366' }}>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}