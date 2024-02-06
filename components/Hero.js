import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useRouter } from 'next/router';
import NavComponent from './Navbar';


// Land more clients, improve effiency  
"Elevate Your Fitness Business with AI: More Time, More Clients, More Impact"
const Hero = () => {
  const logoSize = 300
  const router = useRouter();

  const navigateToForm = () => {
		router.push('/form');
		};
  return (
    <div className='w-full'>
        <NavComponent />
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center overflow-y-auto'>
          {/* height 100% */}
          <div className='flex flex-col justify-between h-full'>

          {/* <h1 className='text-4xl sm:text-6xl font-bold'>Elevate Your Fitness Business with AI:</h1> */}
          <h1 className='text-4xl sm:text-4xl font-bold mt-40'>More Clients, More Impact:</h1>
          {/* <h2 className='text-4xl sm:text-6xl font-bold text-[#CBD0D3]'>More Time, More Clients, More Impact</h2> */}
          {/* <h2 className='text-2xl sm:text-2xl font-bold text-[#CBD0D3]'>Professional Video Editing:</h2> */}
          {/* Unlock a new level of efficiency with our two-pronged AI solution: */}

          Never lose a hot lead again with our automatic appointment setter/product seller inbound Instagram persona to qualify and book calls on your calendar. 
          <p className='py-4'>
            Trained on your business's products and services, this tool effortlessly manages and nurtures leads through personalized, automated responses. 
          </p>
          {/* <h2 className='text-2xl sm:text-2xl font-bold text-[#CBD0D3]'>Streamlined Communication:</h2>
          Boost your sales and client retention rates. Manage and automate all your messages and emails effortlessly in one place. */}

          <p className='py-4 max-w-[700px]'>6 week Beta Program Participation Fee: $50</p>
          
          </div>
          <div className='mb-5'>
          <button 
            onClick={() => {
              router.push('/form');
            }} 
            className='text-black hover:text-white border-2 px-10 py-6 my-6 flex items-center bg-[#9CC9B7]'>
            Join Our Beta Program  <HiArrowNarrowRight />
          </button>
          <iframe
            className="w-full aspect-video" 
            // width="560" 
            // height="315" 
            src="https://www.youtube.com/embed/fXZwGMBs5lM?si=2Z4O8dQqZqpwtwVn" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>        
          </div>
        </div>
    </div>
  )
}

export default Hero