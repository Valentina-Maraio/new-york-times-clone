import React from 'react'
import { Image } from "@nextui-org/react";
import Subscribe from '../assets/ads/Subscribe.png';

const Ads = () => {
  return (
      <Image
        width={'auto'}
        height={'auto'}
        src={Subscribe}
        alt="Default Image"
        autoResize={true}
      />
  )
}

export default Ads