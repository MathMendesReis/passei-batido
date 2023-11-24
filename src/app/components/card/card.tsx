import Image from 'next/image';
import React from 'react';

type Props = {
	image: string;
}
export default function CardImage({ image }: Props) {
	return (
    <Image
      className=" mr-auto ml-auto"
      src={image}
      width={100}
      height={50}
      alt=""
    />
  )
}
