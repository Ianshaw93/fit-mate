import React from 'react'
import butcher_image from '../public/screenshots/butchers.png'
import EasyBanc from '../public/screenshots/easyBancSquare.png'

const Work = () => {
  return (
    // <div name='work' className='w-full md:h-screen'>
    // <div id={'work'} className='w-full md:h-screen'>
    <div id={'work'} className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#9CC9B7]'>Work</p>
                
                <p> <br />// Check out some of our work <br /></p>
            </div>
{/* TODO: change to dynamically add projects - perhaps auto pull from github pinned? */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                style={{ 
                    backgroundImage: `url(${butcher_image.src})`, 
                    width: '100%', 
                    // height: '100%' 
                }}

                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl fond-bold text-black tracking-wider'>
Butchers' Ecommerce Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://butchers.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white'>Demo</button>  
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{ 
                    backgroundImage: `url(${EasyBanc.src})`, 
                    width: '100%', 
                    // height: '100%' 
                }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl fond-bold text-black tracking-wider'>
Banking Facial Recognition App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.youtube.com/watch?v=X5m8h8OIUds&ab_channel=ShawOnTech'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white '>Demo</button>  
                            </a>
                            {/* <br/> */}
                            {/* <a href='https://github.com/Ianshaw93/EasyBanc'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white '>Code</button>  
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Work