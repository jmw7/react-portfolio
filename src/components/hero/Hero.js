import React from 'react';

import Wool from '../../images/Wool.svg';
import Coffee from '../../images/Coffee.svg';
import Plane from '../../images/Plane.svg';
import BioPhoto from '../../images/bioPhoto.jpg'

import './Hero.css';

export default function Hero() {
  return (
    <div className='hero-section'>
      <div className='hero-description'>
        <h2>Hey. My name is Justin.</h2>
        <div className='quick-description'>
          <p>
            I'm a <strong>full-stack developer</strong> located in the greater Atlanta area.
          <br /><br />When I'm not at the keyboard, you may find me...
          </p>
          <div className='bio-item'>
            <img src={Coffee} alt='coffee' className='bio-icon' />
            <p>drinking coffee </p>
          </div>
          <div className='bio-item'>
            <img src={Wool} alt='wool' className='bio-icon' />
            <p>settling the island of Catan</p>
          </div>
          <div className='bio-item'>
            <img src={Plane} alt='plane' className='bio-icon' />
            <p>on a plane to another country</p>
          </div>
        </div>
      </div>

      <img src={BioPhoto} alt='Justin Mendola-Wong' id='bioPhoto' />
    </div>
  );
}

