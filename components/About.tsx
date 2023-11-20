import Image from 'next/image'
import React from 'react'
import headshot from '../public/team/gradballSquare.jpg'

const About = () => {
  return (
    <div id={'about'} className='w-full h-screen'>
    {/* <div name='about' className='w-full h-screen'> */}
        <div className='px-4'>
            <p className='text-4xl text-left font-bold inline border-b-4 border-[#9CC9B7]'>About Me</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right'>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2'>
                <div className='items-center py-8 md-px-12 px-2'>
                    <Image
                            src={headshot}
                            alt="Founder Headshot"
                            width={500}
                            className='rounded-full'
                            />
               
                </div>
                <div className='space-y-1 sm:space-y-8'>
                    <p>Hi I'm Ian, the founder of Boost. <span className='sm:block hidden'>Commercially, I have created websites and web based applications in small teams. </span>My experience includes working on the mobile app and websites for a Health Company and being the lead Software Engineer for a Fire Engineering Company.</p>
                    <div className='sm:visible invisible'>
                        <br />
                        <p>We at boost provide the digital platform for businesses to reach their goals.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About