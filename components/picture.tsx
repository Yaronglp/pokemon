import React from 'react'
import Image from 'next/image'

const DIMENSION = {
  SM: {
    WIDTH: 200,
    HEIGHT: 200
  },
  LARGE: {
    WIDTH: 400,
    HEIGHT: 400
  },
}

export enum EPicSize {
  sm = 'SM',
  large = 'LARGE'
}

interface IPicture {
  image: string
  size?: EPicSize
}

export const Picture = ({size = EPicSize.sm, image}: IPicture) => {
  return (
    <Image 
        width={DIMENSION[size].WIDTH} 
        height={DIMENSION[size].HEIGHT} 
        src={image} 
        alt='img not found'/>
  )
}
