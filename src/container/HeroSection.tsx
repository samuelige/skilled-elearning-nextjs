"use client";
import Button from '@/_shared/Button'
import Image from 'next/image'
import React from 'react'


import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from '@/_shared/utils/motion';
import TypingText from '@/_shared/TypingText';

const HeroSection = () => {
  return (
    <article className='w-full px-4 relative z-20 md:pl-[2.44rem] md:pr-0 md:w-[24.875rem]  md:mt-[6.19rem] xl:my-auto xl:w-full xl-1:px-0'>
      <div className='w-full flex flex-col mt-[2.38rem]  md:mt-0 xl-1:max-w-[69.375rem] xl-1:m-auto'>
          <div className='w-full flex flex-col  xl:w-[28.5625rem]'>
          
            <motion.section
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className='w-full '
            >
              <motion.h1 variants={textVariant(1.1)} className="text-yankeesBlue text-[2.5rem] xl:text-[3.5rem] font-extrabold">
                Maximize skill, minimize budget
              </motion.h1>
              <motion.p variants={textVariant(1.2)} className="text-base  font-medium leading-[1.625rem] text-romanSilver mt-[1.63rem] mb-[1.5rem] xl:mb-[2.5rem] xl:text-[1.125rem] xl:mt-[1.81rem]">
              Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
              </motion.p>
              <Button color={"frostbiteOrange"}>Get Started</Button>
            </motion.section>

            <motion.section
              variants={slideIn('right', 'tween', 0.2, 1)}
              className='w-full mt-[2.88rem] md:hidden'
            >
              <Image src={"/image-hero-mobile.png"} alt="image-hero-mobile" className='w-full h-auto object-fill md:hidden' width={327} height={301} />
            </motion.section>
            
          </div>
        </div>
    </article>
  )
}

export default HeroSection