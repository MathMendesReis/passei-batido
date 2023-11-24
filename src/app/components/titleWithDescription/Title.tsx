import React from 'react';
type Props = {
	text: string;
	fontSize?: string;
}

export default function Title({text, fontSize = 'text-3xl'}: Props) {
	return (
    <h1
      className={`text-[#3294F8] ${fontSize} tex font-bold font-['Poppins']  uppercase flex-1 text-center`}
	>{text}</h1>
  )
}
