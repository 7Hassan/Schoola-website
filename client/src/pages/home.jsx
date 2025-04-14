import React from 'react';
import Header from '../components/header/header';
import Hero from '../components/homeSecs/hero';
import { SoftSkills, HardSkills } from '../components/homeSecs/skills';
import Students from '../components/homeSecs/students';
import Questions from '../components/homeSecs/questions';
import Video from '../components/homeSecs/video';
import Footer from '../components/homeSecs/footer';
import Reviews from '../components/homeSecs/reviews';
import ContactWh from '../components/homeSecs/contact-wh';
import RoadMaps from '../components/homeSecs/roadMaps';
import Certificates from '../components/homeSecs/certificates';
import About from '../components/homeSecs/about';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <HardSkills />
        <SoftSkills />
        <Video />
        <Students />
        <RoadMaps />
        <Certificates />
        <Reviews />
        <Questions />
        <ContactWh />
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
