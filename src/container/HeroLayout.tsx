"use client";
import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '@/_shared/utils/motion';

const HeroLayout = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='relative w-full md:h-[40.06rem] lg:h-[55.5rem] overflow-hidden flex flex-col'
    >
      <motion.img
          variants={slideIn('right', 'tween', 0.2, 1)}
          src="./image-hero-desktop.png" 
          alt="image-hero-deskto"
          className="hidden absolute top-[-3rem] right-[-9rem] z-0 h-full  xl:block xl:top-[-6rem]  xl:right-[-23rem] xl-1:top-[-6rem]  xl-1:right-[-18rem] "
      ></motion.img>
      <motion.img
          variants={slideIn('right', 'tween', 0.2, 1)}
          src="./image-hero-tablet.png" 
          alt="image-hero-tablet"
          className="absolute top-[-4rem] right-[-16rem] z-0 h-full hidden  md:block xl:hidden"
      ></motion.img>

      <Header/>
      <HeroSection/>
    </motion.div>

  )
}

export default HeroLayout