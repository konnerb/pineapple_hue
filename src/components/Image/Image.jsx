import React from 'react';
import './Image.scss';
import yogo from '../../assets/images/yogo.jpg';
import bar from '../../assets/images/bar.jpg';
import basketball from '../../assets/images/basketball.jpg';
import beach from '../../assets/images/beach_summer.jpg';
import book from '../../assets/images/book_fall.jpg';
import car from '../../assets/images/car.jpg';
import cat from '../../assets/images/cat_fall.jpg';
import coffeeSwirls from '../../assets/images/coffee_swirls.jpg';
import coffeeShop from '../../assets/images/coffee_shop.jpg';
import darkAlley from '../../assets/images/dark_alley.jpg';
import dog from '../../assets/images/dog.jpg';
import dryVan from '../../assets/images/dry_van.jpg';
import festival from '../../assets/images/desktop.jpg';
import toEast from '../../assets/images/to_east.jpg';
import ttcWinter from '../../assets/images/ttc_winter.jpg';
import winterContrast from '../../assets/images/winter_contrast.jpg';

export default function Image({ imageName, percent, toggleImagesBorder, toggleImagesShadow }) {
    
    //Searches for a match between iconName and imported photos

    const images = 
            imageName === "yogo" ? yogo : 
            imageName === "bar" ? bar : 
            imageName === "basketball" ? basketball : 
            imageName === "beach" ? beach : 
            imageName === "book" ? book : 
            imageName === "car" ? car : 
            imageName === "cat" ? cat : 
            imageName === "coffeeShop" ? coffeeShop : 
            imageName === "coffeeSwirls" ? coffeeSwirls : 
            imageName === "darkAlley" ? darkAlley : 
            imageName === "dog" ? dog : 
            imageName === "festival" ? festival : 
            imageName === "toEast" ? toEast : 
            imageName === "ttcWinter" ? ttcWinter : 
            imageName === "winterContrast" ? winterContrast : 
            imageName === "dryVan" ? dryVan : null 

    return (
    <>  
        <div className="image">
            <img 
            src={images} 
            alt={imageName}
            className="image__the-image" 
            style ={{
                opacity: `${percent}`,
                boxShadow: toggleImagesShadow ? `5px 10px #888888` : `none`,
                border: toggleImagesBorder ? `3px solid black` : `none`
            }}
            />
        </div>
    </>
    )
} 