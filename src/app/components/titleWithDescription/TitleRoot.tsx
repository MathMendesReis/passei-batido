import React from 'react'

interface Props {
	children: React.ReactNode;
}
export default function TitleRoot({children}:Props) {
  return (
    <div className='flex items-center justify-center gap-3 h-80'>
      {children}
    </div>
  )
}
