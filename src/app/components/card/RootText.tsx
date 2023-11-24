import React from 'react'

interface Props {
  children: React.ReactNode
}
export default function RootText({children}:Props) {
  return (
    <div className="w-full h-[16.875rem] flex-col justify-center items-start flex">
      {children}
    </div>)
}
