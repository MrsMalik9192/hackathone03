import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#FF9F0D] flex items-center justify-between w-full h-[100px] px-8 '>
      

      <h1 className='items-center mr-[150px] ml-[100px]'>Copyright © 2022 by Ayeman. All Rights Reserved.</h1>
      
  <Image src="/images/Sociali icon.png" alt="Hero Image" width={240} height={34}></Image>
  <Image src="/images/Rectangle 8925.png" alt="Hero Image" width={240} height={34} ></Image>
  


  

      
      
    </div>
  )
}

export default Footer
