'use client';
import React from 'react'
import { motion } from 'framer-motion';

import Button from '@/_shared/Button'
import Image from 'next/image'
import { footerVariants } from '@/_shared/utils/motion';

const FooterSection = () => {
  return (
    <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className='w-full px-4 h-[7.5rem] flex flex-col justify-center bg-yankeesBlue md:px-10 xl-1:px-0'
    >
        <div className='w-full flex flex-row items-center justify-between xl-1:max-w-[69.375rem] xl-1:m-auto'>
            <Image src={'/logo-light.svg'} alt='footer_logo' width={89} height={35} />
            <Button color={"blueFrostbite"}>Get Started</Button>
        </div>
    </motion.footer>
  )
}

export default FooterSection