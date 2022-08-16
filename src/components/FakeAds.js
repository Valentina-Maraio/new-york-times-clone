import React from 'react'
import { Image } from "@nextui-org/react";
import Journalism from '../assets/ads/Journalism.png';

const FakeAds = () => {
  return (
      <Image
        width={'auto'}
        height={'auto'}
        src={Journalism}
        alt="Default Image"
        autoResize={true}
      />
  )
}

export default FakeAds