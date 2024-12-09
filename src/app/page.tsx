
import About from '@/components/About';
import Blog from '@/components/Blog';
import Chefs from '@/components/Chefs';
import Choose from '@/components/Choose';
import Client from '@/components/Client';
import Food from '@/components/Food';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonal from '@/components/Testimonal';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Food />
      <Client />
      <Choose />
      <Chefs />
      <Testimonal/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default Page;
