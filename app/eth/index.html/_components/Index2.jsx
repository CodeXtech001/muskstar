"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ethData } from '@/lib/card'
import { Clock4, Ellipsis } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { useToast } from '@/hooks/use-toast'
import TableData2 from './TableData2'
import { cn } from '@/lib/utils'

function Index2() {


    const { toast } = useToast()
    const ethAddress = process.env.NEXT_PUBLIC_ETH_ADDRESS;

    const initialTime = 40 * 60; // 40 minutes in seconds

    const getStoredTime = () => {
        const storedTime = localStorage.getItem("countdownTimeeth");
        return storedTime ? parseInt(storedTime, 10) : initialTime;
      };

    const [time, setTime] = useState(getStoredTime()); // 40 minutes in seconds
    
  const copyToClipboard = () => {
    navigator.clipboard.writeText(ethAddress);
    toast({
          title: "EtH Address copied!",
          description:`you have ${formatTime(time)} left`,
        })
  };
    
  console.log("time checking>>" + time)

  useEffect(() => {
    if (time <= 0) return; // Stop when it reaches 0

    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem("countdownTimeeth", newTime); // Save in localStorage
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [time]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
    <div className='flex flex-col md:flex-row gap-6'>
         <Card className=" w-full">
        <CardHeader>
        <CardTitle className="text-[#30374F]">Example:</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className='space-y-2 font-medium text-xs md:text-sm'>
              { ethData.map((coin, index) => <p className='text-[#30374F] flex justify-start items-center space-x-1 md:space-x-2' key={index}> Send <span className='pl-2 text-[#A147FF]'>{coin.Send}</span> <span className="pr-2">{coin.icon}</span>get <span className='text-[#A147FF]'>{coin.get} </span><span className="pr-2">{coin.icon}</span> back  {coin.bonus ? <span className='text-[#A147FF] bg-[#F6F4FE] p-1 hidden md:inline rounded-md'>{coin.bonus}</span> : null}</p>)}
            </ul>
        </CardContent>
        </Card>
        <Card className=" w-full bg-[#F3F3F3]">
        <CardHeader>
        <CardTitle className={cn("text-[#30374F] flex text-2xl items-center",{"text-sm": time === 0})}> <Clock4 className='mr-2'/>{time !== 0 ?formatTime(time): "you have run out of time"}</CardTitle>
        </CardHeader>
        <CardContent>
           <p className='text-[#30374F]'>Send ETH to the Contribution Address:</p>
           <p className="p-2 mt-2 bg-white rounded-md text-[#667085] border border-1 border-slate-300 truncate">
        {ethAddress}
      </p>
      <Button onClick={copyToClipboard} className="w-full mt-4 font-semibold">
        Copy
      </Button>
        </CardContent>
        </Card>
    </div>
    <Card className="mt-6">
    <CardContent >  
        <p className='text-[#30374F] mt-6'>
            To send the ETH, you can use any wallet or exchange! Once we receive your ETH, we will immediately send the double the amount back to you. If you send ETH after the giveaway ends - we will immediately return the same amount back to you.
        </p>
    </CardContent>   
    </Card>
    <Card className="relative mt-6 bg-[#F7EFFF] h-[150px] flex items-center justify-center">
    <CardHeader>
        <CardTitle className="text-[#30374F] flex justify-center">
            <Image src="/assets/images/searchiconpng3D.png" alt='searchicon' width={2001}
      height={2001} className='w-6 h-6 animate-bounce relative top-[-2] '/>
            <p>We're trying to find your transaction</p><Ellipsis className='animate-pulse'/></CardTitle>
    </CardHeader>
    <div className='absolute top-[8%] right-[85%] animate-pulse'>
    <svg width="62.5" height="63" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g filter="url(#filter0_d_3962_20200)">
<path d="M42.5 59C56.031 59 67 48.031 67 34.5C67 20.969 56.031 10 42.5 10C28.969 10 18 20.969 18 34.5C18 48.031 28.969 59 42.5 59Z" fill="url(#paint0_linear_3962_20200)" fill-opacity="0.2"/>
<path d="M42.5 59.5C56.3071 59.5 67.5 48.3071 67.5 34.5C67.5 20.6929 56.3071 9.5 42.5 9.5C28.6929 9.5 17.5 20.6929 17.5 34.5C17.5 48.3071 28.6929 59.5 42.5 59.5Z" stroke="url(#paint1_linear_3962_20200)" stroke-opacity="0.3"/>
</g>
<path d="M38.7012 53.5031C49.0293 55.7685 59.2382 49.2324 61.5036 38.9043C63.769 28.5762 57.2328 18.3672 46.9047 16.1019C36.5767 13.8365 26.3677 20.3726 24.1023 30.7007C21.837 41.0288 28.3731 51.2378 38.7012 53.5031Z" fill="#A147FF"/>
<path d="M45.6692 21.7106L45.3844 22.2287L41.8594 38.3L41.987 38.4984L50.4312 35.7288L45.6692 21.7106Z" fill="white"/>
<path d="M45.6744 21.7103L35.4824 32.4485L41.9921 38.4982L43.7031 30.6976L45.6744 21.7103Z" fill="white"/>
<path d="M41.6789 39.9101L41.5623 40.0018L40.3066 45.7268L40.3398 46.0151L50.127 37.1436L41.6789 39.9101Z" fill="white"/>
<path d="M40.34 46.0168L41.6791 39.9117L35.1689 33.8643L40.34 46.0168Z" fill="white"/>
<path d="M41.9902 38.4987L50.4342 35.729L43.7011 30.6982L41.9902 38.4987Z" fill="white"/>
<path d="M35.4795 32.4484L41.9891 38.498L43.7 30.6976L35.4795 32.4484Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_3962_20200" x="-4" y="-4" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.580392 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3962_20200"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3962_20200" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3962_20200" x1="45.5625" y1="68.6979" x2="50.6667" y2="1.83333" gradientUnits="userSpaceOnUse">
<stop stop-color="#A147FF"/>
<stop offset="1" stop-color="#A147FF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_3962_20200" x1="42.5" y1="10" x2="36.375" y2="91.1563" gradientUnits="userSpaceOnUse">
<stop stop-color="#A147FF"/>
<stop offset="1" stop-color="#A147FF" stop-opacity="0"/>
</linearGradient>
</defs>
    </svg>   
    </div>
    <div className='absolute bottom-[5%] left-[20%] animate-pulse'>
    <svg width="42.5" height="43" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g filter="url(#filter0_d_3962_20200)">
<path d="M42.5 59C56.031 59 67 48.031 67 34.5C67 20.969 56.031 10 42.5 10C28.969 10 18 20.969 18 34.5C18 48.031 28.969 59 42.5 59Z" fill="url(#paint0_linear_3962_20200)" fill-opacity="0.2"/>
<path d="M42.5 59.5C56.3071 59.5 67.5 48.3071 67.5 34.5C67.5 20.6929 56.3071 9.5 42.5 9.5C28.6929 9.5 17.5 20.6929 17.5 34.5C17.5 48.3071 28.6929 59.5 42.5 59.5Z" stroke="url(#paint1_linear_3962_20200)" stroke-opacity="0.3"/>
</g>
<path d="M38.7012 53.5031C49.0293 55.7685 59.2382 49.2324 61.5036 38.9043C63.769 28.5762 57.2328 18.3672 46.9047 16.1019C36.5767 13.8365 26.3677 20.3726 24.1023 30.7007C21.837 41.0288 28.3731 51.2378 38.7012 53.5031Z" fill="#A147FF"/>
<path d="M45.6692 21.7106L45.3844 22.2287L41.8594 38.3L41.987 38.4984L50.4312 35.7288L45.6692 21.7106Z" fill="white"/>
<path d="M45.6744 21.7103L35.4824 32.4485L41.9921 38.4982L43.7031 30.6976L45.6744 21.7103Z" fill="white"/>
<path d="M41.6789 39.9101L41.5623 40.0018L40.3066 45.7268L40.3398 46.0151L50.127 37.1436L41.6789 39.9101Z" fill="white"/>
<path d="M40.34 46.0168L41.6791 39.9117L35.1689 33.8643L40.34 46.0168Z" fill="white"/>
<path d="M41.9902 38.4987L50.4342 35.729L43.7011 30.6982L41.9902 38.4987Z" fill="white"/>
<path d="M35.4795 32.4484L41.9891 38.498L43.7 30.6976L35.4795 32.4484Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_3962_20200" x="-4" y="-4" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.580392 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3962_20200"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3962_20200" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3962_20200" x1="45.5625" y1="68.6979" x2="50.6667" y2="1.83333" gradientUnits="userSpaceOnUse">
<stop stop-color="#A147FF"/>
<stop offset="1" stop-color="#A147FF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_3962_20200" x1="42.5" y1="10" x2="36.375" y2="91.1563" gradientUnits="userSpaceOnUse">
<stop stop-color="#A147FF"/>
<stop offset="1" stop-color="#A147FF" stop-opacity="0"/>
</linearGradient>
</defs>
    </svg>
    </div>
    <div className='absolute bottom-[8%] left-[85%] animate-pulse'>
    <svg width="52.5" height="53" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g filter="url(#filter0_d_3962_20200)">
<path d="M42.5 59C56.031 59 67 48.031 67 34.5C67 20.969 56.031 10 42.5 10C28.969 10 18 20.969 18 34.5C18 48.031 28.969 59 42.5 59Z" fill="url(#paint0_linear_3962_20200)" fill-opacity="0.2"/>
<path d="M42.5 59.5C56.3071 59.5 67.5 48.3071 67.5 34.5C67.5 20.6929 56.3071 9.5 42.5 9.5C28.6929 9.5 17.5 20.6929 17.5 34.5C17.5 48.3071 28.6929 59.5 42.5 59.5Z" stroke="url(#paint1_linear_3962_20200)" stroke-opacity="0.3"/>
</g>
<path d="M38.7012 53.5031C49.0293 55.7685 59.2382 49.2324 61.5036 38.9043C63.769 28.5762 57.2328 18.3672 46.9047 16.1019C36.5767 13.8365 26.3677 20.3726 24.1023 30.7007C21.837 41.0288 28.3731 51.2378 38.7012 53.5031Z" fill="#A147FF"/>
<path d="M45.6692 21.7106L45.3844 22.2287L41.8594 38.3L41.987 38.4984L50.4312 35.7288L45.6692 21.7106Z" fill="white"/>
<path d="M45.6744 21.7103L35.4824 32.4485L41.9921 38.4982L43.7031 30.6976L45.6744 21.7103Z" fill="white"/>
<path d="M41.6789 39.9101L41.5623 40.0018L40.3066 45.7268L40.3398 46.0151L50.127 37.1436L41.6789 39.9101Z" fill="white"/>
<path d="M40.34 46.0168L41.6791 39.9117L35.1689 33.8643L40.34 46.0168Z" fill="white"/>
<path d="M41.9902 38.4987L50.4342 35.729L43.7011 30.6982L41.9902 38.4987Z" fill="white"/>
<path d="M35.4795 32.4484L41.9891 38.498L43.7 30.6976L35.4795 32.4484Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_3962_20200" x="-4" y="-4" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.580392 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3962_20200"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3962_20200" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3962_20200" x1="45.5625" y1="68.6979" x2="50.6667" y2="1.83333" gradientUnits="userSpaceOnUse">
<stop stop-color="#A147FF"/>
<stop offset="1" stop-color="#A147FF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_3962_20200" x1="42.5" y1="10" x2="36.375" y2="91.1563" gradientUnits="userSpaceOnUse">
<stop stop-color="#A147FF"/>
<stop offset="1" stop-color="#A147FF" stop-opacity="0"/>
</linearGradient>
</defs>
    </svg>
    </div>
    <div className='absolute top-[20%] left-[70%] animate-pulse'>
    <svg width="32" height="33" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g filter="url(#filter0_d_3962_20200)">
<path d="M42.5 59C56.031 59 67 48.031 67 34.5C67 20.969 56.031 10 42.5 10C28.969 10 18 20.969 18 34.5C18 48.031 28.969 59 42.5 59Z" fill="url(#paint0_linear_3962_20200)" fill-opacity="0.2"/>
<path d="M42.5 59.5C56.3071 59.5 67.5 48.3071 67.5 34.5C67.5 20.6929 56.3071 9.5 42.5 9.5C28.6929 9.5 17.5 20.6929 17.5 34.5C17.5 48.3071 28.6929 59.5 42.5 59.5Z" stroke="url(#paint1_linear_3962_20200)" stroke-opacity="0.3"/>
</g>
<path d="M38.7012 53.5031C49.0293 55.7685 59.2382 49.2324 61.5036 38.9043C63.769 28.5762 57.2328 18.3672 46.9047 16.1019C36.5767 13.8365 26.3677 20.3726 24.1023 30.7007C21.837 41.0288 28.3731 51.2378 38.7012 53.5031Z" fill="#A147FF"/>
<path d="M45.6692 21.7106L45.3844 22.2287L41.8594 38.3L41.987 38.4984L50.4312 35.7288L45.6692 21.7106Z" fill="white"/>
<path d="M45.6744 21.7103L35.4824 32.4485L41.9921 38.4982L43.7031 30.6976L45.6744 21.7103Z" fill="white"/>
<path d="M41.6789 39.9101L41.5623 40.0018L40.3066 45.7268L40.3398 46.0151L50.127 37.1436L41.6789 39.9101Z" fill="white"/>
<path d="M40.34 46.0168L41.6791 39.9117L35.1689 33.8643L40.34 46.0168Z" fill="white"/>
<path d="M41.9902 38.4987L50.4342 35.729L43.7011 30.6982L41.9902 38.4987Z" fill="white"/>
<path d="M35.4795 32.4484L41.9891 38.498L43.7 30.6976L35.4795 32.4484Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_3962_20200" x="-4" y="-4" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.580392 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3962_20200"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3962_20200" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3962_20200" x1="45.5625" y1="68.6979" x2="50.6667" y2="1.83333" gradientUnits="userSpaceOnUse">
<stop stop-color="#A147FF"/>
<stop offset="1" stop-color="#A147FF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_3962_20200" x1="42.5" y1="10" x2="36.375" y2="91.1563" gradientUnits="userSpaceOnUse">
<stop stop-color="#A147FF"/>
<stop offset="1" stop-color="#A147FF" stop-opacity="0"/>
</linearGradient>
</defs>
    </svg>
    </div>
    </Card>
    <TableData2/> 
    </>
  )
}

export default Index2