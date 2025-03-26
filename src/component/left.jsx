import React from 'react';
import styled from 'styled-components';
import Card from './card';
import Name from './name';

const Left = () => {
  return (
    <StyledWrapper>
      <div className="header_left">
          <Card />
          <br/>
          <Name />
        </div>
        
        <br/>

        <div className="list">
          <div className="line">
            <a href="mailto:n.techer@rt-iut.re" target="_blank" rel="noopener noreferrer">
              <img className="ico" src={`${process.env.PUBLIC_URL}/mail.png`} alt="mail" />
              <h3>n.techer@rt-iut.re</h3>
            </a>
          </div>

          <div className="line">
            <a href="tel:+33692434733" target="_blank" rel="noopener noreferrer">
              <img className="ico" src={`${process.env.PUBLIC_URL}/tel.png`} alt="tel" />
              <h3>0692 43 47 33</h3>
            </a>
          </div>

          <div className="line">
            <a href="https://github.com/Novah974-8" target="_blank" rel="noopener noreferrer">
              <img className="ico" src={`${process.env.PUBLIC_URL}/git.png`} alt="github" />
              <h3>Novah974-8</h3>
            </a>
          </div>

          <div className="line">
            <a  href="https://www.linkedin.com/in/noah-alexandre-techer-b530702a5/"
                target="_blank"
                rel="noopener noreferrer">
              <img className="ico" src={`${process.env.PUBLIC_URL}/in.png`} alt="Linkedin" />
              <h4>Noah Alexandre Techer</h4>
            </a>
          </div>
          
        </div>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.header_left {
  text-align: center;
}

.header_left h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #FFFFFF; /* Couleur accentuée pour le nom */
}

.header_left h3 {
  margin: 0
}

.header_left p {
  font-size: 16px;
  color: #d3d3d3; /* Texte secondaire */
}

.line {
  display: flex;
  align-items: center;
  gap: 10px;
}


.line a {
  display: flex;
  align-items: center;
  gap: 10px; /* espace entre l'icône et le texte */
  text-decoration: none;
  color: inherit;
}


.ico {
  width: 30px; /* Taille de l'image */
  height: 30px;
}

a {
  text-decoration: none; /* Retire le soulignement */
  color: inherit; /* Utilise la couleur par défaut (par exemple, du texte) */
}

a:hover {
  color: #00AA00; /* Optionnel : Ajoutez une couleur spécifique au survol */
}

`;

export default Left;