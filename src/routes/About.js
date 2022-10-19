import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import SacCard from '../components/SacCard';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Im a friendly Application Developer"/>
      <AboutContent />
      <SacCard />
      <Footer />
    </div>
  )
}

export default About