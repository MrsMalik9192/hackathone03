import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    
    <div className='mt-[200px] pl-[100px] pr-[100px] w-full h-[80%]  flex justify-center items-center mb-[20px]  '>
     <div className="flex justify-between w-full mb-[20px]">
      <div><Image src="/images/about group.png" alt="Hero Image" width={562} height={562}  ></Image></div>
      <div><Image src="/images/about03.png" alt="Hero Image" width={660} height={330}  ></Image></div></div>
      <div className="flex flex-col items-center">
      <Image src="/images/about02.png " alt="Hero Image" width={322} height={194}  ></Image>
      
      <Image src="/images/about01.png" alt="Hero Image" width={322} height={194}  ></Image></div>



    </div>
  )
}

export default About
