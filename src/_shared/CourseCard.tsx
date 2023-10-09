'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'

import TypingText from './TypingText';
import { fadeIn } from './utils/motion';

type I_CourseCard = {
  key: string,
  index: number,
  image: string,
  title: string,
  description: string,
}

const CourseCard:React.FC<I_CourseCard> = (props) => {
  const { key, index, image, title, description } = props;

  return (
    <motion.section
      key={key}
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full h-[17.6875rem] relative rounded-br-[0.625rem] rounded-bl-[0.625rem] xl:h-[21.625rem] transition-[flex] duration-[0.7s] ease-out-flex'
    >
      <div className='absolute z-10 left-7'>
            <Image  src={image || ""} alt="course_icon" width={56} height={56}/>
        </div>
        <div className='w-full h-[16.1875rem] flex flex-col mt-6 pt-14 pl-7 pr-[0.81rem] pb-8 shadow-sm rounded-[0.625rem] bg-white relative xl:pr-7 xl:h-[20.125rem] xl-pt-16'>
          <TypingText textStyles='block text-xl text-yankeesBlue font-extrabold xl:text-2xl' title={title} />
          <p className='mt-4 text-base font-semibold text-romanSilver leading-[1.625rem] xl:text-lg xl:mt-6'>{description}</p>
          <button className='w-[6.5rem] mt-6 border-0  outline-none text-sasquatchSocks hover:text-carnationPink text-lg font-bold md:mt-auto'>Get Started</button>
            
        </div>
    </motion.section>
  )
}

export default CourseCard