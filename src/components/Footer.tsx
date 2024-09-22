import Image from 'next/image'
import Logo from  '@/app/asset/Logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>

    <div className='w-full h-auto py-8 bg-neutral-200 md:p-5 pt-4 flex justify-between pr-3'>
<div className='flex'>
<Image src={Logo} alt='' height={0} className='md:h-20 h-14 w-auto'/>
<div>
<p className='text-black font-light text-lg mt-1 md:mt-2 md:text-2xl'>
    Ataria<span className='font-medium text-rose-500'>Press</span>
</p>
<p className='text-[10px] md:text-xs text-muted-foreground font-medium -mt-1'>All Rights Reserved</p>
</div>

</div>

<div className='md:flex   justify-between w-[50%] hidden'>
<div className='p-2 flex-col flex'>
<p className='font-medium text-lg '>
    For Authors
</p>
<div className='ml-1 mt-1'>
<ul className='text-sm '>
    <li>
     Dashboard
    </li>
    <li className='mt-1'>
    Editor
    </li>
    <li className='mt-1'>
  Blogs Central
    </li>
    <li className='mt-1'>
Support
    </li>
</ul>
</div>
</div>


<div className='p-2 flex-col flex'>
<p className='font-medium text-lg '>
   Content and Products
</p>
<div className='ml-1 mt-1'>
<ul className='text-sm '>
    <li>
    Books
    </li>
    <li className='mt-1'>
   Novel Books
    </li>
    <li className='mt-1'>
 Articles
    </li>
    <li className='mt-1'>
Publications and Research
    </li>
    <li className='mt-1'>
Blogs
    </li> 
    <li className='mt-1'>
All Categories
    </li>
</ul>
</div>
</div>


<div className='p-2 flex-col flex'>
<p className='font-medium text-lg '>
   About Us
</p>
<div className='ml-1 mt-1'>
<ul className='text-sm '>
    <li>
   Company
    </li>
    <li className='mt-1'>
    Reviews
    </li>
    <li className='mt-1'>
  Contact Us
    </li>
 
</ul>
</div>
</div>

</div>

<div className='flex gap-2 items-center justify-center'>
<GrYoutube className='size-4 md:size-6 cursor-pointer'/>
<FaInstagram  className='size-4 md:size-6 cursor-pointer'/>
<FaFacebook  className='size-4 md:size-6 cursor-pointer'/>
<FaLinkedin   className='size-4 md:size-6 cursor-pointer'/>
</div>


        </div>
        <div className='w-full bg-neutral-300 px-2 md:px-6 py-2 flex justify-between'>
<div>
<p className='md:text-xs text-[9px] flex  '>
Copyright © 2024 Ataria Press
</p>
</div>
<div className='md:text-xs text-[9px] font-medium text-gray-800 flex gap-2'>
<p className='cursor-pointer'>Term of use</p>
<p className='cursor-pointer'>Privacy Policy</p>
<p className='cursor-pointer'>Sitemap</p>
</div>
            </div>
        </>
  )
}

export default Footer