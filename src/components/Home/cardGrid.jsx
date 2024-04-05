// CardGrid.js
import React from 'react';
import FlippingCard from './flippingCard';
// import FlippingCard from './FlippingCard';
// import FlippingCard from 'FlippingCard';

const CardGrid = () => {
  const cards = [
    {
      image: 'favicon.ico',
      title: 'Card 1',
      description: 'Description for card 1',
      topic: 'Topic 1',
    },
    {
      image: 'image2.jpg',
      title: 'Card 2',
      description: 'Description for card 2',
      topic: 'Topic 2',
    },
    
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <FlippingCard key={index} image={card.image} title={card.title} description={card.description} topic={card.topic} />
       
      ))}
    </div>

  );
};

export default CardGrid;
