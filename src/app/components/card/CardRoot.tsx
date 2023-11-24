import React from 'react'

interface Props {
  children: React.ReactNode
}
export default function CardRoot({children}:Props) {
  return (
    <div className="w-[359.98px]  h-96 p-2.5 flex-col justify-center items-start inline-flex">
      {children}
    </div>
  )
}
