import React from 'react';
import './Icons.scss';
import facebook from '../../assets/icons/facebook_icon-color.svg';
import twitter from '../../assets/icons/twitter_icon-color.svg';
import linkedin from '../../assets/icons/linkedin_icon-color.svg';
import instagram from '../../assets/icons/instagram_icon-color.svg';
import google from '../../assets/icons/google-plus_icon-color.svg';
import pinterest from '../../assets/icons/pinterest_icon-color.svg';
import tumblr from '../../assets/icons/tumblr_icon-color.svg';
import soundcloud from '../../assets/icons/soundcloud_icon-color.svg';

export default function Icons({ iconName }) {
     
    //iconName ? console.log('here') : console.log("not here")
    
    const icon = 
            iconName === "facebook" ? facebook : null ||
            iconName === "twitter" ? twitter : null ||
            iconName === "linkedin" ? linkedin : null ||
            iconName === "instagram" ? instagram : null ||
            iconName === "google" ? google : null ||
            iconName === "pinterest" ? pinterest : null ||
            iconName === "tumblr" ? tumblr : null ||
            iconName === "soundcloud" ? soundcloud : null 
        console.log(icon)

    return (
    <>  
        <div className="icon">
            <div className="icon__container">
                <div>
                    <img src={icon} alt="facebook" className="icon__svg" />
                </div>
            </div>
        </div>
    </>
    )
} 