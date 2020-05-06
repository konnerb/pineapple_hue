import React from 'react';
import './About.scss';
import Hero from '../../components/Hero/Hero'

export default function About() {
  return (
    <section className="about">
      <Hero /> 
      <article className="about__text-container">
        <h3 className="about__text">Why?</h3>
        <p className="about__text">
          Have an idea for creating an amazing app? 
          Can you imagine what the colour scheme will be?
          Great!<br />
          Pinapplehue helps you discover colour palettes from your favourite images, 
          then hints style designs for your new app! Simply upload any Image, then scroll down
          to discover. When your finished, click the "discover your pineapplehue" button and boom,
          you have your new color scheme and codes!
        </p>
        <p className="about__text">created by: <a href="https://www.konnerbouchard.com" target="_blank">konnerb</a></p>
      </article>
    </section>
  )
}