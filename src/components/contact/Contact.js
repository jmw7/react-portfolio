import React from 'react';

import Email from '../../images/Email2.svg';
import LinkedIn from '../../images/linkedin.svg';
import Github from '../../images/github.svg';

import './Contact.css';

export default function Contact() {
  return (
    <div id='contact-section'>
      <h2 className="contact-me">Contact Me</h2>
      <ul className='contact-icons'>
        <li>
          <a className="email" href="mailto:jwong.ncsu@gmail.com">
            <img src={Email} alt='email' className='contact-icon' id='email' />
          </a>
        </li>
        <li>
          <a className="github" href="https://github.com/jmw7" target='_blank' rel="noopener noreferrer">
            <img src={Github} alt='github' className='contact-icon' />
          </a>
        </li>
        <li>
          <a className="linkedin" href="https://www.linkedin.com/in/mendola-wong/" target='_blank'  rel="noopener noreferrer">
            <img src={LinkedIn} alt='linkedIn' className='contact-icon' />
          </a>
        </li>
      </ul>
    </div>
  );
}

