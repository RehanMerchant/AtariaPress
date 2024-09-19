import { FaCircleNodes } from "react-icons/fa6";
import { Button } from "./ui/button";

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


  <p className="text-muted-foreground md:text-lg text-sm mt-4 md:max-w-[70%] max-w-[300px] px-2">
  Here, you'll find a curated collection of thought-provoking articles, insightful analyses, and engaging stories that delve into a wide range of topics. Whether you're seeking expert opinions, practical tips, or simply a fresh perspective, our blog is your go-to destination.

  </p>
</div>
<div className="md:mt-5 mt-3">
<Button size={"sm"}>
Explore More
</Button>
</div>

        </div>
        <div className='md:flex flex-col w-[90%] h-auto mt-10  bg-white shadow-xl p-5 rounded-md'>
  
  <div className="flex flex-col justify-end md:items-end">
    <div className="flex md:justify-start items-center gap-2">
    <FaCircleNodes className="md:size-8 size-6 text-gray-800" />
    <p className="text-gray-800 font-semibold md:text-2xl text-xl">
    Blog Central
    </p>
    </div>
  
  
    <p className="text-muted-foreground md:text-lg text-sm mt-4 md:max-w-[70%] max-w-[300px] px-2">
    Here, you'll find a curated collection of thought-provoking articles, insightful analyses, and engaging stories that delve into a wide range of topics. Whether you're seeking expert opinions, practical tips, or simply a fresh perspective, our blog is your go-to destination.
  
    </p>
  </div>
  <div className="md:mt-5 mt-3 flex justify-end">
  <Button size={"sm"}>
  Explore More
  </Button>
  </div>
  
          </div>
        </div>
  )
}

export default BlogsSection