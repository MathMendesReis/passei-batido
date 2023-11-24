import React from 'react'

interface Props {
  children: React.ReactNode
}
export default function ButtonRoot({ children }: Props) {
  return (
    <button className="w-[348.47px] h-[55px] pl-10 pr-[39.70px] bg-[#2FB337] justify-center items-center inline-flex mt-3">
      {children}
    </button>
  )
}
