import React, { Component } from 'react';
import './StudioComponents.scss';
import Button from '../../Button/Button';
import StyleBar from '../../StyleBar/StyleBar';
import Icons from '../../Icons/Icons';
import Image from '../../Image/Image';
import InputPercent from '../../InputPercent/InputPercent';
import store from '../../../store';
import { contrast, roundHue, roundSl } from '../../../utlis';

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

  //Handles toggle for StyleBar/Style Button Components

  handleToggle(toggleType) {
    let toggleStatus = this.state[toggleType]
    this.setState({
      [toggleType]: !toggleStatus
    }); 
  }

  render() {

    const { images, icons } = store;
    const { Vibrant, LightVibrant, DarkVibrant, Muted, LightMuted, DarkMuted } = this.props.palette;
    const { handlePercentChange, percents } = this.props;

    const isAAA = contrast( Vibrant && Vibrant.hsl, [0, 1, 1], true )
      
  return (
  <>
  { Vibrant && 
    <section className="studio-components">
      <article className="studio-components__buttons-section"
        style={{backgroundColor: 
          'hsl('
            +roundHue(Vibrant.hsl[0])+','
            +roundSl(Vibrant.hsl[1])+','
            +roundSl(Vibrant.hsl[2] * 1.25)+')'
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
          isAAA={isAAA}
        />
        {this.state.toggleButtonsOpacity && 
          <InputPercent 
            percents={percents.opacityButton}
            handlePercentChange={handlePercentChange}
            nameInput="opacityButton"
            defaultInputValue="0.80"
            isAAA={isAAA}
            />
        }
        <div className="studio-components__button-preview">
          <div className="studio-components__buttons buttons-top" 
            style={{backgroundColor: `hsl(${LightVibrant.hsl.toString()})` }}
          >
              <Button 
                percent={percents.opacityButton}
                toggleOpacity={this.state.toggleButtonsOpacity}
                toggleButtonsShadow={this.state.toggleButtonsShadow}
                toggleButtonsBorder={this.state.toggleButtonsBorder}
                palette={Vibrant} 
                paletteBackground={LightVibrant}
              />
              <Button 
                percent={percents.opacityButton}
                toggleOpacity={this.state.toggleButtonsOpacity}
                toggleButtonsShadow={this.state.toggleButtonsShadow}
                toggleButtonsBorder={this.state.toggleButtonsBorder}
                palette={DarkVibrant} 
                paletteBackground={LightVibrant}
              />
              <Button 
                percent={percents.opacityButton}
                toggleOpacity={this.state.toggleButtonsOpacity}
                toggleButtonsShadow={this.state.toggleButtonsShadow}
                toggleButtonsBorder={this.state.toggleButtonsBorder}
                palette={Muted} 
                paletteBackground={LightVibrant}
              />
              <Button 
                percent={percents.opacityButton}
                toggleOpacity={this.state.toggleButtonsOpacity}
                toggleButtonsShadow={this.state.toggleButtonsShadow}
                toggleButtonsBorder={this.state.toggleButtonsBorder}
                palette={DarkMuted} 
                paletteBackground={LightVibrant}
              />
          </div>
          <div className="studio-components__buttons buttons-bottom" 
            style={{backgroundColor: `hsl(${LightMuted.hsl.toString()})` }}
          >
            <Button 
              percent={percents.opacityButton}
              toggleOpacity={this.state.toggleButtonsOpacity}
              toggleButtonsShadow={this.state.toggleButtonsShadow}
              toggleButtonsBorder={this.state.toggleButtonsBorder}
              palette={Vibrant} 
              paletteBackground={LightMuted}
            />
            <Button 
              percent={percents.opacityButton}
              toggleOpacity={this.state.toggleButtonsOpacity}
              toggleButtonsShadow={this.state.toggleButtonsShadow}
              toggleButtonsBorder={this.state.toggleButtonsBorder}
              palette={DarkVibrant} 
              paletteBackground={LightMuted}
            />
            <Button 
              percent={percents.opacityButton}
              toggleOpacity={this.state.toggleButtonsOpacity}
              toggleButtonsShadow={this.state.toggleButtonsShadow}
              toggleButtonsBorder={this.state.toggleButtonsBorder}
              palette={Muted} 
              paletteBackground={LightMuted}
            />
            <Button 
              percent={percents.opacityButton}
              toggleOpacity={this.state.toggleButtonsOpacity}
              toggleButtonsShadow={this.state.toggleButtonsShadow}
              toggleButtonsBorder={this.state.toggleButtonsBorder}
              palette={DarkMuted} 
              paletteBackground={LightMuted}
            />
          </div>
        </div>
      </article>
      
      <article className="studio-components__icons-section"
        style={{backgroundColor: 
          'hsl('
            +roundHue(Vibrant.hsl[0])+','
            +roundSl(Vibrant.hsl[1])+','
            +roundSl(Vibrant.hsl[2] * 1.25)+')'
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
          isAAA={isAAA}
        />
        {this.state.toggleIconsOpacity && 
          <InputPercent 
            percents={percents.iconOpacity}
            handlePercentChange={handlePercentChange}
            nameInput="iconOpacity"
            defaultInputValue="0.80"
            isAAA={isAAA}
          />
        }
        <div className="studio-components__icons-preview">
          <div className="studio-components__icons icons-top" 
            style={{backgroundColor: `hsl(${LightVibrant.hsl.toString()})` }}
          >
            {icons.map(({ icon, title }, i) => (
              <Icons 
                key={i}
                palette={Vibrant} 
                icon={icon}
                percent={percents.iconOpacity}
                toggleOpacity={this.state.toggleIconsOpacity}
                toggleIconsShadow={this.state.toggleIconsShadow}
                toggleIconsBorder={this.state.toggleIconsBorder}
                iconName={title}
              />
            ))}
          </div>

          <div className="studio-components__icons icons-bottom" 
            style={{backgroundColor: `hsl(${LightMuted.hsl.toString()})`}}
          >
            {icons.map(({ icon, title }, i) => (
              <Icons 
                key={i}
                icon={icon}
                iconName={title}      
                percent={percents.iconOpacity}
                toggleOpacity={this.state.toggleIconsOpacity}
                toggleIconsShadow={this.state.toggleIconsShadow}
                toggleIconsBorder={this.state.toggleIconsBorder}
                palette={Vibrant} 
              />
            ))}
          </div>
        </div>
      </article>

      <article className="studio-components__images-section"
        style={{backgroundColor: 
        'hsl('
          +roundHue(Vibrant.hsl[0])+','
          +roundSl(Vibrant.hsl[1])+','
          +roundSl(Vibrant.hsl[2] * 1.25)+')'
        }}
      >
      <div className="studio-components__images-buttons">
          <StyleBar 
            opacityType="toggleImagesOpacity"
            shadowType="toggleImagesShadow"
            borderType="toggleImagesBorder"
            isImage={true}
            toggleShadow={this.state.toggleImagesShadow}
            toggleBorder={this.state.toggleImagesBorder}
            toggleOpacity={this.state.toggleImagesOpacity}
            palette={this.props.palette} 
            handleToggle={this.handleToggle}
            isAAA={isAAA}
          />
          {this.state.toggleImagesOpacity && 
            <InputPercent 
              isImage={true}
              percents={percents.imageOpacity}
              handlePercentChange={handlePercentChange}
              nameInput="imageOpacity"
              defaultInputValue="0.80"
              isAAA={isAAA}
            />
          }
      </div>
      <div className="studio-components__images-preview">
        <div className="studio-components__images image_top" 
          style={{backgroundColor: `hsl(${LightVibrant.hsl.toString()})` }}
        >   
          {images.map(({ image, title }, i) => (
            <Image 
              key={i}
              image={image}
              imageName={title}
              percent={percents.imageOpacity}
              toggleImagesShadow={this.state.toggleImagesShadow}
              toggleImagesBorder={this.state.toggleImagesBorder}
              palette={Vibrant} 
            />
          ))}
        </div>

        <div className="studio-components__images image_bottom" 
          style={{backgroundColor: `hsl(${LightMuted.hsl.toString()})` }}
        >
          {images.map(({ image, title }, i) => (
              <Image 
                key={i}
                image={image}
                imageName={title}
                percent={percents.imageOpacity}
                toggleImagesShadow={this.state.toggleImagesShadow}
                toggleImagesBorder={this.state.toggleImagesBorder}
                palette={Vibrant} 
              />
          ))}
        </div>
      </div>
      </article>
    </section>
  }
  </>
  )}
};