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
                    Have an idea to create an amazing website? 
                    And you already can imagine what the colour scheme will be?
                    There's a good chance you already have a picture of you want 
                    or it can be found on the web! 
                </p>
                <p className="about__text">created by: <a href="https://www.konnerbouchard.com" target="_blank">konnerb</a> </p>
            </article>
        </section>
    )
}