import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LinkedIn from '../../images/linkedin.svg';
import Github from '../../images/github.svg';

import './Contact.css';

export default function Contact() {
  return (
    <div className='contact-section'>
      <h2 className="contact-me">Contact Me</h2>
      <ul className='contact-icons'>
        <li>
          <a className="email" href="mailto:jwong.ncsu@gmail.com">
            <FontAwesomeIcon icon='paper-plane' className='contact-icon fa-2x' />
          </a>
        </li>
        <li>
          <a className="github" href="https://github.com/jmw7">
            <img src={Github} alt='github' className='contact-icon' id='email' />
          </a>
        </li>
        <li>
          <a className="linkedin" href="https://www.linkedin.com/in/mendola-wong/">
            <img src={LinkedIn} alt='linkedIn' className='contact-icon' />
          </a>
        </li>
      </ul>
    </div>
  );
}

