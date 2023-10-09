"use client"
import Button from '@/_shared/Button'
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion';
import { headerVariants } from '@/_shared/utils/motion'

const Header = () => {
  return (
    <motion.header
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    className='w-full px-4 pt-4 relative z-10 md:pl-[2.44rem] md:pr-10 md:pt-6 xl-1:px-0'
  >
    <div className='w-full flex flex-row items-center justify-between xl-1:max-w-[69.375rem] xl-1:m-auto'>
            <Image src={'./logo-dark.svg'} alt='header_logo' width={89} height={35} />
            <Button color={"yankeesBlue"}>Get Started</Button>
        </div>
  </motion.header>
  )
}

export default Header