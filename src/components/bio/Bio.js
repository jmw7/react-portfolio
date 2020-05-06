import React from 'react';
import './Bio.css';

export default function Bio() {
  return (
    <div id='bio-section'>
      <div className='bio-container'>
        <h2>A bit about me:</h2>
        <div className="bio">
          <p>
            I'm a full stack web developer focused on React and Node, sprinkled with a little bit of ASP Classic and SQL.
          <br /><br />
          I love web development because it answers a myriad of problems in the world, with a little bit of tailoring of course.
          It connects people in ways that weren't possible before.
          I've taken this coding journey solo for quite some time and I'm thirsty to contribute and be challenged by a team of great developers.
          </p>
        </div>
      </div>
    </div>
  );
}

