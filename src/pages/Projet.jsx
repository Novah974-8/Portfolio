import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Projet = () => {
  const navigate = useNavigate();
  const routes = [
    { path: '/projets/Sae105', img: process.env.PUBLIC_URL + '/sae105/img.jpg', name: "VPN maison"},
    { path: '/projets/Sae102', img: process.env.PUBLIC_URL + '/sae102/img.png', name: "Raspberry"}, 
    { path: '/projets/Sae302', img: process.env.PUBLIC_URL + '/sae302/img.png', name: "Application communicante"},
    { path: '/projets/Sae303', img: process.env.PUBLIC_URL + '/sae303/img.png', name: "Réseaux WAN"},
    { path: '/projets/Sae304', img: process.env.PUBLIC_URL + '/sae304/img.png', name: "Pentesting"}
  ];

  return (
    <StyledWrapper>
      <div className="wrapper"> 
        <h2>Mes projets</h2>
        <div className="inner" style={{ '--quantity': 5 }}>
          {routes.map((route, index) => (
            <div
              className="card"
              key={index}
              style={{
                '--index': index,
                '--color-card': `142, ${142 + index * 5}, 252`,
              }}
              onClick={() => navigate(route.path)}
            >
              <div
                className="img"
                style={{
                  backgroundImage: `url(${route.img})`,
                }}
              />
              
              <div className='name'>{route.name}</div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100vh;
  background-color: #1e1e1e;
  background-color: #292929; /* Couleur légèrement plus claire */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Ombre pour relief */
  color: #d3d3d3; /* Texte descriptif gris clair */

  .wrapper {
    width: 100%;
    height: 100%;
    position: relative; /* Pour positionner le h1 absolument */
  }

  h2 {
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 10; /* Assure que le titre passe par-dessus les cartes */
    color: #fbc02d;
    text-align: left;
  }

  .inner {
    --w: calc(20vmin);
    --h: calc(30vmin);
    --translateZ: calc(var(--w) + var(--h));
    --rotateX: -15deg;
    --perspective: 2000px;
    position: absolute;
    top: 50%; /* Centre verticalement */
    left: 50%; /* Centre horizontalement */
    transform: translate(-50%, -50%) perspective(var(--perspective));
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: translate(-50%, -50%) perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: translate(-50%, -50%) perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card), 1);
    border-radius: 12px;
    inset: 0;
    transform: rotateY(calc(360deg / var(--quantity) * var(--index)))
      translateZ(var(--translateZ));
    cursor: pointer;
  }

  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
  }

  .name {
  text-align: center;
  font-weight: bold;
}

`;

export default Projet;
