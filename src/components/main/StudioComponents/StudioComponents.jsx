import React, { useState } from 'react';
import './StudioComponents.scss';
import Button from '../../Button/Button';
import StyleBar from '../../StyleBar/StyleBar';
import Icons from '../../Icons/Icons';
import Image from '../../Image/Image';
import InputPercent from '../../InputPercent/InputPercent';
import store from '../../../store';
import { contrast, roundHue, roundSl } from '../../../utlis';

const StudioComponents = ({
  handlePercentChange, 
  percents, 
  palette,
  palette: {
    Vibrant, 
    LightVibrant, 
    LightMuted 
  }
}) => {
  const [toggle, setToggle] = useState({
    ButtonsOpacity: false,
    IconsOpacity: false,
    ImagesOpacity: false,

    ButtonsShadow: false,
    IconsShadow: false,
    ImagesShadow: false,

    ButtonsBorder: false,
    IconsBorder: false,
    ImagesBorder: false
  })
  //Handles toggle for StyleBar/Style Button Components

  const handleToggle = (toggleType) => {
    let toggleStatus = toggle[toggleType]
    setToggle({ [toggleType]: !toggleStatus }); 
  }

  const isAAA = contrast( Vibrant && Vibrant.hsl, [0, 1, 1], true )
  const { icons, images } = store
      
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
          opacityType="ButtonsOpacity"
          shadowType="ButtonsShadow"
          borderType="ButtonsBorder"
          toggleShadow={toggle.ButtonsShadow}
          toggleBorder={toggle.ButtonsBorder}
          toggleOpacity={toggle.ButtonsOpacity}
          palette={palette} 
          handleToggle={handleToggle}
          isAAA={isAAA}
        />
        {toggle.ButtonsOpacity && 
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
          {store.components.vibrantButtons.map((content, i) => (
            <Button 
              key={i}
              percent={percents.opacityButton}
              toggleOpacity={toggle.ButtonsOpacity}
              toggleButtonsShadow={toggle.ButtonsShadow}
              toggleButtonsBorder={toggle.ButtonsBorder}
              palette={palette[content.palette]} 
              paletteBackground={palette[content.paletteBackground]}
            />
          ))}
          </div>
          <div className="studio-components__buttons buttons-bottom" 
            style={{backgroundColor: `hsl(${LightMuted.hsl.toString()})` }}
          >
          {store.components.mutedButtons.map((content, i) => (
            <Button 
              key={i}
              percent={percents.opacityButton}
              toggleOpacity={toggle.ButtonsOpacity}
              toggleButtonsShadow={toggle.ButtonsShadow}
              toggleButtonsBorder={toggle.ButtonsBorder}
              palette={palette[content.palette]} 
              paletteBackground={palette[content.paletteBackground]}
            />
          ))}
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
          opacityType="IconsOpacity"
          shadowType="IconsShadow"
          borderType="IconsBorder"
          toggleShadow={toggle.IconsShadow}
          toggleBorder={toggle.IconsBorder}
          toggleOpacity={toggle.IconsOpacity}
          palette={palette}
          handleToggle={handleToggle}
          isAAA={isAAA}
        />
        {toggle.IconsOpacity && 
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
                toggleOpacity={toggle.IconsOpacity}
                toggleIconsShadow={toggle.IconsShadow}
                toggleIconsBorder={toggle.IconsBorder}
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
                toggleOpacity={toggle.IconsOpacity}
                toggleIconsShadow={toggle.IconsShadow}
                toggleIconsBorder={toggle.IconsBorder}
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
            opacityType="ImagesOpacity"
            shadowType="magesShadow"
            borderType="magesBorder"
            isImage={true}
            toggleShadow={toggle.ImagesShadow}
            toggleBorder={toggle.ImagesBorder}
            toggleOpacity={toggle.ImagesOpacity}
            palette={palette} 
            handleToggle={handleToggle}
            isAAA={isAAA}
          />
          {toggle.ImagesOpacity && 
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
              toggleImagesShadow={toggle.ImagesShadow}
              toggleImagesBorder={toggle.ImagesBorder}
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
                toggleImagesShadow={toggle.ImagesShadow}
                toggleImagesBorder={toggle.ImagesBorder}
                palette={Vibrant} 
              />
          ))}
        </div>
      </div>
      </article>
    </section>
  }
  </>
  )
};

export default StudioComponents;