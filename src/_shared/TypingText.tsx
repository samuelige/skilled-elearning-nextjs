'use client';
import React from 'react'
import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from './utils/motion';


interface TypingTextProps {
    title: string;
    textStyles: string;
}

const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
    <motion.p
      variants={textContainer}
      className={`break-words ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span className={`break-words`} variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
);

export default TypingText;