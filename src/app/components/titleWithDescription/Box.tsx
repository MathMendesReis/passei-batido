import React from 'react'

type Props = {
  children: React.ReactNode
};
export default function Box({children}: Props) {
  return (
    <div className="flex flex-col gap-8 shrink-0 h-36 items-center justify-center">
      {children}
    </div>
  )
}
