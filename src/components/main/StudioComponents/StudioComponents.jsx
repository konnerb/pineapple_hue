import React, { Component } from 'react';
import './StudioComponents.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import Button from '../../Button/Button'
import StyleBar from '../../StyleBar/StyleBar'
import Icons from '../../Icons/Icons'
import Image from '../../Image/Image'

export default class StudioComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        //this.handleChange = this.handleChange.bind(this);
    }

    //handleChange(event, paletteType) {
    //    const { target: { name, value} } = event;
    //    let newPalette = {};
    //    newPalette[paletteType] = value;
    //    this.setState({
    //         newPalette
    //    }, () => this.props.handlePaletteUpdate(this.state.newPalette) );
    //    
    //}

    //roundHue = (hue) => { return Math.round( (hue) * 360) }

    //roundSl = (sl) => { return Math.round( (sl) * 100) + "%" }

    render() {

        const { Vibrant, LightVibrant, DarkVibrant, Muted, LightMuted, DarkMuted } = this.props.palette;
        const { roundHue, roundSl } = this.props;
        
    return (
    <>
    {Vibrant ?  
        <section className="studio-components">
            <article className="studio-components__buttons-section">
                <div className="studio-components__button-preview">
                    <h3>Buttons One</h3>
                    <StyleBar palette={this.props.palette} />
                    <div className="studio-components__buttons" 
                            style={{backgroundColor: 'hsl('+roundHue(LightVibrant.hsl[0])+','+roundSl(LightVibrant.hsl[1])+','+roundSl(LightVibrant.hsl[2])+')'
                        }}>
                        <Button 
                        palette={Vibrant} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        palette={DarkVibrant} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        palette={Muted} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        palette={DarkMuted} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
                <div className="studio-components__button-preview">
                    <h3>Buttons Two</h3>
                    <StyleBar palette={this.props.palette} />
                    <div className="studio-components__buttons" 
                            style={{backgroundColor: 'hsl('+roundHue(LightMuted.hsl[0])+','+roundSl(LightMuted.hsl[1])+','+roundSl(LightMuted.hsl[2])+')'
                        }}>
                        <Button 
                        palette={Vibrant} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        palette={DarkVibrant} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        palette={Muted} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        palette={DarkMuted} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
            </article>
            <article className="studio-components__buttons-section">
                <div className="studio-components__button-preview">
                    <h3>Icons One</h3>
                    <StyleBar palette={this.props.palette} />
                    <div className="studio-components__buttons" 
                            style={{backgroundColor: 'hsl('+roundHue(LightVibrant.hsl[0])+','+roundSl(LightVibrant.hsl[1])+','+roundSl(LightVibrant.hsl[2])+')'
                        }}>
                        <Icons 
                        palette={Vibrant} 
                        iconName="facebook"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={DarkVibrant} 
                        iconName="twitter"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={Muted} 
                        iconName="linkedin"
                        />
                        <Icons 
                        palette={DarkMuted} 
                        iconName="google"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={DarkMuted} 
                        iconName="pinterest"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={DarkMuted} 
                        iconName="tumblr"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={DarkMuted} 
                        iconName="soundcloud"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
                <div className="studio-components__button-preview">
                    <h3>Icons Two</h3>
                    <StyleBar palette={this.props.palette} />
                    <div className="studio-components__buttons" 
                            style={{backgroundColor: 'hsl('+roundHue(LightMuted.hsl[0])+','+roundSl(LightMuted.hsl[1])+','+roundSl(LightMuted.hsl[2])+')'
                        }}>
                        <Icons 
                        palette={Vibrant} 
                        iconName="facebook"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={DarkVibrant} 
                        iconName="twitter"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={Muted} 
                        iconName="linkedin"
                        />
                        <Icons 
                        palette={DarkMuted} 
                        iconName="google"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={DarkMuted} 
                        iconName="pinterest"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={DarkMuted} 
                        iconName="tumblr"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        palette={DarkMuted} 
                        iconName="soundcloud"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
            </article>
            <article className="studio-components__buttons-section">
                <div className="studio-components__images-preview">
                    <h3>Images</h3>
                    <StyleBar palette={this.props.palette} />
                    <div className="studio-components__images" 
                            style={{backgroundColor: 'hsl('+roundHue(LightVibrant.hsl[0])+','+roundSl(LightVibrant.hsl[1])+','+roundSl(LightVibrant.hsl[2])+')'
                        }}>
                        <Image 
                        palette={Vibrant} 
                        iconName="yogo"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="bar"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="basketball"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="beach"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="book"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="car"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="cat"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="coffeeShop"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="coffeeSwirls"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="darkAlley"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="dog"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="festival"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="toEast"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="ttcWinter"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="winterContrast"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="dryVan"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
            </article>
            <article className="studio-components__buttons-section">
                <div className="studio-components__images-preview">
                    <h3>Images</h3>
                    <StyleBar palette={this.props.palette} />
                    <div className="studio-components__images" 
                            style={{backgroundColor: 'hsl('+roundHue(LightMuted.hsl[0])+','+roundSl(LightMuted.hsl[1])+','+roundSl(LightMuted.hsl[2])+')'
                        }}>
                        <Image 
                        palette={Vibrant} 
                        iconName="yogo"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="bar"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="basketball"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="beach"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="book"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="car"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="cat"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="coffeeShop"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="coffeeSwirls"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="darkAlley"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="dog"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="festival"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="toEast"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="ttcWinter"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="winterContrast"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        palette={Vibrant} 
                        iconName="dryVan"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
            </article>
        </section>
    : <p>loading....</p>}
    </>
    )
    }
} 