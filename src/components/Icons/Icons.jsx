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

export default function Icons({ iconName, percent, toggleIconsBorder, toggleIconsShadow }) {
         
    const icon = 
            iconName === "facebook" ? facebook : 
            iconName === "twitter" ? twitter : 
            iconName === "linkedin" ? linkedin : 
            iconName === "instagram" ? instagram : 
            iconName === "google" ? google : 
            iconName === "pinterest" ? pinterest : 
            iconName === "tumblr" ? tumblr : 
            iconName === "soundcloud" ? soundcloud : null 

    return (
    <>  
        <div className="icon">
            <img 
            src={icon} 
            alt={iconName}
            className="icon__svg"
            style={{
                opacity: `${percent}%`,
                boxShadow: toggleIconsShadow ? `5px 10px #888888` : `none`,
                border: toggleIconsBorder ? `3px solid black` : `none`
            }}
            />
        </div>
    </>
    )
} 