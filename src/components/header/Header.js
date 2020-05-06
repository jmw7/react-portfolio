import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

export default function Header() {
  return (
    <header role="banner">
      <div className="header">
        <h1 className="header-name"><Link smooth to='/#home' className='home'>Justin Mendola-Wong</Link></h1>

        <div className="menu">
          <ul className='links'>
            <li><Link smooth to='#project-section' className="jumper">Projects</Link></li>
            <li><Link smooth to='/#bio-section' className="jumper">Bio</Link></li>
            <li><Link smooth to='#contact-section' className="jumper">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

