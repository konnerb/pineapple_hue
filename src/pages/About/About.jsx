import React from 'react';
import './About.scss';
import Hero from '../../components/Hero/Hero'

export default function About() {
    return (
        
        <section className="about">
            <Hero /> 
            <p className="about__text">Pinapplehue was influenced by </p>
            {/*<p className="about__text">created by: <a href="https://www.konnerbouchard.com" /> </p>*/}
        </section>
    )
}