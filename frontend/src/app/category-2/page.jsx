import React from 'react';
import './style.css'; // Ensure this points to the correct path for your CSS

const Card = ({ imageUrl, characterUrl }) => (
  <a href="#" alt="Mythrill" target="_blank" rel="noopener noreferrer">
    <div className="card">
      <div className="wrapper">
        <img src={imageUrl} alt="cover" className="cover-image" />
      </div>
      <img src="" alt="title" className="title" />
      <img src={characterUrl} alt="character" className="character" />
    </div>
  </a>
);

const App = () => {
  const cards = [
    {
      imageUrl: 'https://imgs.search.brave.com/7vicu7Gl1sA0hkn01JrEf3WeKUFch9CT6qcJ3VEM-CE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZG9nLXBob25lLWJh/Y2tncm91bmQuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA',
      characterUrl: 'https://imgs.search.brave.com/QJpzY5Be-2d_zElARJTyML-nMy0X81iDE7RR1bPLYPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JiZGUu/cG5n',
    },
    {
      imageUrl: 'https://imgs.search.brave.com/uqUfh6fab1TxtAAv5C3s2qS6uck6Byn9EOL0lqSzTWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc3LzUxLzgx/LzM2MF9GXzc3NTE4/MTM2X0Y4OEkwdjNS/Mm1ac0tFZ3h4WE1j/NGlxWGxPaks4T0xF/LmpwZw',
      characterUrl: 'https://imgs.search.brave.com/3-jtEsmrcfKqfszMUhwvOYUWPNUs5fGsx_KnBbuhk7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JiOGMu/cG5n',
    },
    {
      imageUrl: 'https://example.com/path-to-pet-image2.jpg',
      characterUrl: 'https://example.com/path-to-pet-character2.jpg',
    },
    // Add more card objects as needed
  ];

  return (
    
    <div className="app">
      {cards.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} characterUrl={card.characterUrl} />
      ))}
    </div>
  );
};

export default App;
