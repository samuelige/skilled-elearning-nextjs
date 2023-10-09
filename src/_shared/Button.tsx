import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    color: string;
}

const Button: React.FC<ButtonProps> = ({children, color}) => {
  return (
    <button className={`text-white text-center text-base font-bold  w-[8.75rem] h-12 rounded-[1.75rem] cursor-pointer outline-none ${color === "yankeesBlue" ? 'bg-yankeesBlue hover:bg-darkBlueGray' : color === "frostbiteOrange" ? 'bg-frostbiteOrange hover:bg-frostbiteOrangeHover' : color === "blueFrostbite" ? 'bg-blueFrostbite hover:bg-blueFrostbiteHover' : ""}`}>{children}</button>
  )
}

export default Button