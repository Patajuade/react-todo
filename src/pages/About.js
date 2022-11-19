import React from 'react';
import logo from '../assets/logoHELHa.jpg';
import styles from './About.module.css';

const About = () => (
  <div className={styles.mainDiv}>
    <h1>Projet React de la HELHa</h1>
    <img src={logo} alt="Logo de la HELHa" />
    <div>Par Pluquet Frédéric</div>
  </div>
);
export default About;
