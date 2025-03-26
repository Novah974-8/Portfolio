import React from 'react';
import styled from 'styled-components';

const RaspberryPiWrapper = styled.div`
  margin-bottom: 30px;
  background-color: #292929; /* Couleur sombre légèrement plus claire */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Ombre pour relief */
  color: #d3d3d3; /* Texte descriptif gris clair */
  line-height: 1.6;

  h2 {
    font-size: 20px;
    color: #fbc02d; /* Couleur dorée pour les titres */
    margin-bottom: 15px;
  }

  p, ul {
    font-size: 16px;
    color: #d3d3d3;
    margin-bottom: 20px;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
  }

  figure {
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  .code {
    background-color: #1e1e1e;
    border-radius: 5px;
    padding: 10px;
    color: #00ff00; /* Couleur verte pour les commandes */
    font-family: monospace;
    margin: 10px 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

const RaspberryPi = () => {
  return (
    <RaspberryPiWrapper>
      <h2>Matérielle</h2>
      <img src={`${process.env.PUBLIC_URL}/sae102/raspberry.jpg`} alt="Matérielle" width="400" />

      <h2>I. Installation de l'OS (Raspberry Pi Imager)</h2>
      <p>
        Pour installer le système d'exploitation d'une Raspberry, nous allons utiliser le logiciel 
        <strong> Raspberry Pi Imager</strong>. Ce logiciel permet l'installation. Cliquez sur{' '}
        <a href="https://www.raspberrypi.com/software/" target="_blank" rel="noopener noreferrer">
          ce lien
        </a>{' '}
        pour accéder à la page officielle et procéder à son installation.
      </p>
      <figure>
        <figcaption>
          Définissez le modèle de la Raspberry, le système d'exploitation souhaité, et sélectionnez la carte SD comme stockage. Cliquez ensuite sur "Suivant".
          <br />
          <strong>Attention :</strong> Choisissez bien le stockage car toutes les données seront écrasées.
        </figcaption>
        <img src={`${process.env.PUBLIC_URL}/sae102/Raspberry_PI_Imager_1.png`} alt="Raspberry Pi Imager étape 1" />
      </figure>

      <figure>
        <figcaption>Le message ci-dessous s'affichera. Cliquez sur "Modifier réglages".</figcaption>
        <img src={`${process.env.PUBLIC_URL}/sae102/Raspberry_PI_Imager_2.png`} alt="Raspberry Pi Imager étape 2" />
      </figure>

      <figure>
        <figcaption>
          Modifiez les réglages avec vos informations (Wi-Fi, localisation, mot de passe, etc.). 
          <br />
          <strong>Important :</strong> Cochez la case "Activer SSH". Ce service permet de se connecter à la Raspberry avec un appareil distant. 
          Une fois terminé, cliquez sur "Enregistrer".
        </figcaption>
        <img src={`${process.env.PUBLIC_URL}/sae102/Raspberry_PI_Imager_3.png`} alt="Raspberry Pi Imager étape 3" />
        <img src={`${process.env.PUBLIC_URL}/sae102/Raspberry_PI_Imager_4.png`} alt="Raspberry Pi Imager étape 4" />
      </figure>
      <p>
        Laissez l'installation se faire. Une fois terminée, insérez la carte SD dans la Raspberry.
      </p>

      <h2>II. Connexion en SSH</h2>
      <p>
        La connexion en SSH permet de se connecter à la Raspberry depuis des appareils distants via des logiciels comme PuTTY, Thonny ou TigerVNC.
      </p>
      <p>
        Pour cela, vous aurez besoin de l'adresse IP de la Raspberry. Voici comment la récupérer :
      </p>
      <div className="code">sudo nmap -sN &lt;IP du réseau&gt;/&lt;CIDR&gt;</div>
      <figure>
        <img src={`${process.env.PUBLIC_URL}/sae102/nmap.png`} alt="Commande Nmap" />
        <figcaption>Exemple de commande Nmap pour détecter l'adresse IP.</figcaption>
      </figure>
      <p>
        <strong>Note :</strong> Il est illégal de faire un Nmap dans un réseau qui ne vous appartient pas.
      </p>
      <figure>
        <figcaption>
          Remplissez le champ "Host Name" avec l'adresse IP, sélectionnez le type de connexion SSH, puis cliquez sur "Open".
          Nous utilisons PuTTY dans cet exemple.
        </figcaption>
        <img src={`${process.env.PUBLIC_URL}/sae102/Putty.png`} alt="Connexion SSH avec PuTTY" />
        <figcaption>Entrez votre nom d'utilisateur et mot de passe.</figcaption>
      </figure>
    </RaspberryPiWrapper>
  );
};

export default RaspberryPi;
