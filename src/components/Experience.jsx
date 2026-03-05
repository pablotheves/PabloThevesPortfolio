import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen
     w-full flex-col items-center justify-center gap-20 
     p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experience</h1>

      <div className="flex flex-warp gap-0 
    md:flex-nowrap md:gap-10">

        <div className="flex-1">


          <div className="relative space-y-1 border-l-2 p-8 text-left">

            <h3 className='text-xl font-semibold md:text-2xl'>Experience 1</h3>
            <p className='font-light text-lg text-gray-600'>Hackathon VenÂncio Aires</p>
            <p className='text-sm text-gray-600'>1st Place at the 4th Venâncio Aires Hackathon.
              Developed an MVP for pharmacy management using OCR for automated expiration date tracking.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-600'></span>

          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">

            <h3 className='text-xl font-semibold md:text-2xl'>Experience 2</h3>
            <p className='font-light text-lg text-gray-600'>Receptionist / Digital Support</p>
            <p className='text-sm text-gray-600'>Direct customer service focusing on digital inclusion and
              support for banking applications. Experience in conflict resolution, digital security, and fraud prevention.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-600'></span>

          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">

            <h3 className='text-xl font-semibold md:text-2xl'>Experience 3</h3>
            <p className='font-light text-lg text-gray-600'>Technical Intern</p>
            <p className='text-sm text-gray-600'>Technical and administrative support,
              ensuring data integrity during voter registration and public service flow.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-600'></span>

          </div>



        </div>

      </div>
    </div>
  )
}

export default Experience
