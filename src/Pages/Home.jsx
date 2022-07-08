import React from 'react';
import Contact from '../components/Contact';
import HomeComponent from '../components/Home';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

import Skills from './Skills';

const Home = () => {
return (
    <div className='relative'>
   <Navbar/>
   <HomeComponent/>
   <Skills/>
   <Projects/>
   <Contact/>
    </div>
  )
}

export default Home