import React from 'react';
import './About.scss';
import Hero from '../../components/Hero/Hero';

const About = () => (

  <section className="about">
    <Hero /> 
    <article className="about__text-container">
      <h3 className="about__text">Hmmmm... What is pineapplehue?</h3>
      <p className="about__text">
        Pinapplehue helps you discover colour palettes from your favourite images, 
        then hints element designs for your new app! Simply upload any image, then scroll down
        to discover. When your finished, double-check your contrast ratios, then click the big yellow button and boom,
        you have your new color scheme and codes!
      </p>
      <p className="about__text">created by: <a href="https://www.konnerbouchard.com" rel="noopener noreferrer" target="_blank">konnerb</a></p>
    </article>
  </section>
  
);

export default About;