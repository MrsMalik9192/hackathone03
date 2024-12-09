import React from 'react'
import Image from 'next/image'

const Food = () => {
  return (
    <div className='mr-[150px] ml-[100px]'>
   <div className='flex justify-center mt-[20px] items-center px-4 pt-4'>
      <Image src="/images/Food Category.png" alt="Hero Image" width={177} height={140}  ></Image></div>
      
      <div className='flex justify-center mt-[20px] items-center px-4 pt-4'> 
        <Image src="/images/Choose Food Iteam.png" alt="Hero Image" width={446} height={56}  ></Image>

      </div>
     <div className='pl-[400px] mt-[20px] items-center px-4 pt-4'> 
      
      <Image src="/images/Image box.png" alt="Hero Image" width={1320} height={329}></Image></div>
     
     
     <div className='pl-[400px] mt-[20px] items-center px-4 pt-4'>
    
    
    <Image src="/images/Choose Food Iteam.png" alt="Hero Image" width={446} height={56}  ></Image>

     </div>
    </div>
    
  )
}

export default Food
