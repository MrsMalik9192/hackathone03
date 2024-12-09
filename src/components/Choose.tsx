import React from 'react'
import Image from 'next/image'

const Choose = () => {
  return (
    
    <div className='ml-[200px] mr-[250px] mt-[80px] '>
     <div >
     <div className='flex justify-center '> <Image src="/images/Choose & pick.png" alt="choose Image" width={144} height={40}  ></Image></div>
      <div className='flex justify-center mb-[20px]' ><Image src="/images/From Our Menu.png" alt="choose Image" width={358} height={56}  ></Image></div>
      <Image src="/images/Text.png" alt="choose Image" width={1056} height={28} className='mt-[10px]'  ></Image>
      
      </div>
      <div className='flex '>
      
      <div  className="relative w-[500px] h-[300px] pl-[400px] mt-[32px] items-center px-4 pt-6">
      <Image src="/images/unsplash_INjdgkCwHp0.png" alt="choose Image" layout="fill"
        objectFit="cover"></Image>
      <Image src="/images/unsplash_Lv174o7fn7Y.png" alt="choose Image" width={300} height={300} className="absolute top-5 left-5"  ></Image>
      
      </div>
      <div className='flex gap-8'>
      <div className='justify-between space-y-6 mt-6'>
      <Image src="/images/Lettuce Leaf (8).png" alt="choose Image" width={375} height={79} ></Image>
      <Image src="/images/Lettuce Leaf (1).png" alt="choose Image" width={375} height={79}  ></Image>
      <Image src="/images/Lettuce Leaf (2).png" alt="choose Image" width={375} height={79}  ></Image>
      <Image src="/images/Lettuce Leaf (3).png" alt="choose Image" width={375} height={79}  ></Image></div>
      <div className='space-y-6 mt-6'>
      <Image src="/images/Lettuce Leaf (4).png" alt="choose Image" width={375} height={79}  ></Image>
      <Image src="/images/Lettuce Leaf (5).png" alt="choose Image" width={375} height={79}  ></Image>
      <Image src="/images/Lettuce Leaf (6).png" alt="choose Image" width={375} height={79}  ></Image>
      <Image src="/images/Lettuce Leaf (7).png" alt="choose Image" width={375} height={79}  ></Image></div>
      </div>
      </div>
    </div>
  )
}

export default Choose
