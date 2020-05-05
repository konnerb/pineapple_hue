import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
  <div className="footer">
    <div className="footer__svg-container">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" 
          style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}>
        </path>
      </svg>
    </div>
  </div>
  )
}