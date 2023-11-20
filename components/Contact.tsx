import React from 'react'

const Contact = () => {
    // use zapier or similar to send to spreadsheet


    return (
        <>
        {/* // <div name='contact' className='w-full h-screen bg-[#CBD0D3] flex justify-center items-center p-4'> */}
        <div id={'contact'} className='w-full h-screen bg-[#CBD0D3] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/406172aa-f719-485f-8999-1d24cfee8981" className='flex flex-col max-w-[600px] w-full'>            
                <div className='grid grid-cols-1 pb-8 mx-auto flex items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9CC9B7] text-[#393E41]'>Contact</p>
                    {/* <p className='text-[#393E41] py-4'>// Submit the form below or shoot me an email - ianshaw93@gmail.com</p> */}
                    {/* <p className='text-[#393E41] py-4'>// - ianshaw93@gmail.com</p> */}
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required/>
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Message' required></textarea>
                    <button className='text-[#393E41] border-2 hover:bg-[#9CC9B7] hover:border-[#9CC9B7] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>
                            Submit Form
                    </button>
            </form> 
        </div>
    </>
      )
}

export default Contact