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
    <div id="project-section" >
      <h2>Projects</h2>
      <div className="project">
        <div className='img-container'>
          <img src={Budgeteer} alt="Budgeteer" className="budgeter-img image" />
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
        Budgeting is a necessary tool for anyone who wants to take control over their finances.
        </p>
        <ul className="links">
          <li><a className="link" href="https://github.com/jmw7/budgeteer-client">Client Code</a></li>
          <li><a className="link" href="https://github.com/jmw7/budgeteer-api">Server Code</a></li>
          <li><a className="link" href="https://budgeteer-app.now.sh/">View Project</a></li>
        </ul>
      </div>

      <div className="project">
        <div className='img-container'>
          <img src={Recipe} alt="Recipe Catalog" className="recipe-img image" />
        </div>
        <h3>Recipe Catalog</h3>
        <h4>
          <img src={HTML} alt='html' className='icon' />
          <img src={CSS} alt='css' className='icon' />
          <img src={ReactLogo} alt='reactjs' className='icon' />
          <img src={Node} alt='nodejs' className='icon' id='nodejs' />
          <img src={Postgresql} alt='postgresql' className='icon' />
        </h4>
        <p>Recipe Catalog is digital recipe storage container for the modern times.
        Gone are the days of physical recipe books. All recipes can be bookmarked and linked directly to the website.
        This idea evolved out of bookmarking recipes I'd find on the web and needed a consolidated place to keep them.
        </p>
        <ul className="links">
          <li><a className="link" href="https://github.com/jmw7/recipe-client">Client Code</a></li>
          <li><a className="link" href="https://github.com/jmw7/recipe-api">Server Code</a></li>
          <li><a className="link" href="https://recipes-app-zeta.now.sh/">View Project</a></li>
        </ul>
      </div>

      <div className="project">
        <div className='img-container'>
          <img src={Findr} alt="Findr" className="event_findr_img image" />
        </div>
        <h3>Event Findr</h3>
        <h4>
          <img src={HTML} alt='html' className='icon' />
          <img src={CSS} alt='css' className='icon' />
          <img src={jQuery} alt='jQuery' className='icon' />
        </h4>
        <p>How many times have you had a free Friday night and no novel ideas were coming to mind? This app is for you. Event Findr gives the user the ability to search for events located by city or zip code and the weather for the current day of search.
          <br />Never again be plagued by sitting at home with no plans over the weekend!
          <br /><br />Event Findr is a project that hones in on third party API integration. It connects with the TicketMaster and
          APIXU Weather APIs.
          </p>
        <ul className='links'>
          <li><a className='link' href='https://github.com/jmw7/Event-Findr'>Github</a></li>
          <li><a className='link' href='https://jmw7.github.io/Event-Findr/'>View Project</a></li>
        </ul>
      </div>
    </div>

  );

}
