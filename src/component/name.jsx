import React from 'react';
import styled from 'styled-components';

const Name = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/CV_TECHER-Noah-Alexandre.pdf`; // Chemin vers le fichier PDF
    link.download = 'CV_TECHER-Noah-Alexandre.pdf'; // Nom du fichier à télécharger
    link.click();
  };  

  return (
    <StyledWrapper>
      <button alt="TECHER Noah" onClick={handleDownload}>
        <i>T</i>
        <i>E</i>
        <i>C</i>
        <i>H</i>
        <i>E</i>
        <i>R</i>
        <i>&nbsp;</i>
        <i>N</i>
        <i>o</i>
        <i>a</i>
        <i>h</i>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 50px;
   position: relative;
   padding: 0 20px;
   font-size: 18px;
   text-transform: uppercase;
   border: 0;
   box-shadow: hsl(0deg 0% 20%) 0px 7px 0px 0px; /* Ombre subtile en gris */
   background-color: hsl(0deg 0% 15%); /* Fond noir */
   border-radius: 12px;
   overflow: hidden;
   transition: 31ms cubic-bezier(.5, .7, .4, 1);
   cursor: pointer;
  }

  button:before {
   content: attr(alt);
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   inset: 0;
   font-size: 15px;
   font-weight: bold;
   color: #ffffff; /* Texte blanc */
   letter-spacing: 4px;
   opacity: 1;
  }

  button:active {
   box-shadow: none;
   transform: translateY(7px);
   transition: 35ms cubic-bezier(.5, .7, .4, 1);
  }

  button:hover:before {
   transition: all .0s;
   transform: translateY(100%);
   opacity: 0;
  }

  button i {
   color: #00AA00; /* Couleur vert pour les lettres animées */
   font-size: 15px;
   font-weight: bold;
   letter-spacing: 4px;
   font-style: normal;
   transition: all 2s ease;
   transform: translateY(-20px);
   opacity: 0;
  }

  button:hover i {
   transition: all .2s ease;
   transform: translateY(0px);
   opacity: 1;
  }

  button:hover i:nth-child(1) {
   transition-delay: 0.045s;
  }

  button:hover i:nth-child(2) {
   transition-delay: calc(0.045s * 3);
  }

  button:hover i:nth-child(3) {
   transition-delay: calc(0.045s * 4);
  }

  button:hover i:nth-child(4) {
   transition-delay: calc(0.045s * 5);
  }

  button:hover i:nth-child(6) {
   transition-delay: calc(0.045s * 6);
  }

  button:hover i:nth-child(7) {
   transition-delay: calc(0.045s * 7);
  }

  button:hover i:nth-child(8) {
   transition-delay: calc(0.045s * 8);
  }

  button:hover i:nth-child(9) {
   transition-delay: calc(0.045s * 9);
  }

  button:hover i:nth-child(10) {
   transition-delay: calc(0.045s * 10);
  }
`;



export default Name;
