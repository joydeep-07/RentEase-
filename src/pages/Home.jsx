import React from 'react'
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import CurvedLoop from '../components/CurvedLoop';
import Categories from '../components/Categories';
import WhyUs from '../components/WhyUs';

const Home = () => {
    
  return (
    <>
      <Hero />
      <Categories />

      <CurvedLoop
        marqueeText="Rent what you need when you need it without buying."
        speed={2}
        curveAmount={-310}
        direction="right"
        interactive
        className=" md:text-6xl text-8xl"
      />
      <WhyUs />
      <Testimonials />
    </>
  );
}

export default Home