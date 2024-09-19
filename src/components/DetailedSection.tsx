import React from 'react'
import { Button } from './ui/button'
const DetailedSection = () => {
  return (
    <div className='bg-gray-50 w-full mt-10 p-6  flex flex-col justify-center items-center'>
<p className='font-semibold md:text-2xl text-xl text-center'>
Kick Start your writing Journey with <span className='font-normal'>
Ataria Press
    </span>
</p>
<p className='text-muted-foreground mt-1 text-center'>
100000+ Writers have sucessfully Bootstraped their Journey with us.
</p>
<div className='flex  justify-center mt-4'>
<Button size={"sm"}>
Join Us
</Button>
</div>
    </div>
  
  )
}

export default DetailedSection