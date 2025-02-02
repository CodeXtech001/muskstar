
import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function HeroSection() {
  return (
    <div  className='w-full flex flex-col lg:flex-row lg:pl-12 justify-start text-center items-center lg:text-start gap-24'>
        <div className='flex-1' >
            {/* Image and headline */}
            <div className='w-full flex justify-center lg:justify-start'>
            <div className='w-[158px]'>
            <Image src="/assets/images/elonimg.png" width={3956} height={2928} alt='elon-picture' />
            </div>
            </div>
            
            <div>
                <h1 className={`${inter.variable} font-sans text-[44px] font-bold text-[#30374F] my-2`}>X Crypto Giveaway</h1>
                <p className='max-w-[880px] text-[#30374F] text-sm'>Good Luck Everyone!
                    <br/>
                    A great opportunity to grow your capital!
                    <br/>
                    <br/>
                     The giveaway? It&#39;s our way to say: &quot;Thank you!&quot;.
                </p>
                <div className='space-x-4 mt-6'>
                    
                    <Link href= "/btc/index.html" className={buttonVariants({ variant: "outline"})}  style={{ background: "#FF8617", color:"#FFEEDE"}}>BTC Giveaway</Link>
                    <Link href= "/eth/index.html" className={buttonVariants({ variant: "outline"})}  style={{ background: "#A956FF", color:"#F2E7FF"}}>ETH Giveaway</Link>

                </div>
            </div>
            
        </div>
         {/* video */}
        <div className='flex-1 mx-4 rounded-md overflow-hidden'>
        <video className=" w-full h-full object-cover" autoPlay={true} controls={true} playsInline >
      <source src="/assets/video/musk.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
    </div>
  )
}

export default HeroSection