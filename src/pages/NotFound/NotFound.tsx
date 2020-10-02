import React from 'react';

import './NotFound.scss';
import Hero from '../../components/Hero/Hero';

const About: React.FC = () => (

  <section className="notFound">
    <Hero /> 
    <article className="notFound__text-container">
      <h3 className="notFound__text">Page Not Found</h3>
    </article>
  </section>
  
);

export default About;