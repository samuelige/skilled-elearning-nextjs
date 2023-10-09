'use client';
import React from 'react'
import { motion } from 'framer-motion';

import CourseCard from '@/_shared/CourseCard'
import { staggerContainer } from '@/_shared/utils/motion';


const CourseSection = () => {
  const contentData: Record<string,string>[] = [
    {
      id: '1',
      image: "./icon_animation.svg",
      title: "Animation",
      description: "Learn the latest animation techniques to create stunning motion design and captivate your audience."
    },
    {
      id: '2',
      image: "./icon-design.svg",
      title: "Design",
      description: "Create beautiful, usable interfaces to help shape the future of how the web looks."
    },
    {
      id: '3',
      image: "./icon-photography.svg",
      title: "Photography",
      description: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
    },
    {
      id: '4',
      image: "./icon-crypto.svg",
      title: "Crypto",
      description: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
    },
    {
      id: '5',
      image: "./icon-business.svg",
      title: "Business",
      description: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
    },
  ]
  return (
    <motion.article
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='w-full bg-whiteGradient px-4 pb-20 md:pl-[2.44rem] md:pr-10 xl-1:px-0'
      >
      <div className='flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-[0.62rem] xl:md:grid-cols-3 xl-1:max-w-[69.375rem] xl-1:m-auto xl:gap-x-[1.87rem] xl:gap-y-14'>
        <section className='w-full h-[7.5rem] rounded-[0.625rem] bg-frostbiteOrange pt-6 pl-7 pr-[1.81rem] pb-8 md:h-[16.1875rem] md:mt-6 md:pt-14 xl:pr-7 xl:h-[20.125rem] transition-[flex] duration-[0.7s] ease-out-flex'>
            <p className='text-white text-2xl font-extrabold xl:text-[2rem] leading-[2.5rem]'>Check out our most popular courses!</p>
        </section>
        {
          contentData?.map(({ id, image, title, description }, index) => (
            <CourseCard 
              key={id}
              index={index}
              image={image}
              title={title}
              description={description}
            />
          ))
        }
      </div>
    </motion.article>

  )
}

export default CourseSection