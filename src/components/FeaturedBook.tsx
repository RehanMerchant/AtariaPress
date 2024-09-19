import Book from '@/app/asset/book.png'
import { FaQuestionCircle } from "react-icons/fa";
import Image from 'next/image'
import { LiaStarSolid } from "react-icons/lia";
import { Button } from './ui/button';
const FeaturedBook = () => {
  return (
    <div className='bg-gray-50 relative md:mt-10 mt-4'>

    <div className='w-full md:flex p-10 gap-10  '>

        <div className='md:w-[26%] w-[80%]'>
        <Image src={Book} alt='Book' height={0} className=''/>
        </div>
        <div className='md:w-[69%] w-full relative  justify-center flex '>
            
  <div className='mt-10'>
<p className='md:text-3xl text-2xl md:ml-8 font-semibold md:max-w-[80%]'>Read our exclusively Launched the whole collection of Sherlock Holmes.
    </p>
    <div className='md:ml-8 py-3'>
        <p className='text-sm text-gray-600 flex gap-1 items-center'>
            Featured <FaQuestionCircle className='text-xs cursor-pointer'/>
        </p>
        <p className='text-xl font-medium'>
            Sherlock Holmes
        </p>
        
        <p className='text-sm text-muted-foreground'>
            Arthur Conan Doyle
        </p>
    </div>
    <div className='flex md:w-[69%] justify-between items-center'>

    <div className='md:ml-8  flex gap-1'>
        <LiaStarSolid className='size-5 text-yellow-500'/>
        <LiaStarSolid className='size-5 text-yellow-500'/>
        <LiaStarSolid className='size-5 text-yellow-500'/>
        <LiaStarSolid className='size-5 text-yellow-500'/>
        <LiaStarSolid className='size-5 text-gray-500'/>
    </div>
    <div>
        <p className='font-semibold text-xl '>
           $99 
        </p>
    </div>
    </div>
    <div className='md:ml-6 mt-6 '>
        <Button className='md:ml-2'>
           Buy Now
        </Button>
    </div>
  </div>
        </div>

    </div>
    </div>
  )
}

export default FeaturedBook