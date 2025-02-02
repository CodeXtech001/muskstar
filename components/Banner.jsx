"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Banner() {
    const pathname = usePathname()
    const noBanner = ["/btc/index.html", "/eth/index.html"]
    
  return (
   <>
    {noBanner.includes(pathname) ? null : (<div className='sticky bottom-0 right-0 w-full -z-10 opacity-40'>
        <Image src="/assets/images/banner down.png" width={16384} height={2052} alt='banner'/>
    </div>)
     }
   </>
  )
}

export default Banner