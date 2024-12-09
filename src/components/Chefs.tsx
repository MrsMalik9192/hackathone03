import React from 'react'
import Image from 'next/image'

const Chefs = () => {
  return (
    <div className='pl-[50px] pr-[50px] mt-[20px]'>
    <div className='justify-center mb-[25px]'>
      <div className='flex justify-center'><Image src="/images/Chefs.png" alt="chefs Image" width={56} height={40}  ></Image></div>
     <div className=' flex justify-center'><Image src="/images/Meet Our Chef.png" alt="chefs Image" width={329} height={56} className='mb-[25px]'  ></Image></div>
      
      
      
      <div className='flex space-x-6 mb-[25px] mr-[40px] ml-[60px]'>
      
      
      <Image src="/images/Chef card.png" alt="chefs Image" width={312} height={319}  ></Image>
      <Image src="/images/Card 2.png" alt="chefs Image" width={312} height={319}  ></Image>
      <Image src="/images/Card 3.png" alt="chefs Image" width={312} height={319}  ></Image>
      <Image src="/images/Card 4.png" alt="chefs Image" width={312} height={319} ></Image>
      
      
      
      
      </div>
      <div className='flex justify-center'>
      <Image src="/images/Rectangle 8839.png" alt="chefs Image" width={155} height={50} ></Image></div>
      
      </div>

    </div>
  )    

}

export default Chefs
