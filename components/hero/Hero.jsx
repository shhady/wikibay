import React from 'react'
import { Search } from 'lucide-react'
export default function Hero() {
  return (
<div className="h-full md:h-[50vh] rounded-xl bg-[url('/hero-bg-2.jpg')] bg-cover bg-no-repeat bg-center m-2 text-white grid md:grid-cols-2 justify-center items-center">
    <div className='px-12 py-4'>
    <h1 className="text-4xl font-bold mb-4">Empower Your Business with Tailored Solutions</h1>
      <p className="text-xl">Choose confidently, succeed decisively.</p>
    </div>
    <div className=' p-12 '>
        <div className='gap-1 flex justify-center items-center rounded-xl bg-white text-black'> 
        <Search className='px-1'/>
        <input type="text" placeholder='Search software, categories ...' className='rounded-r-xl p-2 h-full w-full'></input>
        </div>
      
    </div>
    </div>
  )
}
