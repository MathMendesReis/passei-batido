import React from 'react'

type Props = {
	children: React.ReactNode;
};
export default function TitleRoot({children}: Props) {
  return (
    <div className="flex items-center justify-center gap-3 h-8">{children}</div>
  )
}
