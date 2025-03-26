import React from 'react';
import styled from 'styled-components';

const StyledCV = styled.div`
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

  video, embed {
    display: block;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 800px;
  }

  video {
    margin-bottom: 30px;
  }
`;

const CV = () => {
  return (
    <StyledCV>
      <h2>CV vidéo</h2>
      <video controls>
        <source src={`${process.env.PUBLIC_URL}/cv-video.mp4`} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>

      <h2>CV traditionnel</h2>
      <embed src={`${process.env.PUBLIC_URL}/CV_TECHER-Noah-Alexandre.pdf`} type="application/pdf" height="1150px" />
    </StyledCV>
  );
};

export default CV;
