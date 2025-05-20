import React from 'react';
import Header from './Header';

import Hero from './Hero';
import About from './About';
import RestaurantItems from './RestaurantItems';
import SpecialOffers from './SpecialOffer';
import Menu from './Menu';
import Gallery from './Gallery';
import OpeningHours from './OpeningHours';
import Reservation from './reservation';
import Testimonials from './Testimonials';
import Blogs from './Blog';
import Subscribe from './Subscribe';
import Contact from './contactus';
import Footer from './Footer';

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <RestaurantItems />
      <SpecialOffers />
      <Menu />
      <Gallery />
      <OpeningHours />
      <Reservation />
      <Testimonials />
      <Blogs />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
};
export default Main;
