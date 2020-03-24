import React from 'react';
import './Hero.scss';
import UploadImage from '../../components/UploadImage/UploadImage'
import pineappleJump from '../../assets/icons/pineapple_jump-01.svg'

export default function Hero({ fetchImgData }) {
    return (
        <section className="hero">
            <div className="hero__upload-image">
                < UploadImage fetchImgData={fetchImgData} />
                <img className="hero__upload-pineapple" src={pineappleJump}></img>
            </div>
            <div className="hero__svg-container">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}></path>
                </svg>
            </div>
            {/*<div class="container">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,40 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}></path>
                </svg>
            </div>*/}
        </section>
    )
}