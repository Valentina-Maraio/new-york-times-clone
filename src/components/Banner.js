import React from 'react'
import { Image } from "@nextui-org/react";
import TheNewYorkTimes from '../assets/ads/TheNewYorkTimes.png';

const Banner = () => {
    return (
        <Image
        width={'auto'}
        height={'auto'}  
        src={TheNewYorkTimes}
        alt="Default Image"
        autoResize={true}
      />
    )
}

export default Banner