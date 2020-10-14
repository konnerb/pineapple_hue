import React, { useState } from 'react';
import { contrast } from '../../../utlis';

import './StudioComponents.scss';
import Button from '../../Button/Button';
import StyleBar from '../../StyleBar/StyleBar';
import Icons from '../../Icons/Icons';
import Image from '../../Image/Image';
import InputPercent from '../../InputPercent/InputPercent';
import store from '../../../store';
import { paletteType, opacityType } from '../../../types';

interface Props {
  handleOpacityChange: (event: React.ChangeEvent<HTMLInputElement>, nameInput: string) => void; 
  opacity: opacityType; 
  palette: paletteType | undefined;
}

const StudioComponents: React.FC<Props> = (

  {
  handleOpacityChange, 
  opacity, 
  palette
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

  const handleToggle = (toggleType: string) => {
    let toggleStatus = toggle[toggleType]
    setToggle({
      ...toggle,
      [toggleType]: !toggleStatus
    }); 
  }

  const { icons, images } = store
  const isAAA: any = contrast( palette && palette.Vibrant.hslVibrantBackground, [0, 1, 1], true )

  return (
    <>
    { palette?.Vibrant && 
      <section className="studio-components">
        <article className="studio-components__buttons-section"
          style={{backgroundColor: 
            `hsl(${palette.Vibrant.hslVibrantBackground})`
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
              opacity={opacity.opacityButton}
              handlePercentChange={handleOpacityChange}
              nameInput="opacityButton"
              defaultInputValue="0.80"
              isAAA={isAAA}
              />
          }
          <div className="studio-components__button-preview">
            <div className="studio-components__buttons buttons-top" 
              style={{backgroundColor: `hsl(${palette.LightVibrant.hsl.toString()})` }}
            >
            {store.components.vibrantButtons.map((content, i) => (
              <Button 
                key={i}
                opacity={opacity.opacityButton}
                toggleOpacity={toggle.ButtonsOpacity}
                toggleButtonsShadow={toggle.ButtonsShadow}
                toggleButtonsBorder={toggle.ButtonsBorder}
                palette={palette[content.palette]} 
                paletteBackground={palette[content.paletteBackground]}
              />
            ))}
            </div>
            <div className="studio-components__buttons buttons-bottom" 
              style={{backgroundColor: `hsl(${palette.LightMuted.hsl.toString()})` }}
            >
            {store.components.mutedButtons.map((content, i) => (
              <Button 
                key={i}
                opacity={opacity.opacityButton}
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
            `hsl(${palette.Vibrant.hslVibrantBackground})`
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
              opacity={opacity.iconOpacity}
              handlePercentChange={handleOpacityChange}
              nameInput="iconOpacity"
              defaultInputValue="0.80"
              isAAA={isAAA}
            />
          }
          <div className="studio-components__icons-preview">
            <div className="studio-components__icons icons-top" 
              style={{backgroundColor: `hsl(${palette.LightVibrant.hsl.toString()})` }}
            >
              {icons.map(({ icon, title }, i) => (
                <Icons 
                  key={i}
                  icon={icon}
                  opacity={opacity.iconOpacity}
                  toggleOpacity={toggle.IconsOpacity}
                  toggleIconsShadow={toggle.IconsShadow}
                  toggleIconsBorder={toggle.IconsBorder}
                  iconName={title}
                  onLoadColor={`hsl(${palette.Vibrant.hslVibrantBackground})`}
                />
              ))}
            </div>

            <div className="studio-components__icons icons-bottom" 
              style={{backgroundColor: `hsl(${palette.LightMuted.hsl.toString()})`}}
            >
              {icons.map(({ icon, title }, i) => (
                <Icons 
                  key={i}
                  icon={icon}
                  iconName={title}      
                  opacity={opacity.iconOpacity}
                  toggleOpacity={toggle.IconsOpacity}
                  toggleIconsShadow={toggle.IconsShadow}
                  toggleIconsBorder={toggle.IconsBorder}
                  onLoadColor={`hsl(${palette.Vibrant.hslVibrantBackground})`}
                />
              ))}
            </div>
          </div>
        </article>

        <article className="studio-components__images-section"
          style={{backgroundColor: 
            `hsl(${palette.Vibrant.hslVibrantBackground})`
          }}
        >
        <div className="studio-components__images-buttons">
            <StyleBar 
              opacityType="ImagesOpacity"
              shadowType="ImagesShadow"
              borderType="ImagesBorder"
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
                opacity={opacity.imageOpacity}
                handlePercentChange={handleOpacityChange}
                nameInput="imageOpacity"
                defaultInputValue="0.80"
                isAAA={isAAA}
              />
            }
        </div>
        <div className="studio-components__images-preview">
          <div className="studio-components__images image_top" 
            style={{backgroundColor: `hsl(${palette.LightVibrant.hsl.toString()})` }}
          >   
            {images.map(({ image, title }, i) => (
              <Image 
                key={i}
                image={image}
                imageName={title}
                opacity={opacity.imageOpacity}
                toggleImagesShadow={toggle.ImagesShadow}
                toggleImagesBorder={toggle.ImagesBorder}
                onLoadColor={`hsl(${palette.Vibrant.hslVibrantBackground})`}
              />
            ))}
          </div>

          <div className="studio-components__images image_bottom" 
            style={{backgroundColor: `hsl(${palette.LightMuted.hsl.toString()})` }}
          >
            {images.map(({ image, title }, i) => (
                <Image 
                  key={i}
                  image={image}
                  imageName={title}
                  opacity={opacity.imageOpacity}
                  toggleImagesShadow={toggle.ImagesShadow}
                  toggleImagesBorder={toggle.ImagesBorder}
                  onLoadColor={`hsl(${palette.Vibrant.hslVibrantBackground})`}
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