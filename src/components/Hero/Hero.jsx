import React from 'react';
import './Hero.scss';
import UploadImage from '../../components/UploadImage/UploadImage'

export default function Hero({ fetchImgData }) {
    return (
        <section>
            <h1>Hero</h1>
            < UploadImage fetchImgData={fetchImgData} />
        </section>
    )
}