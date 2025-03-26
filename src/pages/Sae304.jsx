import React from 'react';
import styled from 'styled-components';

const Right = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 30px;
  color: #ffffff;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 30px;
  background-color: #292929;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  h2, h3 {
    font-size: 20px;
    color: #fbc02d;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #d3d3d3;
    margin-bottom: 15px;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #fbc02d;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #ffca28;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    max-width: 300px; /* Largeur maximale réduite */
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Sae304 = () => {
  const handleDownload1 = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/sae304/rapport_ctf_machine_vulnérable.pdf`;
    link.download = 'rapport_ctf_machine_vulnérable.pdf'; // Nom du fichier à télécharger
    link.click();
  };

  const handleDownload2 = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/sae304/rapport_ctf_intro.pdf`; // Remplace par le chemin vers ton fichier PDF
    link.download = 'rapport_ctf_intro.pdf'; // Nom du fichier à télécharger
    link.click();
  };

  return (

      <Right>
        <Section>
          <h2>SAE 304 : Développement en Cybersécurité</h2>
          <ImageWrapper>
            <img src={`${process.env.PUBLIC_URL}/sae304/photo.jpg`} alt="TECHER Noah en CTF" />
          </ImageWrapper>
          <p>
            Pour la SAE 304 actuelle, l’objectif de ce projet est de développer et d’approfondir mes compétences en cybersécurité en participant à des compétitions de type Capture The Flag (CTF). À travers la simulation d’environnements informatiques vulnérables, ce projet vise à maîtriser les méthodologies et les outils de tests de pénétration, à identifier et exploiter des failles de sécurité, et à appliquer des techniques avancées pour sécuriser des systèmes dans des scénarios réalistes.
          </p>
          <button onClick={handleDownload1}>Télécharger le rapport CTF machine vulnérables</button> <br />
          <button onClick={handleDownload2}>Télécharger le rapport CTF introduction</button>
        </Section>

        <Section>
          <h3>Descriptif</h3>
          <p>
            Dans le cadre de mon projet d'études en cybersécurité, j'ai participé à diverses compétitions de type Capture The Flag (CTF). Ces défis pratiques simulent des environnements informatiques présentant des vulnérabilités, ce qui m'a permis de me familiariser avec les méthodes et outils utilisés en tests de pénétration.
          </p>
          <p>
            L'objectif était d'identifier et d'exploiter des failles de sécurité pour accéder à des informations protégées, appelées "flags". Cette expérience a renforcé mes compétences en cybersécurité en me permettant d'appliquer des techniques concrètes dans des contextes réalistes.
          </p>
        </Section>

        <Section>
          <h3>Résumé des étapes</h3>
          <ul>
            <li>Analyse des systèmes pour identifier les vulnérabilités potentielles.</li>
            <li>Exploitation des failles identifiées, comme les attaques par force brute ou les injections.</li>
            <li>Élévation des privilèges pour accéder à des ressources sensibles.</li>
            <li>Documentation rigoureuse de chaque action entreprise.</li>
          </ul>
          <p>
            Grâce à ces étapes, j'ai pu accéder à des données protégées tout en approfondissant ma compréhension des systèmes vulnérables.
          </p>
        </Section>

        <Section>
          <h3>Résultats et compétences développées</h3>
          <p>
            Ce projet m'a offert une immersion complète dans le domaine des tests de pénétration. J'ai acquis une compréhension approfondie des vulnérabilités courantes et des techniques d'exploitation, tout en développant mes compétences en analyse, en exploitation des failles et en élévation des privilèges.
          </p>
          <p>
            Ces expériences ont enrichi mon expertise en cybersécurité et renforcé ma capacité à résoudre des scénarios complexes dans un cadre professionnel.
          </p>
        </Section>
      </Right>

  );
};

export default Sae304;
