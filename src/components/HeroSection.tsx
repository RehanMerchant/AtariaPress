"use client"

import React from 'react'
import { Button } from './ui/button'
import { FaAngleRight } from "react-icons/fa6";
import HeroImage from '@/app/asset/hero image.png'
import Image from 'next/image';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <div className='md:flex justify-between pb-8 pt-12'>
<div className='md:w-1/2 pl-4 md:pl-10 md:pt-16 pt-6 w-full'>
 <p className='md:text-4xl text-3xl font-semibold text-gray-900'>
 Publish your book and publications with  <br/><span className='font-light '>
    Ataria Press</span>
 </p>
 <p className='text-muted-foreground text-[17px]  md:max-w-[80%] max-w-[90%] mt-2'>
 We are building a new way for writers and readers to connect online and offline, 
 and help authors achieve their dreams with the freedom and flexibility that they deserve.<br/>
 Redirect to Dashboard to start selling/publishing your Book, Novel or Publications. Sign up if you dont have a Authors Account.
</p>
 
 <div className='mt-6 md:mt-8 flex gap-2 '>
  <Link href="/dashboard">
  <Button size={"sm"}  className='flex gap-1 items-center' >
   Dashboard <FaAngleRight/>
</Button>
  </Link>

 </div>
</div>
<div className='w-1/2 md:flex hidden items-center justify-center pr-8 '>
<Image src={HeroImage} alt='Hero Image' height={0} width={0} className='w-full h-auto' />
</div>
    </div>
  )
}

export default HeroSection