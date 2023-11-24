import Image from 'next/image'
import React from 'react'

interface Props{
  image:string
}
export default function CardImage({image}:Props) {
  return <Image className=" mr-auto ml-auto" src={image} width={120} height={94} alt='' />
    
}
