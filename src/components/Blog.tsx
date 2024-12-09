import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className='pl-[150px] pr-[100px] mt-[20px] '>
    <div className='flex justify-center mb-[20px]'></div>
    <div className='flex justify-center'><Image src="/images/Blog Post.png" alt="chefs Image" width={124} height={40} ></Image></div>
     <div className='flex justify-center'><Image src="/images/Latest News & Blog.png" alt="chefs Image" width={462} height={56} ></Image></div>
      
      <div className='flex justify-center mb-[50px]'>
      <Image src="/images/Blog Card 1.png" alt="chefs Image" width={424} height={569} ></Image>
      <Image src="/images/Blog Card 3.png" alt="chefs Image" width={424} height={569} ></Image>
      <Image src="/images/Blog Card 2.png" alt="chefs Image" width={424} height={569} ></Image></div>
      
      <div className='flex justify-center mb-[50px]'>
      
      <Image src="/images/newsletter.png" alt="chefs Image" width={1170} height={142.62} ></Image>
      </div>
<div  className='flex space-x-6'>
      <ul className=' list-none mb-[50px]'>
       
      <li className='font-bold '>About Us.</li>
      <li>orporate clients and leisure travelers has</li>
      <li>been relying on Groundlink for dependab</li>
       <li>safe, and professional chauffeured car</li>
      <li>service in major cities across World.</li>
      <li className='flex space-x-2 mt-5'>
        <Image src="/images/Watch.png" alt="chefs Image" width={78} height={72} ></Image>
    
    
      <Image src="/images/text (1).png" alt="chefs Image" width={149} height={74} ></Image>
      </li>
      </ul>


      <ul className='list-none mb-[50px]'>
        <li className='font-bold mb-[5px]'>
        Useful Links
        </li>
        <li>About</li>
        <li>News</li>
    <li>Partners</li>
    <li>Team</li>
    <li>Menu</li>
    <li>Contacts</li></ul>
    
      
      <ul  className='list-none mb-[50px]'>
        <li className='font-bold '>
        Help?
        </li>
        <li>FAQ</li>
        <li>
          Term & conditions</li>
    <li>Reporting</li>
    <li>Documentation</li>
    <li>Support Policy</li>
    <li>Contacts</li>
    <li>Privacy</li>
      </ul>
      

      <ul className='list-none '>
        <li className='font-bold mb-[20px]'>Recent Post</li>
        <li> 
        <Image src="/images/Resent post cadr 1.png" alt="chefs Image" width={244} height={53} ></Image>
        <Image src="/images/Resent post cadr 2.png" alt="" width={244} height={53} ></Image>
        
        <Image src="/images/Resent post cadr 3.png" alt="" width={244} height={53} ></Image>
        
        </li>
      </ul>
      </div>
      
    </div>
  )
}

export default Blog
