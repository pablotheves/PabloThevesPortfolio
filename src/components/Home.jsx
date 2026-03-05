import React from 'react'
import { BiLogoLinkedin, BiLogoWhatsapp, BiLogoGithub } from 'react-icons/bi'

const Home = () => {
  return (
    <div id='home' className='min-h-screen flex items-center justify-center'>
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img
          src="/image.jpg"
          alt="Pablo Theves"
          className='w-[250px] sm:w-[300px] rounded-full shadow-lg'
        />

        <div className="space-y-1 sm:space-y-3">
          <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>
            Pablo Theves
          </h1>

          <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>
            Java/Web Developer
          </h3>

          <p className='max-w-[500px] text-sm text-gray-500'>
            Student of Analysis and System Development at IFSUL, passionate about technology and software development. I am always seeking new challenges and opportunities to expand my knowledge and skills.
          </p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/pablotheves" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full 
          border-2 border-transparent bg-teal-600 p-2 text-white 
          transition-all duration-200 hover:scale-110 hover:border-teal-600
          hover:bg-white hover:text-teal-600 md:h-12 md:w-12"/>
          </a>
          
          <a href="https://www.linkedin.com/in/pablotheves1" target="_blank" rel="noopener noreferrer">
            <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full 
          border-2 border-transparent bg-teal-600 p-2 text-white 
          transition-all duration-200 hover:scale-110 hover:border-teal-600 
          hover:bg-white hover:text-teal-600 md:h-12 md:w-12"/>
          </a>
          
          <a href="https://wa.link/z1zq4f" target="_blank" rel="noopener noreferrer">
          <BiLogoWhatsapp className="h-10 w-10 cursor-pointer rounded-full 
          border-2 border-transparent bg-teal-600 p-2 text-white 
          transition-all duration-200 hover:scale-110 hover:border-teal-600
           hover:bg-white hover:text-teal-600 md:h-12 md:w-12"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
