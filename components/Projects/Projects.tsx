import { FC } from 'react'
import PortfolioTabs from '../PortfolioTabs/PortfolioTabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { Element } from 'react-scroll'

const Projects: FC = () => {
  return (
    <Element
      name='projects'
      as='section'
      id='projects'
      className='bg-cream min-h-screen text-body pt-16 pb-16 mx-auto'
    >
      <div className='container'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl md:text-1xl font-bold leading-none pb-8'>
            Projects
          </h2>
          <div className='bg-secondary py-1 px-5 rounded-xl'></div>
          <p className='mt-4 text-center pb-6'>
            Here are a few of my favourite projects.
          </p>
        </div>
        {/* PortfolioTabs component to dynamically display projects */}
        <PortfolioTabs />
        <div className='flex flex-col align-center justify-center text-center py-16'>
          <h3 className='text-primary text-3xl md:text-1xl font-bold leading-none pb-3'>
            GitHub
          </h3>
          <div className='flex justify-center w-full'>
            <a
              href='https://github.com/adamrichardturner'
              target='_blank'
              rel='noreferrer'
            >
              <div className='hover:shadow-lg transition-shadow ease-in-out duration-200 h-16 w-16 p-0 m-0 cursor-pointer'>
                <FontAwesomeIcon icon={faSquareGithub} className='h-full' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Projects
