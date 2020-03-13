import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';
import './Main.scss';
import Hero from '../../components/Hero/Hero'
import UploadImage from '../../components/UploadImage/UploadImage'
import pineapple from '../../assets/images/pineapple.jpg';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        //Vibrant.from(pineapple)
        //.getPalette((err, palette) => 
        //console.log(palette))
    return (
        <section>
            <Hero />
            <UploadImage />

        </section>
    )
    }
} 