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

export default function Image({ iconName }) {
    
    const images = 
            iconName === "yogo" ? yogo : null ||
            iconName === "bar" ? bar : null ||
            iconName === "basketball" ? basketball : null ||
            iconName === "beach" ? beach : null ||
            iconName === "book" ? book : null ||
            iconName === "car" ? car : null ||
            iconName === "cat" ? cat : null ||
            iconName === "coffeeShop" ? coffeeShop : null ||
            iconName === "coffeeSwirls" ? coffeeSwirls : null ||
            iconName === "darkAlley" ? darkAlley : null ||
            iconName === "dog" ? dog : null ||
            iconName === "festival" ? festival : null ||
            iconName === "toEast" ? toEast : null ||
            iconName === "ttcWinter" ? ttcWinter : null ||
            iconName === "winterContrast" ? winterContrast : null ||
            iconName === "dryVan" ? dryVan : null 

    return (
    <>  
        <div className="image">
            <div className="image__container">
                <div>
                    <img src={images} alt="facebook" className="image__the-image" />
                </div>
            </div>
        </div>
    </>
    )
} 