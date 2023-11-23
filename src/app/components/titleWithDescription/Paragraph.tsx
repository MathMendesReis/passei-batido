import React from 'react'

interface Props {
  text: string
  fontSize?:string

}
export default function Paragraph({ text,fontSize='text-3xl' }: Props) {
  return (
    <div>
      <p className={` text-black ${fontSize} font-bold font-['Poppins'] leading-[65px] uppercase text-center`}>{text}</p>
    </div>
  )

}
