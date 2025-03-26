import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-bottom: 30px;
  background-color: #292929; /* Couleur légèrement plus claire */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Ombre pour relief */
  color: #d3d3d3; /* Texte descriptif gris clair */

  h2 {
    font-size: 20px;
    color: #fbc02d; /* Accent sur les titres */
    margin-bottom: 15px;
  }

  p, ul, li {
    font-size: 16px;
    color: #d3d3d3; /* Texte descriptif gris clair */
    line-height: 1.6;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
  }

  img {
    border-radius: 8px;
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
`;

const About = () => {
  return (
    <StyledWrapper>
      <h2>Présentation</h2>
      <p>
        Bienvenue sur mon Portfolio !<br />
        À travers ce portfolio, vous découvrirez un aperçu de mon parcours, de mes compétences, de mes projets, et de mes coordonnées pour me contacter. Je vous souhaite une agréable navigation !
      </p>

      <h2>À propos de moi</h2>
      <p>
        Je suis <strong>Techer Noah Alexandre</strong>, 18 ans, actuellement étudiant en 2ème année de BUT Réseaux et Télécommunications à l’IUT de Saint-Pierre à La Réunion. Passionné par les nouvelles technologies, les réseaux et la cybersécurité, je suis motivé par l'envie d'explorer et de contribuer à ce domaine en pleine évolution.
      </p>
      <p>
        Avec pour objectif de devenir <em>expert en cybersécurité</em>, je suis actuellement en recherche de stage en Réseaux et Télécommunications, qui me permettrait de mettre en pratique mes connaissances et d'acquérir une expérience significative en milieu professionnel.
      </p>

      <h3>Ce que vous trouverez ici :</h3>
      <ul>
        <li>Un résumé de qui je suis et de mon parcours.</li>
        <li>Une présentation de mes projets réalisés et des compétences développées.</li>
        <li>Mes coordonnées pour me contacter ou en savoir plus.</li>
      </ul>

      <p>
        Je vous invite à explorer les sections dédiées ci-dessous ou via le menu en haut de la page. Bonne visite !
      </p>
    </StyledWrapper>
  );
};

export default About;
