import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useRouter } from 'next/router';


// Land more clients, improve effiency  
"Elevate Your Fitness Business with AI: More Time, More Clients, More Impact"
const Hero = () => {
  const logoSize = 300
  const router = useRouter();

  const navigateToForm = () => {
		router.push('/form');
		};
  return (
    <div className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          {/* <h1 className='text-4xl sm:text-6xl font-bold'>Elevate Your Fitness Business with AI:</h1> */}
          <h1 className='text-4xl sm:text-4xl font-bold'>Elevate Your Fitness Business with AI:</h1>
          {/* <h2 className='text-4xl sm:text-6xl font-bold text-[#CBD0D3]'>More Time, More Clients, More Impact</h2> */}
          {/* <h2 className='text-2xl sm:text-2xl font-bold text-[#CBD0D3]'>Professional Video Editing:</h2> */}
          {/* Unlock a new level of efficiency with our two-pronged AI solution: */}

          Elevate your client interaction with our state-of-the-art automated engagement system. Tailored to your business needs, this tool effortlessly manages and nurtures leads through personalized, automated responses. Imagine having a virtual assistant who is always on, guiding your potential clients towards the right fitness solutions, all while you focus on what you do best - transforming lives.
          {/* <h2 className='text-2xl sm:text-2xl font-bold text-[#CBD0D3]'>Streamlined Communication:</h2>
          Boost your sales and client retention rates. Manage and automate all your messages and emails effortlessly in one place. */}

          <p className='py-4 max-w-[700px]'>6 week Beta Program Participaction Fee: $50</p>
          
          <div>
          <button 
            onClick={() => {
              router.push('/form');
            }} 
            className='text-black hover:text-white border-2 px-10 py-6 my-6 flex items-center bg-[#9CC9B7]'>
            Join Our Beta Program  <HiArrowNarrowRight />
          </button>
        </div>
        </div>
    </div>
  )
}

export default Hero