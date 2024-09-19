 



import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
  import Book from '@/app/asset/BOOk.jpg'
  import Book2 from '@/app/asset/book2.webp'
  import Book3 from '@/app/asset/book3.webp'
  import Book4 from '@/app/asset/book4.webp'
  import Book5 from '@/app/asset/book5.webp'
  import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/button"
const bookdata = [
   {
    id:"1",
image:Book5
   },
   {
    id:"2",
    image:Book2
   },
   {
    id:"3",
    image:Book3
   },
   {
    id:"4",
    image:Book4
   },
   {
    id:"5",
    image:Book
   },
]


const Bookscard = () => {
  return (
    <div>
 <div className="flex items-center gap-2">
    <div className="md:h-8 md:w-4 h-6 w-3 bg-rose-600"/>
   <p className="md:text-xl font-medium text-lg cursor-pointer">
Best Seller
   </p>

 </div>
  
    <div className='flex flex-col justify-center mt-6 mb-12 items-center'>

 <Carousel className="md:w-[70%] w-[80%] md:mt-8 ">
      <CarouselContent className="-ml-1">
     {bookdata.map(function(data){
        return(
            <CarouselItem key={data.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex h-auto  bg-white items-center  justify-center p-0">
              <Image src={data.image} alt="Book" className="w-full h-auto cursor-pointer" height={0} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        )
     })}
         
        
      </CarouselContent>
      <div className="hidden md:flex">
      <CarouselPrevious />
      <CarouselNext />
      </div>

    </Carousel>

        </div>
        <div className="md:px-20 px-10 pb-12 border-l-8 border-rose-600 mb-10">
<p className="md:text-2xl text-xl font-semibold">
    Explore More and Novel From our Store.
</p>
<p className="text-muted-foreground text-sm">
All books, Novel, Publicaitons and Article are Avaliable in our store, Feel free to  Explore.
</p>
<Button className="flex gap-1 mt-5">
    Store <FaArrowRightLong className="text-basex"/>
</Button>
        </div>
        </div>
  )
}

export default Bookscard