import React from 'react';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import SecondSection from '../Components/SecondSection';
import TimelineSection from '../Components/TimelineSection';
import GetSection from '../Components/GetSection';
import ServicesSection from '../Components/ServicesSection';
import Footer from '../components/Footer';


function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <SecondSection />
      <TimelineSection />
      <GetSection/>
      <ServicesSection/>
      <Footer />
    </div>
  );
}

export default HomePage;