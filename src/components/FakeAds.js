import React from 'react'
import { Image } from "@nextui-org/react";
import Unlimited from '../assets/ads/Unlimited.png';

const FakeAds = () => {
  return (
      <Image
        width={'auto'}
        height={'auto'}
        src={Unlimited}
        alt="Default Image"
        autoResize={true}
      />
  )
}

export default FakeAds