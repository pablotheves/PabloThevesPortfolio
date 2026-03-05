import React from 'react'

const Projects = () => {
  // Dados dos projetos extraídos do seu currículo e repositórios
  const projectsData = [
    {
      title: "Francisco Gardener",
      stack: "Logic / Web Development",
      description: "Personal project focused on implementing specific business logic and interactive features.",
      link: "https://github.com/pablotheves/Francisco-Jardineiro"
    },
    {
      title: "JavaScript Exercises",
      stack: "JavaScript / ES6",
      description: "Collection of exercises focused on web logic, fundamental programming concepts, and data structures.",
      link: "https://github.com/pablotheves/exercicioJs"
    },
    {
      title: "FarmaData",
      stack: "Kotlin / Android / ML Kit",
      description: "1st place at the 4th Venâncio Aires Hackathon. Smart management solution for pharmacy expiration dates using OCR.",
      link: "https://github.com/pablotheves/FarmaData"
    },
    {
      title: "Chat do povo",
      stack: "Java Network Project",
      description: "Multi-client chat application using Java Sockets and Multithreading for real-time communication via TCP/IP protocols.",
      link: "https://github.com/pablotheves/Chat-do-povo"
    },
    {
      title: "BlackJack-Game",
      stack: "Java / OOP",
      description: "Java-based game demonstrating complex logic and Object-Oriented Programming principles.",
      link: "https://github.com/pablotheves/BlackJack-Game"
    },
    {
      title: "Holiday Calendar",
      stack: "Java / JavaFX / MySQL",
      description: "Complete desktop application with CRUD functionality and data persistence.",
      link: "https://github.com/pablotheves/Calendario_Feriados"
    }
  ];

  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {projectsData.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50 block"
          >
            <h1 className='text-3xl font-semibold'>{project.title}</h1>
            <h3 className='text-xl text-gray-700'>{project.stack}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects