import Image from "next/image";
import React from "react";
import Logo from "@/app/asset/Logo.png";
import Pen from "@/app/asset/pen.png";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Button } from "./ui/button";
import { FaBook } from "react-icons/fa";
import { RiQuillPenFill } from "react-icons/ri";
import { HiMiniDocumentText } from "react-icons/hi2";
import { FaTabletScreenButton } from "react-icons/fa6";
import { PiSignIn } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const LPageHeader = () => {
  return (
    <div className="w-full fixed z-50 bg-white shadow-md flex items-center justify-between py-1 md:py-2 px-1">
      <div className="flex items-center">
        <div className="flex gap-0 items-center ">
          <Image src={Logo} alt="Ataria Press" height={45} />
          <p className="text-xl md:text-2xl font-light flex-col flex">Ataria</p>
          <p className="text-rose-500 font-semibold text-xl md:text-2xl ml-0.5">
            Press
          </p>
        </div>
        <div className="ml-4 md:flex hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Authors</NavigationMenuTrigger>
                <NavigationMenuContent >
                  <div className="h-auto w-[580px] flex  p-2 ">
                    <div>
                    <div className="cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1.5">
                      <p className="font-medium text-rose-600 ">
                        Across the Globe
                      </p>
                      <p className="text-sm max-w-[300px] text-muted-foreground">
                        Publish your book sell across 170 countries seamlessly.
                      </p>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1.5 ">
                      <p className="font-medium text-rose-600 ">Use Editor</p>
                      <p className="text-sm max-w-[300px] text-muted-foreground">
                        Edit your books in{" "}
                       here itself
                        for FREE
                      </p>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1.5">
                      <p className="font-medium text-rose-600 ">Communities</p>
                      <p className="text-sm max-w-[300px] text-muted-foreground">
                       Join/Collabrate your favourite authors Community  
                      </p>
                    </div>
                    </div>
                    <div>
                    <div className="cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1.5">
                      <p className="font-medium text-rose-600 flex items-center">
                       Be Verified <VscVerifiedFilled className="size-5 ml-1 text-blue-500" />
                      </p>
                      <p className="text-sm max-w-[300px] text-muted-foreground">
                       Make yourself Trustworthy to your retailers by being Verified
                      </p>
                    </div>
                    <div className=" h-full flex justify-center">
                     <Image src={Pen} alt="Pen" height={0} width={0} className="h-36 w-auto"/>
                    </div>
                   
                    </div>
                 
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Store </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
               <p className="ml-2  font-medium text-rose-600">
Categories
               </p>
                  <div className="h-auto w-[580px] flex  p-2 ">
                  
                   <div className=" px-2 flex flex-col gap-y-1.5 text-sm  text-gray-700 ">
                    <p className="flex items-center gap-1 cursor-pointer hover:text-gray-600"><FaBook className="mt-1" />Books</p>
                    <p className="flex items-center gap-1 cursor-pointer hover:text-gray-600"><RiQuillPenFill className="mt-1" />Novels</p>
                    <p className="flex items-center gap-1 cursor-pointer hover:text-gray-600"><HiMiniDocumentText className="mt-1" />Publications</p>
                    <p className="flex items-center gap-1 cursor-pointer hover:text-gray-600"><FaTabletScreenButton  className="mt-1" />eBooks</p>
                    <p className="flex items-center gap-1 cursor-pointer hover:text-gray-600"><GrArticle   className="mt-1" />Articles</p>
                    </div>
                    <div className="h-38 border border-gray-200"/>
                    <div className=" px-2 flex gap-5 ">
                      <div className="flex flex-col gap-y-0.5 text-[13px]  text-gray-600 ">
                         <p className="cursor-pointer">Comics</p>
                      <p className="cursor-pointer">Philoshopy</p>
                      <p className="cursor-pointer">Morden History</p>
                      <p className="cursor-pointer">Ancient History</p>
                      <p className="cursor-pointer">Poetry</p>
                      <p className="cursor-pointer">Short Stories</p>
                      <p className="cursor-pointer">Educational</p>
                      </div>
                      <div className="flex flex-col gap-y-0.5 text-[13px]  text-gray-600 ">
                         <p className="cursor-pointer">Mystery</p>
                      <p className="cursor-pointer">Biography</p>
                      <p className="cursor-pointer">Spritual</p>
                      <p className="cursor-pointer">Thriller</p>
                      <p className="cursor-pointer">Science fiction</p>
                      <p className="cursor-pointer">Adventure fiction</p>
                      <p className="cursor-pointer">Horror</p>

                      </div>
                      <div className="flex flex-col gap-y-0.5 text-[13px]  text-gray-600 ">
                         <p className="cursor-pointer">Romance</p>
                      <p className="cursor-pointer">Fairy Tale</p>
                      <p className="cursor-pointer">Travel</p>
                      <p className="cursor-pointer">Classics</p>
                      <p className="cursor-pointer">Fantasy</p>
                      <p className="cursor-pointer">Drama</p>
                      <p className="cursor-pointer">Young adult</p>

                      </div>
                      <div className="flex flex-col gap-y-0.5 text-[13px]  text-gray-600 ">
                         <p className="cursor-pointer">Play</p>
                      <p className="cursor-pointer">Cook Books</p>
                      <p className="cursor-pointer">Art Books</p>
                      <p className="cursor-pointer">Research Papers</p>
                      <p className="cursor-pointer">Findings</p>
                      <p className="cursor-pointer">Play</p>
                      <p className="cursor-pointer">Adults</p>

                      </div>
                    </div>
                   
                 
                  

                 </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="pr-2 md:flex items-center gap-2 hidden">
        <Button size={"sm"}  className="text-xs ">Get Started</Button>
      </div>
      <div className="pr-2 flex items-center gap-2 md:hidden">
      <PiSignIn className="size-6" />
      </div>
    </div>
  );
};

export default LPageHeader;
