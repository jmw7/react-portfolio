import React from 'react';

import Budgeteer from '../../images/Budgeteer.png';
import Recipe from '../../images/recipe.jpg';
import Findr from '../../images/Event-Findr.png';

import HTML from '../../images/html.svg';
import CSS from '../../images/css.svg';
import jQuery from '../../images/jquery.svg'
import ReactLogo from '../../images/react.svg';
import Node from '../../images/node.svg';
import Postgresql from '../../images/postgresql.svg';


import './Projects.css';


export default function Projects() {
  return (
    <div id="project-section">
      <h2>Projects</h2>
      <div className="project">
        <div className='img-container'>
          <a className="link" href="https://budgeteer-app.now.sh/" target='_blank' rel="noopener noreferrer">
            <img src={Budgeteer} alt="Budgeteer" className="budgeteer-img image" />
          </a>
        </div>
        <h3>Budgeteer</h3>
        <h4>
          <img src={HTML} alt='html' className='icon' />
          <img src={CSS} alt='css' className='icon' />
          <img src={ReactLogo} alt='reactjs' className='icon' />
          <img src={Node} alt='nodejs' className='icon' id='nodejs' />
          <img src={Postgresql} alt='postgresql' className='icon' />
        </h4>
        <p>Budgeteer is an expense tracker that helps users manage their purchases.
        Budgeting is a necessary tool for anyone who wants to take control of their finances.
        I built Budgeteer as a tool to help make managing transactions easier.
        </p>
        <ul className="links">
          <li><a className="link" href="https://github.com/jmw7/budgeteer-client" target='_blank' rel="noopener noreferrer">Client Code</a></li>
          <li><a className="link" href="https://github.com/jmw7/budgeteer-api" target='_blank' rel="noopener noreferrer">Server Code</a></li>
          <li><a className="link" href="https://budgeteer-app.now.sh/" target='_blank' rel="noopener noreferrer">View Project</a></li>
        </ul>
      </div>

      <div className="project">
        <div className='img-container'>
          <a className="link" href="https://recipes-app-zeta.now.sh/" target='_blank' rel="noopener noreferrer">
            <img src={Recipe} alt="Recipe Catalog" className="recipe-img image" />
          </a>
        </div>
        <h3>Recipe Catalog</h3>
        <h4>
          <img src={HTML} alt='html' className='icon' />
          <img src={CSS} alt='css' className='icon' />
          <img src={ReactLogo} alt='reactjs' className='icon' />
          <img src={Node} alt='nodejs' className='icon' id='nodejs' />
          <img src={Postgresql} alt='postgresql' className='icon' />
        </h4>
        <p>Recipe Catalog is a digital recipe storage container for modern times; gone are the days of physical recipe books. All recipes can be bookmarked and linked directly to the website.
        The idea evolved out of bookmarking recipes I'd find on the web and needed a consolidated place to keep them. This is for anyone who searches for a new recipe to cook the day of.
        </p>
        <ul className="links">
          <li><a className="link" href="https://github.com/jmw7/recipe-client" target='_blank' rel="noopener noreferrer">Client Code</a></li>
          <li><a className="link" href="https://github.com/jmw7/recipe-api" target='_blank' rel="noopener noreferrer">Server Code</a></li>
          <li><a className="link" href="https://recipes-app-zeta.now.sh/" target='_blank' rel="noopener noreferrer">View Project</a></li>
        </ul>
      </div>

      <div className="project">
        <div className='img-container'>
          <a className='link' href='https://jmw7.github.io/Event-Findr/' target='_blank' rel="noopener noreferrer">
            <img src={Findr} alt="Findr" className="event_findr_img image" />
          </a>
        </div>
        <h3>Event Findr</h3>
        <h4>
          <img src={HTML} alt='html' className='icon' />
          <img src={CSS} alt='css' className='icon' />
          <img src={jQuery} alt='jQuery' className='icon' />
        </h4>
        <p>How many times have you had a free Friday night and no novel ideas were coming to mind? This app is for you. Event Findr gives the user the ability to search for events located by city or zip code and the weather for the current day of the search.
          <br />Never again be plagued by sitting at home with no plans over the weekend!
          <br /><br />Event Findr is a project that hones in on third party API integration. It connects with the TicketMaster and
          APIXU Weather APIs.
          </p>
        <ul className='links'>
          <li><a className='link' href='https://github.com/jmw7/Event-Findr' target='_blank' rel="noopener noreferrer">Github</a></li>
          <li><a className='link' href='https://jmw7.github.io/Event-Findr/' target='_blank' rel="noopener noreferrer">View Project</a></li>
        </ul>
      </div>
    </div>

  );

}

