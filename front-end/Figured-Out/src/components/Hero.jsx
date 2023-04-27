import React from 'react';
import styles from '../style';
import { hero } from '../assets';

// Component for the logo on the landing page
const Hero = () => (
  <section id="home" className={`flex justify-center  ${styles.paddingY}`}>
      <img src={hero} alt="Hero" className="md:w-[70%] h-[100%] justify" />
  </section>
);


export default Hero