import React, { Component } from 'react';
import './StudioComponents.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import Button from '../../Button/Button'
import StyleBar from '../../StyleBar/StyleBar'
import Icons from '../../Icons/Icons'
import Image from '../../Image/Image'
import InputPercent from '../../InputPercent/InputPercent'

export default class StudioComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
                toggleButtonsOpacity: false,
                toggleIconsOpacity: false,
                toggleImagesOpacity: false,
                
                toggleButtonsShadow: false,
                toggleIconsShadow: false,
                toggleImagesShadow: false,
                
                toggleButtonsBorder: false,
                toggleIconsBorder: false,
                toggleImagesBorder: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(toggleType) {
        let toggleStatus = this.state[toggleType]
        this.setState({
                 [toggleType]: !toggleStatus
        });
        
    }

    //roundHue = (hue) => { return Math.round( (hue) * 360) }

    //roundSl = (sl) => { return Math.round( (sl) * 100) + "%" }

    render() {

        const { Vibrant, LightVibrant, DarkVibrant, Muted, LightMuted, DarkMuted } = this.props.palette;
        const { roundHue, roundSl, handlePercentChange, percents } = this.props;
        
    return (
    <>
    {Vibrant ?  
        <section className="studio-components">
            <article className="studio-components__buttons-section"
                style={{backgroundColor: 'hsl('+roundHue(Vibrant.hsl[0])+','+roundSl(Vibrant.hsl[1])+','+roundSl(Vibrant.hsl[2] * 1.25)+')'
                }}
            >
                    <StyleBar 
                        opacityType="toggleButtonsOpacity"
                        shadowType="toggleButtonsShadow"
                        borderType="toggleButtonsBorder"
                        toggleShadow={this.state.toggleButtonsShadow}
                        toggleBorder={this.state.toggleButtonsBorder}
                        toggleOpacity={this.state.toggleButtonsOpacity}
                        palette={this.props.palette} 
                        handleToggle={this.handleToggle}
                        roundHue={roundHue}
                        roundSl={roundSl}
                    />
                    {this.state.toggleButtonsOpacity && 
                        <InputPercent 
                        handlePercentChange={handlePercentChange}
                        nameInput="opacityButton"
                        defaultInputValue="80"
                        />
                    }
                <div className="studio-components__button-preview">
                    <div className="studio-components__buttons buttons-top" 
                            style={{backgroundColor: 'hsl('+roundHue(LightVibrant.hsl[0])+','+roundSl(LightVibrant.hsl[1])+','+roundSl(LightVibrant.hsl[2])+')'
                        }}>
                        <Button 
                        percent={percents.opacityButton}
                        toggleButtonsShadow={this.state.toggleButtonsShadow}
                        toggleButtonsBorder={this.state.toggleButtonsBorder}
                        palette={Vibrant} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        percent={percents.opacityButton}
                        toggleButtonsShadow={this.state.toggleButtonsShadow}
                        toggleButtonsBorder={this.state.toggleButtonsBorder}
                        palette={DarkVibrant} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        percent={percents.opacityButton}
                        toggleButtonsShadow={this.state.toggleButtonsShadow}
                        toggleButtonsBorder={this.state.toggleButtonsBorder}
                        palette={Muted} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        percent={percents.opacityButton}
                        toggleButtonsShadow={this.state.toggleButtonsShadow}
                        toggleButtonsBorder={this.state.toggleButtonsBorder}
                        palette={DarkMuted} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                    <div className="studio-components__buttons buttons-bottom" 
                            style={{backgroundColor: 'hsl('+roundHue(LightMuted.hsl[0])+','+roundSl(LightMuted.hsl[1])+','+roundSl(LightMuted.hsl[2])+')'
                        }}>
                        <Button 
                        percent={percents.opacityButton}
                        toggleButtonsShadow={this.state.toggleButtonsShadow}
                        toggleButtonsBorder={this.state.toggleButtonsBorder}
                        palette={Vibrant} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        percent={percents.opacityButton}
                        toggleButtonsShadow={this.state.toggleButtonsShadow}
                        toggleButtonsBorder={this.state.toggleButtonsBorder}
                        palette={DarkVibrant} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        percent={percents.opacityButton}
                        toggleButtonsShadow={this.state.toggleButtonsShadow}
                        toggleButtonsBorder={this.state.toggleButtonsBorder}
                        palette={Muted} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Button 
                        percent={percents.opacityButton}
                        toggleButtonsShadow={this.state.toggleButtonsShadow}
                        toggleButtonsBorder={this.state.toggleButtonsBorder}
                        palette={DarkMuted} 
                        buttonText="Click Me!" 
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
            </article>
            <article className="studio-components__icons-section"
                        style={{backgroundColor: 'hsl('+roundHue(Vibrant.hsl[0])+','+roundSl(Vibrant.hsl[1])+','+roundSl(Vibrant.hsl[2] * 1.25)+')'
                    }}
            >
                    <StyleBar 
                        opacityType="toggleIconsOpacity"
                        shadowType="toggleIconsShadow"
                        borderType="toggleIconsBorder"
                        toggleShadow={this.state.toggleIconsShadow}
                        toggleBorder={this.state.toggleIconsBorder}
                        toggleOpacity={this.state.toggleIconsOpacity}
                        palette={this.props.palette}
                        handleToggle={this.handleToggle}
                        roundHue={roundHue}
                        roundSl={roundSl}
                    />
                    {this.state.toggleIconsOpacity && 
                        <InputPercent 
                        handlePercentChange={handlePercentChange}
                        nameInput="iconOpacity"
                        defaultInputValue="80"
                        />
                    }
                <div className="studio-components__icons-preview">
                    <div className="studio-components__icons icons-top" 
                            style={{backgroundColor: 'hsl('+roundHue(LightVibrant.hsl[0])+','+roundSl(LightVibrant.hsl[1])+','+roundSl(LightVibrant.hsl[2])+')'
                        }}>
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={Vibrant} 
                        iconName="facebook"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkVibrant} 
                        iconName="twitter"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={Muted} 
                        iconName="linkedin"
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkMuted} 
                        iconName="google"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkMuted} 
                        iconName="pinterest"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkMuted} 
                        iconName="tumblr"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkMuted} 
                        iconName="soundcloud"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                    <div className="studio-components__icons icons-bottom" 
                            style={{backgroundColor: 'hsl('+roundHue(LightMuted.hsl[0])+','+roundSl(LightMuted.hsl[1])+','+roundSl(LightMuted.hsl[2])+')'
                        }}>
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={Vibrant} 
                        iconName="facebook"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkVibrant} 
                        iconName="twitter"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={Muted} 
                        iconName="linkedin"
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkMuted} 
                        iconName="google"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkMuted} 
                        iconName="pinterest"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkMuted} 
                        iconName="tumblr"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Icons 
                        percent={percents.iconOpacity}
                        toggleIconsShadow={this.state.toggleIconsShadow}
                        toggleIconsBorder={this.state.toggleIconsBorder}
                        palette={DarkMuted} 
                        iconName="soundcloud"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
            </article>
            <article className="studio-components__images-section"
                        style={{backgroundColor: 'hsl('+roundHue(Vibrant.hsl[0])+','+roundSl(Vibrant.hsl[1])+','+roundSl(Vibrant.hsl[2] * 1.25)+')'
                    }}
            >
                <div className="studio-components__images-buttons">
                    <StyleBar 
                        opacityType="toggleImagesOpacity"
                        shadowType="toggleImagesShadow"
                        borderType="toggleImagesBorder"
                        toggleShadow={this.state.toggleImagesShadow}
                        toggleBorder={this.state.toggleImagesBorder}
                        toggleOpacity={this.state.toggleImagesOpacity}
                        palette={this.props.palette} 
                        handleToggle={this.handleToggle}
                        roundHue={roundHue}
                        roundSl={roundSl}
                    />
                    {this.state.toggleImagesOpacity && 
                        <InputPercent 
                        handlePercentChange={handlePercentChange}
                        nameInput="vibrantImageOpacity"
                        defaultInputValue="80"
                        />
                    }
                </div>
                <div className="studio-components__images-preview">
                    <div className="studio-components__images" 
                            style={{backgroundColor: 'hsl('+roundHue(LightVibrant.hsl[0])+','+roundSl(LightVibrant.hsl[1])+','+roundSl(LightVibrant.hsl[2])+')'
                        }}>
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="yogo"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="bar"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="basketball"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="beach"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="book"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="car"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="cat"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="coffeeShop"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="coffeeSwirls"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="darkAlley"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="dog"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="festival"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="toEast"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="ttcWinter"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="winterContrast"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.vibrantImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="dryVan"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                    <div className="studio-components__images image_bottom-margin" 
                            style={{backgroundColor: 'hsl('+roundHue(LightMuted.hsl[0])+','+roundSl(LightMuted.hsl[1])+','+roundSl(LightMuted.hsl[2])+')'
                        }}>
                        <Image 
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="yogo"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="bar"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="basketball"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="beach"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image 
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder}
                        palette={Vibrant} 
                        iconName="book"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="car"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="cat"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="coffeeShop"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="coffeeSwirls"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="darkAlley"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="dog"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="festival"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="toEast"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="ttcWinter"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="winterContrast"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                        <Image
                        percent={percents.mutedImageOpacity}
                        toggleImagesShadow={this.state.toggleImagesShadow}
                        toggleImagesBorder={this.state.toggleImagesBorder} 
                        palette={Vibrant} 
                        iconName="dryVan"
                        roundHue={roundHue}
                        roundSl={roundSl}
                        />
                    </div>
                </div>
            </article>
        </section>
    : null
    }
    </>
    )
    }
} 