import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const HomeComponent = () => {
return (
    <div id='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
 <div className='w-screen max-auto px-8 flex flex-col justify-center h-full'>
<p className="text-[#AD5C51]"> Hi, my name is</p>
<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Bipul Prasai</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FullStack Developer</h2>
<div>
    <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-[#AD5C51] hover:border-[#AD5C51]'>View Works <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/></span></button>
</div>
 </div>
    </div>
  )
}

export default HomeComponent;