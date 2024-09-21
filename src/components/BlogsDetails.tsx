import Screen from "@/app/asset/cinema.png";
import Image from "next/image";
import Nobel from '@/app/asset/nobel.jpg'
import Cup from '@/app/asset/Cup.png'
import { Button } from "./ui/button";
const BlogsDetails = () => {
  return ( 
    <div className="md:mt-4">
      <div className="flex items-center gap-2">
        <div className="md:h-8 md:w-4 h-6 w-3 bg-rose-600" />
        <p className="md:text-xl font-medium text-lg cursor-pointer">
          Recent Articles
        </p>
      </div>
      <div className="md:p-3 pb-10 mt-6">
        <div className="md:flex justify-between  ">
          <div className="w-full cursor-pointer  flex md:flex-col px-2 py-1 ">
            <div className="w-[30%] md:w-full flex items-center ">
              <Image
                src={Screen}
                alt="Screen"
                height={0}
                className=" aspect-video"
              />
            </div>
            <div className="w-[70%] md:w-[90%]">
              <p className="font-medium text-[13px] ml-2 md:ml-0 md:text-lg md:mt-2 ">
                Sugyansil Das Delivered another SuperHit this year.
              </p>
              <p className=" ml-2 mt-0.5 text-[11px] text-muted-foreground md:text-[14px] ">
                Theaters are Full which signifies yet another Superhit to the Oscar winning Director, The entire movie collection is...
              </p>
            </div>
          </div>
          <div className="w-full  mt-4 md:mt-0   flex md:flex-col px-2 py-1 cursor-pointer ">
          <div className="w-[30%] md:w-full flex items-center ">
              <Image
                src={Nobel}
                alt="Screen"
                height={0}
                className=" aspect-video"
              />
            </div>
            <div className="w-[70%] md:w-[90%]">
              <p className="font-medium text-[13px] ml-2 md:ml-0 md:text-lg md:mt-2 ">
               First Oscar winning director to win Nobel prize Sugyansil Das
              </p>
              <p className=" ml-2 mt-0.5 text-[11px] text-muted-foreground md:text-[14px] ">
               Sugyansil Das Achived nobel prize for the discovery of God, says God lies inside Big Bang...
              </p>
            </div>
          </div>
          <div className="w-full    flex md:flex-col px-2 py-1  mt-4 md:mt-0 cursor-pointer ">
          <div className="w-[30%] md:w-full  flex items-center">
              <Image
                src={Cup}
                alt="Screen"
                height={0}
                className=" aspect-video"
              />
            </div>
            <div className="w-[70%] md:w-[90%]">
              <p className="font-medium text-[13px] ml-2 md:ml-0 md:text-lg md:mt-2 ">
               India won first FIFA Worldcup under Sugyansil Das.
              </p>
              <p className=" ml-2 mt-0.5 text-[11px] text-muted-foreground md:text-[14px] ">
               Extraodinary football player led team india to become FIFA champions, grew up in a nasty city in odisha...
              </p>
            </div>
          </div>
        </div>
      </div> 
      <div className="md:px-20 md:mt-10 px-10 pb-12  mb-10">
<p className="md:text-2xl text-xl font-semibold">
    Explore More Articles and News From our blogs Section.
</p>
<p className="text-muted-foreground text-sm">
Recent News, Article and Blogs are Avaliable in our blogs , Explore for Free.
</p>
<Button  className="flex gap-1 mt-5 ">
    Blogs
</Button>
        </div>
    </div>
  );
};

export default BlogsDetails;
