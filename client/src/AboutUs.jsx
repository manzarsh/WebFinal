import React from 'react'; 
 
export default function AboutUs() { 
  return ( 
    <div style={{ textAlign: 'center', padding: '20px' }}> 
      <h1 style={{ color: '#08C2FF', fontSize: '2.5em' }}>About Us</h1> 
       
      <h2 style={{ color: '#08C2FF', fontSize: '1.8em' }}>The High Table</h2> 
      <p style={{ color: 'white', fontSize: '1.2em', margin: '20px 0' }}> 
        We are The High Table Company. Our goal is to make travel planning simple and personalized for you.  
        We strive to create the best experiences tailored to your needs. 
      </p> 
 
      <h3 style={{ color: '#08C2FF', fontSize: '1.5em' }}>Meet Our Team</h3> 
      <p style={{ color: 'white', fontSize: '1em' }}> 
        Developed by a passionate team of tech enthusiasts, our app combines innovation and convenience.  
        Let's make your journeys memorable together! 
      </p> 
      <ul style={{ listStyleType: 'none', padding: 0, color: 'white', fontSize: '1em' }}> 
        <li>Lamia Alam Shova</li> 
        <li>Manzar Shikhaliyeva</li> 
        <li>Gautam Arora</li> 
        <li>Bhuvnesh Bhardwaj</li> 
        <li>Aditya Kataria</li> 
      </ul> 
    </div> 
  ); 
}