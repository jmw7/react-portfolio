import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

export default function Header() {
  return (
    <header role="banner">
      <div className="header">
        <h1 className="header-name">Justin Mendola-Wong</h1>

        <div className="menu">
          <ul className='links'>
            <li><Link smooth to='/#bio-section' className="jumper">Bio</Link></li>
            <li><Link smooth to='#project-section' className="jumper">Projects</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

