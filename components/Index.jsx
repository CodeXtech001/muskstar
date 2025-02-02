"use client"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { btcData} from '@/lib/card'
import { Clock4, Ellipsis } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import TableData from './TableData'
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast"

function Index() {
    
    const { toast } = useToast()
    const btcAddress = process.env.NEXT_PUBLIC_BTC_ADDRESS;
    const initialTime = 40 * 60; // 40 minutes in seconds

    const getStoredTime = () => {
        const storedTime = localStorage.getItem("countdownTimebtc");
        return storedTime ? parseInt(storedTime, 10) : initialTime;
      };

    const [time, setTime] = useState(getStoredTime()); // 40 minutes in seconds
    
  const copyToClipboard = () => {
    navigator.clipboard.writeText(btcAddress);
    toast({
          title: "BTC Address copied!",
          description:`you have ${formatTime(time)} left`,
        })
  };
    

  useEffect(() => {
    if (time <= 0) return; // Stop when it reaches 0

    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem("countdownTimebtc", newTime); // Save in localStorage
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
              { btcData.map((coin, index) => <p className='text-[#30374F] flex justify-start items-center space-x-1 md:space-x-2' key={index}> Send <span className='pl-2 text-[#FF7F0A]'>{coin.Send}</span> <span className="pr-2">{coin.icon}</span>get <span className='text-[#FF7F0A]'>{coin.get} </span><span className="pr-2">{coin.icon}</span> back  {coin.bonus ? <span className='text-[#FF7F0A] bg-[#F6F4FE] p-1 hidden md:inline rounded-md'>{coin.bonus}</span> : null}</p>
              ) }
            </ul>
        </CardContent>
        </Card>
        <Card className=" w-full bg-[#F3F3F3]">
        <CardHeader>
        <CardTitle className="text-[#30374F] text-2xl flex items-center"> <Clock4 className='mr-2'/>{formatTime(time)}</CardTitle>
        </CardHeader>
        <CardContent>
           <p className='text-[#30374F]'>Send BTC to the Contribution Address:</p>
           <p className="p-2 mt-2 bg-white rounded-md text-[#667085] border border-1 border-slate-300 truncate">{btcAddress}</p>
      <Button onClick={copyToClipboard} className="w-full mt-4 font-semibold">
        Copy
      </Button>
        </CardContent>
        </Card>
    </div>
    <Card className="mt-6">
    <CardContent >  
        <p className='text-[#30374F] mt-6'>
            To send the BTC, you can use any wallet or exchange! Once we receive your BTC, we will immediately send the double the amount back to you. If you send BTC after the giveaway ends - we will immediately return the same amount back to you.
        </p>
    </CardContent>   
    </Card>
    <Card className="relative mt-6 bg-[#FDF4EE] h-[150px] flex items-center justify-center">
    <CardHeader>
        <CardTitle className="text-[#30374F] flex justify-center">
            <Image src="/assets/images/searchiconpng3D.png" alt='searchicon' width={2001}
      height={2001} className='w-6 h-6 animate-bounce relative top-[-2] '/>
            <p>We're trying to find your transaction</p><Ellipsis className='animate-pulse'/></CardTitle>
    </CardHeader>
    <div className='absolute top-[8%] right-[85%] animate-pulse'>
    <svg width="62.5" height="63" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g filter="url(#filter0_d_3962_20166)">
<path d="M42.5 59.5C56.031 59.5 67 48.531 67 35C67 21.469 56.031 10.5 42.5 10.5C28.969 10.5 18 21.469 18 35C18 48.531 28.969 59.5 42.5 59.5Z" fill="url(#paint0_linear_3962_20166)" fill-opacity="0.2"/>
<path d="M42.5 60C56.3071 60 67.5 48.8071 67.5 35C67.5 21.1929 56.3071 10 42.5 10C28.6929 10 17.5 21.1929 17.5 35C17.5 48.8071 28.6929 60 42.5 60Z" stroke="url(#paint1_linear_3962_20166)" stroke-opacity="0.3"/>
</g>
<path d="M42.4143 53.3286C52.5842 53.3286 60.8286 45.0842 60.8286 34.9143C60.8286 24.7444 52.5842 16.5 42.4143 16.5C32.2444 16.5 24 24.7444 24 34.9143C24 45.0842 32.2444 53.3286 42.4143 53.3286Z" fill="#FF7F0A"/>
<path d="M50.5528 32.7091C50.9147 30.3442 49.0729 29.0729 46.5546 28.2248L47.3715 25.0213L45.377 24.5353L44.5817 27.6544C44.0573 27.5267 43.5188 27.4062 42.9837 27.2868L43.7847 24.1471L41.7912 23.6611L40.9738 26.8635C40.5398 26.7669 40.1137 26.6714 39.7001 26.5709L39.7024 26.5609L36.9518 25.8894L36.4212 27.9721C36.4212 27.9721 37.901 28.3037 37.8698 28.3242C38.6776 28.5214 38.8236 29.044 38.7992 29.4584L37.8686 33.1079C37.9243 33.1218 37.9965 33.1418 38.076 33.1729C38.0095 33.1568 37.9385 33.139 37.8652 33.1218L36.5609 38.2342C36.4621 38.4741 36.2116 38.834 35.6469 38.6974C35.6668 38.7257 34.1971 38.3436 34.1971 38.3436L33.207 40.5758L35.8025 41.2084C36.2854 41.3267 36.7586 41.4505 37.2244 41.5671L36.399 44.8073L38.3913 45.2933L39.2087 42.0876C39.753 42.232 40.2813 42.3653 40.7982 42.4908L39.9836 45.6815L41.9782 46.1675L42.8036 42.9334C46.2047 43.5627 48.7622 43.3089 49.8387 40.3014C50.7062 37.8799 49.7955 36.483 48.0061 35.5722C49.3093 35.2784 50.2909 34.4403 50.5528 32.7091ZM45.9956 38.9568C45.3793 41.3783 41.209 40.0692 39.8569 39.741L40.9522 35.4483C42.3042 35.7782 46.6398 36.4314 45.9956 38.9568ZM46.6126 32.6741C46.0502 34.8768 42.5792 33.7577 41.4532 33.4833L42.4463 29.59C43.5722 29.8644 47.1983 30.3764 46.6126 32.6741Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_3962_20166" x="-4" y="-3.5" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.580392 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3962_20166"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3962_20166" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3962_20166" x1="45.5625" y1="69.1979" x2="50.6667" y2="2.33333" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7E35"/>
<stop offset="1" stop-color="#FF5C00" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_3962_20166" x1="42.5" y1="10.5" x2="36.375" y2="91.6563" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7235"/>
<stop offset="1" stop-color="#FF5C00" stop-opacity="0"/>
</linearGradient>
</defs>
    </svg>
    </div>
    <div className='absolute bottom-[5%] left-[20%] animate-pulse'>
    <svg width="42.5" height="43" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g filter="url(#filter0_d_3962_20166)">
<path d="M42.5 59.5C56.031 59.5 67 48.531 67 35C67 21.469 56.031 10.5 42.5 10.5C28.969 10.5 18 21.469 18 35C18 48.531 28.969 59.5 42.5 59.5Z" fill="url(#paint0_linear_3962_20166)" fill-opacity="0.2"/>
<path d="M42.5 60C56.3071 60 67.5 48.8071 67.5 35C67.5 21.1929 56.3071 10 42.5 10C28.6929 10 17.5 21.1929 17.5 35C17.5 48.8071 28.6929 60 42.5 60Z" stroke="url(#paint1_linear_3962_20166)" stroke-opacity="0.3"/>
</g>
<path d="M42.4143 53.3286C52.5842 53.3286 60.8286 45.0842 60.8286 34.9143C60.8286 24.7444 52.5842 16.5 42.4143 16.5C32.2444 16.5 24 24.7444 24 34.9143C24 45.0842 32.2444 53.3286 42.4143 53.3286Z" fill="#FF7F0A"/>
<path d="M50.5528 32.7091C50.9147 30.3442 49.0729 29.0729 46.5546 28.2248L47.3715 25.0213L45.377 24.5353L44.5817 27.6544C44.0573 27.5267 43.5188 27.4062 42.9837 27.2868L43.7847 24.1471L41.7912 23.6611L40.9738 26.8635C40.5398 26.7669 40.1137 26.6714 39.7001 26.5709L39.7024 26.5609L36.9518 25.8894L36.4212 27.9721C36.4212 27.9721 37.901 28.3037 37.8698 28.3242C38.6776 28.5214 38.8236 29.044 38.7992 29.4584L37.8686 33.1079C37.9243 33.1218 37.9965 33.1418 38.076 33.1729C38.0095 33.1568 37.9385 33.139 37.8652 33.1218L36.5609 38.2342C36.4621 38.4741 36.2116 38.834 35.6469 38.6974C35.6668 38.7257 34.1971 38.3436 34.1971 38.3436L33.207 40.5758L35.8025 41.2084C36.2854 41.3267 36.7586 41.4505 37.2244 41.5671L36.399 44.8073L38.3913 45.2933L39.2087 42.0876C39.753 42.232 40.2813 42.3653 40.7982 42.4908L39.9836 45.6815L41.9782 46.1675L42.8036 42.9334C46.2047 43.5627 48.7622 43.3089 49.8387 40.3014C50.7062 37.8799 49.7955 36.483 48.0061 35.5722C49.3093 35.2784 50.2909 34.4403 50.5528 32.7091ZM45.9956 38.9568C45.3793 41.3783 41.209 40.0692 39.8569 39.741L40.9522 35.4483C42.3042 35.7782 46.6398 36.4314 45.9956 38.9568ZM46.6126 32.6741C46.0502 34.8768 42.5792 33.7577 41.4532 33.4833L42.4463 29.59C43.5722 29.8644 47.1983 30.3764 46.6126 32.6741Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_3962_20166" x="-4" y="-3.5" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.580392 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3962_20166"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3962_20166" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3962_20166" x1="45.5625" y1="69.1979" x2="50.6667" y2="2.33333" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7E35"/>
<stop offset="1" stop-color="#FF5C00" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_3962_20166" x1="42.5" y1="10.5" x2="36.375" y2="91.6563" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7235"/>
<stop offset="1" stop-color="#FF5C00" stop-opacity="0"/>
</linearGradient>
</defs>
    </svg>
    </div>
    <div className='absolute bottom-[8%] left-[85%] animate-pulse'>
    <svg width="52.5" height="53" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g filter="url(#filter0_d_3962_20166)">
<path d="M42.5 59.5C56.031 59.5 67 48.531 67 35C67 21.469 56.031 10.5 42.5 10.5C28.969 10.5 18 21.469 18 35C18 48.531 28.969 59.5 42.5 59.5Z" fill="url(#paint0_linear_3962_20166)" fill-opacity="0.2"/>
<path d="M42.5 60C56.3071 60 67.5 48.8071 67.5 35C67.5 21.1929 56.3071 10 42.5 10C28.6929 10 17.5 21.1929 17.5 35C17.5 48.8071 28.6929 60 42.5 60Z" stroke="url(#paint1_linear_3962_20166)" stroke-opacity="0.3"/>
</g>
<path d="M42.4143 53.3286C52.5842 53.3286 60.8286 45.0842 60.8286 34.9143C60.8286 24.7444 52.5842 16.5 42.4143 16.5C32.2444 16.5 24 24.7444 24 34.9143C24 45.0842 32.2444 53.3286 42.4143 53.3286Z" fill="#FF7F0A"/>
<path d="M50.5528 32.7091C50.9147 30.3442 49.0729 29.0729 46.5546 28.2248L47.3715 25.0213L45.377 24.5353L44.5817 27.6544C44.0573 27.5267 43.5188 27.4062 42.9837 27.2868L43.7847 24.1471L41.7912 23.6611L40.9738 26.8635C40.5398 26.7669 40.1137 26.6714 39.7001 26.5709L39.7024 26.5609L36.9518 25.8894L36.4212 27.9721C36.4212 27.9721 37.901 28.3037 37.8698 28.3242C38.6776 28.5214 38.8236 29.044 38.7992 29.4584L37.8686 33.1079C37.9243 33.1218 37.9965 33.1418 38.076 33.1729C38.0095 33.1568 37.9385 33.139 37.8652 33.1218L36.5609 38.2342C36.4621 38.4741 36.2116 38.834 35.6469 38.6974C35.6668 38.7257 34.1971 38.3436 34.1971 38.3436L33.207 40.5758L35.8025 41.2084C36.2854 41.3267 36.7586 41.4505 37.2244 41.5671L36.399 44.8073L38.3913 45.2933L39.2087 42.0876C39.753 42.232 40.2813 42.3653 40.7982 42.4908L39.9836 45.6815L41.9782 46.1675L42.8036 42.9334C46.2047 43.5627 48.7622 43.3089 49.8387 40.3014C50.7062 37.8799 49.7955 36.483 48.0061 35.5722C49.3093 35.2784 50.2909 34.4403 50.5528 32.7091ZM45.9956 38.9568C45.3793 41.3783 41.209 40.0692 39.8569 39.741L40.9522 35.4483C42.3042 35.7782 46.6398 36.4314 45.9956 38.9568ZM46.6126 32.6741C46.0502 34.8768 42.5792 33.7577 41.4532 33.4833L42.4463 29.59C43.5722 29.8644 47.1983 30.3764 46.6126 32.6741Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_3962_20166" x="-4" y="-3.5" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.580392 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3962_20166"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3962_20166" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3962_20166" x1="45.5625" y1="69.1979" x2="50.6667" y2="2.33333" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7E35"/>
<stop offset="1" stop-color="#FF5C00" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_3962_20166" x1="42.5" y1="10.5" x2="36.375" y2="91.6563" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7235"/>
<stop offset="1" stop-color="#FF5C00" stop-opacity="0"/>
</linearGradient>
</defs>
    </svg>
    </div>
    <div className='absolute top-[20%] left-[70%] animate-pulse'>
    <svg width="32" height="33" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g filter="url(#filter0_d_3962_20166)">
<path d="M42.5 59.5C56.031 59.5 67 48.531 67 35C67 21.469 56.031 10.5 42.5 10.5C28.969 10.5 18 21.469 18 35C18 48.531 28.969 59.5 42.5 59.5Z" fill="url(#paint0_linear_3962_20166)" fill-opacity="0.2"/>
<path d="M42.5 60C56.3071 60 67.5 48.8071 67.5 35C67.5 21.1929 56.3071 10 42.5 10C28.6929 10 17.5 21.1929 17.5 35C17.5 48.8071 28.6929 60 42.5 60Z" stroke="url(#paint1_linear_3962_20166)" stroke-opacity="0.3"/>
</g>
<path d="M42.4143 53.3286C52.5842 53.3286 60.8286 45.0842 60.8286 34.9143C60.8286 24.7444 52.5842 16.5 42.4143 16.5C32.2444 16.5 24 24.7444 24 34.9143C24 45.0842 32.2444 53.3286 42.4143 53.3286Z" fill="#FF7F0A"/>
<path d="M50.5528 32.7091C50.9147 30.3442 49.0729 29.0729 46.5546 28.2248L47.3715 25.0213L45.377 24.5353L44.5817 27.6544C44.0573 27.5267 43.5188 27.4062 42.9837 27.2868L43.7847 24.1471L41.7912 23.6611L40.9738 26.8635C40.5398 26.7669 40.1137 26.6714 39.7001 26.5709L39.7024 26.5609L36.9518 25.8894L36.4212 27.9721C36.4212 27.9721 37.901 28.3037 37.8698 28.3242C38.6776 28.5214 38.8236 29.044 38.7992 29.4584L37.8686 33.1079C37.9243 33.1218 37.9965 33.1418 38.076 33.1729C38.0095 33.1568 37.9385 33.139 37.8652 33.1218L36.5609 38.2342C36.4621 38.4741 36.2116 38.834 35.6469 38.6974C35.6668 38.7257 34.1971 38.3436 34.1971 38.3436L33.207 40.5758L35.8025 41.2084C36.2854 41.3267 36.7586 41.4505 37.2244 41.5671L36.399 44.8073L38.3913 45.2933L39.2087 42.0876C39.753 42.232 40.2813 42.3653 40.7982 42.4908L39.9836 45.6815L41.9782 46.1675L42.8036 42.9334C46.2047 43.5627 48.7622 43.3089 49.8387 40.3014C50.7062 37.8799 49.7955 36.483 48.0061 35.5722C49.3093 35.2784 50.2909 34.4403 50.5528 32.7091ZM45.9956 38.9568C45.3793 41.3783 41.209 40.0692 39.8569 39.741L40.9522 35.4483C42.3042 35.7782 46.6398 36.4314 45.9956 38.9568ZM46.6126 32.6741C46.0502 34.8768 42.5792 33.7577 41.4532 33.4833L42.4463 29.59C43.5722 29.8644 47.1983 30.3764 46.6126 32.6741Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_3962_20166" x="-4" y="-3.5" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.580392 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3962_20166"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3962_20166" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3962_20166" x1="45.5625" y1="69.1979" x2="50.6667" y2="2.33333" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7E35"/>
<stop offset="1" stop-color="#FF5C00" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_3962_20166" x1="42.5" y1="10.5" x2="36.375" y2="91.6563" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7235"/>
<stop offset="1" stop-color="#FF5C00" stop-opacity="0"/>
</linearGradient>
</defs>
    </svg>
    </div>
    </Card>
    <TableData/> 
    </>
  )
}

export default Index