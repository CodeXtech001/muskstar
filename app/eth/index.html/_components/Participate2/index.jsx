"use client"
import { Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components/ui/card'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Index2 from '../Index2'

function Participate2() {
    const [show, setShow] = useState(false)
  return (
    <>
    <div className='w-full px-8'>
    {show ? <div onClick={()=> setShow(false) } className=' mb-4 text-[#8E939D] hidden md:flex w-[150px] cursor-pointer'><ChevronLeft className='text-[#D8D9DB]'/>read Rules</div> :
    <Link href="/" className=' mb-4 text-[#8E939D] hidden md:flex w-[150px]'><ChevronLeft className='text-[#D8D9DB]'/>Back</Link>}
    {show === false ?(<>
        <Card className="bg-[#F3F3F3]">
        <CardHeader>
        <CardTitle className="text-[#30374F]">Rules</CardTitle>
        </CardHeader>
        <CardContent>
            <p className='text-[#30374F]'>In order to receive BTC from our giveaway - you have to send BTC & we will send back to you double the amount, instantly! This is to avoid bad actors exploiting our giveaway.</p>
        </CardContent>
        <CardFooter className="w-full flex flex-col items-start gap-4">
            <p className='bg-[#F4E6E6] p-2 rounded-md text-[#1D1D1D] font-semibold md:hidden'>IMPORTANT</p>
            <p className='bg-white p-4 rounded-md text-[#30374F] font-semibold'> <span className=' bg-[#F4E6E6] p-2 rounded-md text-[#1D1D1D] hidden md:inline mr-4'>IMPORTANT</span> You can only participate ONCE!</p>
        </CardFooter>
        </Card>
        <Button className="w-full mt-4 font-semibold" onClick= {()=>setShow(true)}>To participate</Button> 
        </>
    ): (
         <Index2/>
     )
    }
    </div>
    </>
  )}

export default Participate2