import Play from '@/app/asset/play.png'
import Image from 'next/image'
import AppStore from  '@/app/asset/App store.png'
const Playsection = () => {
  return (
    <div className="mb-10 p-5 mt-10 w-full bg-gray-100 py-6 flex justify-center items-center flex-col">
        <div className='flex md:gap-2'>
        <Image src={Play} alt='PLay Store' height={0} className='md:size-20 size-14'/>
        <Image src={AppStore} alt='PLay Store' height={0} className='md:h-20 size-14 w-auto'/>
        </div>

<p className=' text-lg md:text-2xl md:mt-5 mt-4 text-center max-w-[400px]'>
     <span className='font-light'>Ataria Press</span> app is available in  Google Play and App Store for Free.
</p>
<p className='mt-2 text-xs md:text-sm text-muted-foreground'>
Ascess all Books, Novel and Articles with ease.
</p>
    </div>
  )
}

export default Playsection