import React from 'react';
import './Hero.scss';
import UploadImage from '../../components/UploadImage/UploadImage'

export default function Hero({ fetchImgData }) {
    return (
        <section className="hero">
            <div className="hero__upload-image">
                < UploadImage fetchImgData={fetchImgData} />
            </div>
        </section>
    )
}