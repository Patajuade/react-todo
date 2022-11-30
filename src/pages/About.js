import React from 'react';
import '../App.css';
import image from './helha.png';

const About = () => (
  <div className="aboutContainer">
    <div className="aboutName">Manon </div>
    <div className="aboutName">Canavaggio-Diana </div>
    <img className="aboutImage" src={image} alt="helha Img" width="400" height="200" />
    <div className="aboutYear">Année académique 2022-2023</div>
  </div>
);
export default About;
