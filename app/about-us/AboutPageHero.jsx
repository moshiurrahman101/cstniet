import React from 'react'

function AboutPageHero() {
  return (
    <div className='aboutPageHero h-[70vh] md:h-[80vh] sm:h-[75vh] flex items-center justify-center'>
        <div className='lg:w-[650px] md:w-[400px] sm:w-[300px] bg-slate-900 p-10 md:p-8 sm:p-5 text-center opacity-80 rounded-md'>
            <h1 className='text-[48px] md:text-[32px] sm:text-[24px] font-bold text-white'>ABOUT US</h1>
            <p className='text-slate-100'>Department of Computer Science & Technology</p>
        </div>
    </div>
  )
}

export default AboutPageHero