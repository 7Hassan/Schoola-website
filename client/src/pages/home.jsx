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
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  // const [country, setCountry] = useState('Egypt'); // default fallback
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://apiip.net/api/check?accessKey=b5f272ca-cd6a-43ab-b718-0d3f435ab6f1'
  //     )
  //     .then((response) => {
  //       const userCountry = response.data.countryName;
  //       setCountry(userCountry || 'Egypt');
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching country:', error);
  //       setCountry('');
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

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
