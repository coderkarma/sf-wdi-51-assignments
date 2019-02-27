import React from 'react';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import Header from './Header/Header';
import Archive from './Archive/Archive';

import Contact from './Contact/Contact';

const Index = () => {
  return (
    <div>
      <Header />
      <About />
      <Archive />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
