import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';
import './Main.scss';
import Hero from '../../components/Hero/Hero'
import Studio from '../../components/main/Studio/Studio'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: {},
            palette: [] 
        }
    }

    fetchImgData = (img) => {
        if (!img) return;
        Vibrant.from(img)
       .getPalette((err, palette) => {
           if(err) {
           console.log(err);
           } else {
           this.setState({ 
               img, 
               palette 
            })
           }
       })
   }

    render() {
    return (
    <> 
        <section> 
            <Hero fetchImgData={this.fetchImgData} />
        </section>
        <main className="main">
            <Studio palette={this.state.palette} image={this.state.img} />
        </main>
    </>
    )
    }
} 