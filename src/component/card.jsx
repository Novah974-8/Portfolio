import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/img.jpg`}
          alt="Description"
          className="card-image"
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 200px;
    height: 250px;
    padding: 3px;
    margin: 0; /* Supprime les marges pour le centrage */
    margin-top: 10px;
    border-radius: 1rem;
    overflow: hidden;
    background: linear-gradient(to left, #f7ba2b 0%, #00AA00 100%);
    position: relative;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem; /* Coins arrondis pour l'image */
    transition: transform 0.5s ease;
  }

  .card:hover .card-image {
    transform: scale(1.05); /* Zoom léger au survol */
  }
`;

export default Card;
