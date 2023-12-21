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
          <h1 className='text-4xl sm:text-4xl font-bold'>More Clients, More Impact:</h1>
          {/* <h2 className='text-4xl sm:text-6xl font-bold text-[#CBD0D3]'>More Time, More Clients, More Impact</h2> */}
          {/* <h2 className='text-2xl sm:text-2xl font-bold text-[#CBD0D3]'>Professional Video Editing:</h2> */}
          {/* Unlock a new level of efficiency with our two-pronged AI solution: */}

          Never lose a hot lead again with our automatic appointment setter/product seller inbound Instagram persona to qualify and book calls on your calendar. 
          <p className='py-4'>
            Tailored to your business needs, this tool effortlessly manages and nurtures leads through personalized, automated responses. 
          </p>
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