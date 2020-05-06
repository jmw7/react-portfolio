import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMugHot, faGlobeAsia, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(fab, faPaperPlane, faMugHot, faGlobeAsia )

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Bio />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
