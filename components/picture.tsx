import React from 'react'
import Image from 'next/image'

const DIMENSION = {
  SM: {
    WIDTH: 200,
    HEIGHT: 200
  },
  MEDIUM: {
    WIDTH: 250,
    HEIGHT: 250
  },
  LARGE: {
    WIDTH: 400,
    HEIGHT: 400
  },
}

export enum EPicSize {
  sm = 'SM',
  medium = 'MEDIUM',
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
