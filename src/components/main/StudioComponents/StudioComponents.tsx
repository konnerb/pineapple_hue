import React, { useState } from 'react';
import { contrast } from '../../../utlis';

import './StudioComponents.scss';
import Button from '../../Button/Button';
import StyleBar from '../../StyleBar/StyleBar';
import Icons from '../../Icons/Icons';
import Image from '../../Image/Image';
import InputPercent from '../../InputPercent/InputPercent';
import store from '../../../store';
import { paletteType } from '../../../types';

interface Props {
  handlePercentChange: any; 
  percents: any; 
  palette: paletteType | undefined;
}

const StudioComponents: React.FC<Props> = (

  {
  handlePercentChange, 
  percents, 
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
              percents={percents.opacityButton}
              handlePercentChange={handlePercentChange}
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
              style={{backgroundColor: `hsl(${palette.LightMuted.hsl.toString()})` }}
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
              percents={percents.iconOpacity}
              handlePercentChange={handlePercentChange}
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
                  //palette={Vibrant} 
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
              style={{backgroundColor: `hsl(${palette.LightMuted.hsl.toString()})`}}
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
                  //palette={Vibrant} 
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
                //isImage={true}
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
            style={{backgroundColor: `hsl(${palette.LightVibrant.hsl.toString()})` }}
          >   
            {images.map(({ image, title }, i) => (
              <Image 
                key={i}
                image={image}
                imageName={title}
                percent={percents.imageOpacity}
                toggleImagesShadow={toggle.ImagesShadow}
                toggleImagesBorder={toggle.ImagesBorder}
                //palette={Vibrant} 
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
                  percent={percents.imageOpacity}
                  toggleImagesShadow={toggle.ImagesShadow}
                  toggleImagesBorder={toggle.ImagesBorder}
                  //palette={Vibrant} 
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