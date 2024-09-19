import { IoMdBook } from "react-icons/io";
import { GiQuill } from "react-icons/gi";
import { BsBoxSeamFill } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
const SubHeroSection = () => {
  return (
    
    <div className="w-full flex flex-col justify-center items-center">
<div className="md:flex pl-6 pr-6  mt-8 gap-x-5 md:w-[94%] ">

<div className="bg-white rounded-md shadow-md md:w-1/2 p-5  ">
<div className="flex"><IoMdBook className=" shrink-0 md:size-18 size-12 text-rose-600" />
<div className="flex flex-col ml-5">

<p className="md:text-[22px] text-lg font-semibold md:mt-2 text-gray-900 ">
Authors Dashboard
</p>
<p className="text-sm mt-2 md:text-base text-muted-foreground md:max-w-[80%] ">
A centralized platform for authors to manage their book submissions, track progress, and view analytics.
</p>

</div>
    </div>

</div>
<div className="bg-white rounded-md shadow-md md:w-1/2 p-5 md:mt-0 mt-5">
<div className="flex"><GiQuill  className=" shrink-0 md:size-18 size-12 text-rose-600" />
<div className="flex flex-col ml-5">

<p className="md:text-[22px] text-lg font-semibold md:mt-2 text-gray-900 ">
Presonal Editor
</p>
<p className="mt-2 text-sm md:text-base text-muted-foreground md:max-w-[80%] ">
We provide a build-in Editor for our author to write their articles, books or Novel effortlessly with tons of features.
</p>

</div>
    </div>
</div>
</div>
<div className="md:flex pl-6 pr-6 pb-10 mt-5 gap-x-5 md:w-[94%] ">

<div className="bg-white rounded-md shadow-md md:w-1/2 p-5  ">
<div className="flex"><BsBoxSeamFill  className=" shrink-0 md:size-18 size-12 text-rose-600" />
<div className="flex flex-col ml-5">

<p className="md:text-[22px] text-lg font-semibold md:mt-2 text-gray-900 ">
Distribution Channels
</p>
<p className="text-sm mt-2 md:text-base text-muted-foreground md:max-w-[80%] ">
Wide distribution across major online retailers, libraries, and bookstores.
</p>

</div>
    </div>

</div>
<div className="bg-white rounded-md shadow-md md:w-1/2 p-5 md:mt-0 mt-5">
<div className="flex"><FiTarget  className=" shrink-0 md:size-18 size-12 text-rose-600" />
<div className="flex flex-col ml-5">

<p className="md:text-[22px] text-lg font-semibold md:mt-2 text-gray-900 ">
Marketing and Promotion
</p>
<p className="mt-2 text-sm md:text-base text-muted-foreground md:max-w-[80%] ">
Tools and resources to help authors promote their books, such as social media integration, newsletters, and book launch support.
</p>

</div>
    </div>
</div>
</div>
</div>

  )
}

export default SubHeroSection