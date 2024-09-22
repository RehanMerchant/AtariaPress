"use client"
import { FaCircleNodes } from "react-icons/fa6";
import { Button } from "./ui/button";
import { HiQuestionMarkCircle } from "react-icons/hi";
import Link from "next/link";

const BlogsSection = () => {
  
  return (
    <div className='mt-6 mb-6 w-full flex flex-col  justify-center items-center'>
        <div className='md:flex flex-col w-[90%] h-auto bg-white shadow-xl p-5 rounded-md'>
  
<div>
  <div className="flex md:justify-start items-center gap-2">
  <FaCircleNodes className="md:size-8 size-6 text-gray-800" />
  <p className="text-gray-800 font-semibold md:text-2xl text-xl">
  Blog Central
  </p>
  </div>
  <p className="text-muted-foreground md:text-lg text-base mt-4 md:max-w-[70%] max-w-[300px] px-2">
  Here, you all find a curated collection of thought-provoking articles, insightful analyses, 
  and engaging stories that delve into a wide range of topics. Whether you are seeking expert 
  opinions, practical tips, or simply a fresh perspective, our blog is your go-to destination.
<span className="ml-1 items-center text-sm w-fit text-blue-500 cursor-pointer hover:underline">
Explore More 
</span>
  </p>
</div>
<div className="mt-4 px-2 py-5 md:pl-4 gap-y-5 flex flex-col ">
 
<input placeholder="Blog Title" className="rounded-md outline-none text-sm bg-gray-100 p-2 w-full md:w-[50%]"/>
<textarea placeholder="Blog content" className="rounded-md outline-none text-sm bg-gray-100 h-48 p-2 w-[100%] md:w-[50%]"/>
<p className="hidden text-muted-foreground text-xs ml-2 md:flex items-center gap-1"><HiQuestionMarkCircle/>Note: The Blogging Editor is different than the above template</p>


</div>


<div className="md:mt-5 mt-3">
  <Link href="/dashboard">
  <Button size={"sm"}>
Write Blogs
</Button>
  </Link>

</div>

        </div>
        </div>
  )
}

export default BlogsSection