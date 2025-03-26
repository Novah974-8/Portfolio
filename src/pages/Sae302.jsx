import React from 'react';
import styled from 'styled-components';

const Right = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 30px;
  color: #ffffff;
  overflow-y: auto;
  max-height: 100%;
`;

const Section = styled.div`
  margin-bottom: 30px;
  background-color: #292929; /* Couleur sombre pour les sections */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Ombre pour le relief */

  h2 {
    font-size: 20px;
    color: #fbc02d; /* Titre en jaune doré */
    margin-bottom: 15px;
  }

  p, h3, h4 {
    font-size: 16px;
    color: #d3d3d3; /* Texte descriptif gris clair */
    margin-bottom: 15px;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  pre {
    background-color: #1e1e1e; /* Fond sombre pour les blocs de code */
    padding: 10px;
    border-radius: 5px;
    color: #00ff00; /* Vert pour le code */
    font-family: monospace;
    overflow-x: auto;
    margin-bottom: 15px;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #fbc02d;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
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

const Sae302 = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/sae302/rapport_sae302.pdf`; // Chemin vers ton fichier PDF
    link.download = 'SAE302_Rapport.pdf'; // Nom du fichier téléchargé
    link.click();
  };

  const handleGoToGithub = () => {
    window.open('https://github.com/Novah974-8/karaoke', '_blank'); // Lien vers ton projet GitHub
  };

  return (
      <Right>
        <Section>
          <h2>Projet SAE 302 : Développement d'une application de karaoké communicante</h2>
          <ImageWrapper>
            <img src={`${process.env.PUBLIC_URL}/sae302/photo.jpg`} alt="TECHER Noah en CTF" />
          </ImageWrapper>
          <p>
            L'objectif principal de ce projet était de concevoir une application web de karaoké interactive, tout en explorant les aspects techniques de la communication entre systèmes informatiques.
          </p>
          <button onClick={handleDownload}>Télécharger le rapport</button>
        </Section>

        <Section>
          <h3>Descriptif</h3>
          <p>
            Notre application s'inspire des salles de karaoké modernes. Elle permet aux utilisateurs de soumettre leurs chansons via un formulaire, de visionner des vidéos YouTube intégrées et de chanter tout en suivant les paroles affichées de manière dynamique.
          </p>
          <ul>
            <li>Soumission de chansons avec nom d'utilisateur, titre et artiste.</li>
            <li>Lecture intégrée de vidéos YouTube.</li>
            <li>Affichage des paroles synchronisées avec la musique.</li>
            <li>Gestion d'une file d'attente pour un passage ordonné.</li>
            <li>Interface responsive et ergonomique.</li>
          </ul>
          <button onClick={handleGoToGithub}>Voir le projet sur GitHub</button>
        </Section>

        <Section>
          <h3>Fonctionnalités principales </h3>
          <ul>
            <li>Un formulaire permettant aux utilisateurs de soumettre des chansons (nom d'utilisateur, titre et artiste).</li>
            <li>Lecture de vidéos intégrées depuis YouTube.</li>
            <li>Affichage automatique des paroles des chansons.</li>
            <li>Gestion d'une file d'attente pour les chansons.</li>
          </ul>
        </Section>

        <Section>
          <h3>Technologies utilisées</h3>
          <ul>
            <li>Serveur Flask (Python) pour gérer les communications.</li>
            <li>APIs Genius et YouTube pour récupérer les paroles et vidéos associées.</li>
            <li>Base de données SQLite pour stocker les chansons et gérer la file d’attente.</li>
            <li>Intégration web avec HTML et CSS.</li>
          </ul>
        </Section>

        <Section>
          <h3>Points importants</h3>
          <ul>
            <li>Une architecture client-serveur a été mise en place.</li>
            <li>Les APIs Genius et YouTube sont exploitées pour enrichir l’expérience utilisateur.</li>
            <li>L’application supporte plusieurs langues pour les chansons, avec une file d’attente permettant une gestion fluide des requêtes utilisateur.</li>
          </ul>
        </Section>

        <Section>
          <h3>Répartition des tâches</h3>
          <ul>
            <li><strong>TECHER Noah :</strong> Développement du serveur Flask, intégration des APIs, gestion des erreurs.</li>
            <li><strong>HOAREAU Anthony :</strong> Création du formulaire et configuration de la base de données SQL.</li>
            <li><strong>ILATA Miguel :</strong> Conception des pages HTML pour les vidéos et les paroles, et stylisme général.</li>
          </ul>
        </Section>
      </Right>
  );
};

export default Sae302;
