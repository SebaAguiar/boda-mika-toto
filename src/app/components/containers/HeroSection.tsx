import React from 'react';
import styles from '@/styles/heroSection.module.css';
import CounterBack from '../CounterBack';
const HeroSection = () => {
  return (
    <>
      <header
        id={styles.hero}
        className='w-full h-[500px] flex flex-col items-center justify-center gap-4 text-white'
      >
        <div className='flex items-center justify-center'>
          <div className='bg-white w-20 md:w-30 h-[1px]'></div>
          <p className='text-lg md:text-xl mx-7 poppinsFont'>21-12-2024</p>
          <div className='bg-white w-20 md:w-30 h-[1px]'></div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <h1 className='text-4xl md:text-7xl cookieFont w-full flex items-center justify-center gap-4'>
            Mika{' '}
            <span className='rounded-[100%] bg-white text-slate-600 text-4xl h-10 w-10 flex items-center justify-center'>
              &
            </span>{' '}
            Toto
          </h1>
        </div>
        <div className='bg-white w-64 md:w-96 h-[1px] mt-8'></div>
        <div>
          <CounterBack />
        </div>
      </header>
    </>
  );
};

export default HeroSection;
