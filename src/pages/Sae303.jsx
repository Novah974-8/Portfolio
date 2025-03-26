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
    max-width: 500px; /* Largeur maximale réduite */
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Sae303 = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/sae304/rapport_ctf_machine_vulnérable.pdf`;
    link.download = 'SAE303_Report_Techer.pdf'; // Nom du fichier à télécharger
    link.click();
  };

  return (

      <Right>
        <Section>
          <h2>SAE 303 : Infrastructure Réseau Sécurisée</h2>
          <ImageWrapper>
            <img src={`${process.env.PUBLIC_URL}/sae303/topo.png`} alt="Projet SAE 303" />
          </ImageWrapper>
          <p>
            L'objectif principal de ce projet était de concevoir et mettre en œuvre une infrastructure réseau sécurisée interconnectant trois sites distants pour une entreprise fictive, en respectant un cahier des charges détaillé. Ce projet visait à garantir la confidentialité, la disponibilité, et l'intégrité des données, tout en répondant aux besoins spécifiques des services de l’entreprise.
          </p>
          <button onClick={handleDownload}>Télécharger le rapport de la SAE 303</button>
        </Section>

        <Section>
          <h3>Descriptif</h3>
          <p>
            Dans ce projet, nous avons conçu une infrastructure réseau pour une entreprise fictive opérant sur trois sites distants. L’objectif était de répondre à un cahier des charges précis en garantissant la confidentialité, la disponibilité, et la sécurité des données échangées entre les sites.
          </p>
          <p>
            Nous avons commencé par analyser les besoins en réseau et segmenter les trafics via des VLANs dédiés. La sécurité a été renforcée par l’implémentation de listes de contrôle d’accès (ACL), limitant l’accès aux services critiques selon les besoins des utilisateurs. Par exemple, seuls certains VLANs pouvaient accéder aux serveurs sensibles.
          </p>
        </Section>

        <Section>
          <h3>Méthodologie</h3>
          <p>
            L’interconnexion des trois sites a été réalisée grâce à un VPN MPLS simulé avec OSPF pour un routage dynamique. Nous avons également configuré la redondance avec PVST+ et HSRP pour assurer une haute disponibilité des passerelles. Les configurations ont été simulées et validées à l’aide de Packet Tracer et GNS3.
          </p>
        </Section>

        <Section>
          <h3>Validation et Résultats</h3>
          <p>
            Des tests approfondis ont validé la conformité de l’architecture avec les critères DICP (Disponibilité, Intégrité, Confidentialité, Preuve). Ces tests incluaient des pings inter-VLAN, des vérifications d’accès selon les ACL, et des simulations de défaillance pour vérifier la redondance.
          </p>
          <p>
            Une documentation complète a été produite, détaillant l’architecture, les configurations réseau, et les résultats des tests. Ce projet m'a permis de développer des compétences solides en conception et sécurisation de réseaux, tout en illustrant ma capacité à résoudre des problématiques concrètes dans un cadre professionnel.
          </p>
        </Section>
      </Right>

  );
};

export default Sae303;
