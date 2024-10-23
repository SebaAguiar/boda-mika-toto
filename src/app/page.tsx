import React from 'react';
import HeroSection from './components/containers/HeroSection';

const Home = async () => {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <HeroSection />
      </main>
    </>
  );
};

export default Home;
