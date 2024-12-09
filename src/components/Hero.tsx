import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-[80px] flex justify-center mt-[300px] pr-[50px] pl-[50px]' >
    <div className='w-[80%] h-full flex items-center justify-between  '>
    <div className="flex items-center  ml-[50px] "><Image src="/images/Group hero.png" alt="Hero Image" width={25.28} height={492}  ></Image></div>
    
   
    
     
    
      
      </div>
      
      
<div className='w-full h-[80%]  flex justify-center items-center mt-[2px] mb-[20px] mr-[200px] mi-[60px]'>
      
<div className=" w-[80%] h-full flex justify-center items-center px-20 ml-[20px]  ">
  <Image src="/images/Text Contant.png" alt="Hero Image" width={500} height={365} ></Image>
  

<Image src="/images/food.png" alt="Hero Image" width={900.8} height={670}  ></Image></div>


</div>
    
      </div>
    
  )
}

export default Hero
