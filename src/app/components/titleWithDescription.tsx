import React from 'react';

type Props = {
	title: string;
	paragraph: string;
};
export default function TitleWithDescription({title, paragraph}: Props) {
	return (
		<>
			<div className='flex items-center justify-center gap-3'>
				<div className='h-1 w-10 bg-[#3294F8] rounded-md' />
				<h1 className=" text-[#3294F8] text-3xl font-bold font-['Poppins'] leading-[65px] uppercase">{title}</h1>
				<div className='h-1 w-10 bg-[#3294F8] rounded-md' />
			</div>
			<div>
				<p className=" text-black text-3xl font-bold font-['Poppins'] leading-[65px] uppercase">{paragraph}</p>
			</div>
		</>
	);
}
