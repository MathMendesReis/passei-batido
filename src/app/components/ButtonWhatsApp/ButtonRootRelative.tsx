'use client'
import React from 'react'
import { handleClick } from './js';

type Props = {
  children: React.ReactNode
};
export default function ButtonRootRelative({ children }: Props) {

  return (
    <button 
    className={`w-[55px] h-[55px] bg-[#2FB337] flex items-center justify-center  rounded-full fixed left-3 bottom-3 sm:hidden`}
    onClick={handleClick}
    >
      {children}
    </button>
  )
}
