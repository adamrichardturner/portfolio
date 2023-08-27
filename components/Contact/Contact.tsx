import { FunctionComponent } from 'react'
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faSquareGithub,
  faSquareXTwitter,
  faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Contact: FunctionComponent<{}> = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section
      id='contact'
      className='bg-cream min-h-screen text-body pt-16 pb-16 mx-auto flex flex-col items-center justify-center'
    >
      <div className='container'>
        <div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-3xl md:text-1xl font-bold leading-none pb-8'>
              Contact
            </h2>
            <div className='bg-secondary py-1 px-5 rounded-xl'></div>
            <p className='mt-4 text-center pb-14'>
              Interested in working together? Fill out the form below and I will
              be in touch soon
            </p>
          </div>
          <div className='bg-white w-full py-8 px-8 rounded-2xl shadow-lg'>
            <ContactForm />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='pt-20 text-lg md:text-1xl font-bold leading-none'>
              Follow me
            </h3>
            <div className='flex pt-4 flex-row space-x-2 pb-6'>
              <a href='mailto:hello@adamrichardturner.dev'>
                <div className='hover:shadow-lg transition-shadow ease-in-out'>
                  <FontAwesomeIcon icon={faSquareEnvelope} className='h-9' />
                </div>
              </a>
              <a
                href='https://www.linkedin.com/in/adamrichardturner88'
                target='_blank'
                rel='noreferrer'
              >
                <div className='hover:shadow-lg transition-shadow ease-in-out'>
                  <FontAwesomeIcon icon={faLinkedin} className='h-9' />
                </div>
              </a>
              <a
                href='https://github.com/adamrichardturner'
                target='_blank'
                rel='noreferrer'
              >
                <div className='hover:shadow-lg transition-shadow ease-in-out'>
                  <FontAwesomeIcon icon={faSquareGithub} className='h-9' />
                </div>
              </a>
              <a
                href='https://twitter.com/csturner88'
                target='_blank'
                rel='noreferrer'
              >
                <div className='hover:shadow-lg transition-shadow ease-in-out'>
                  <FontAwesomeIcon icon={faSquareXTwitter} className='h-9' />
                </div>
              </a>
              <a
                href='https://www.youtube.com/@codefullstack'
                target='_blank'
                rel='noreferrer'
              >
                <div className='hover:shadow-lg transition-shadow ease-in-out'>
                  <FontAwesomeIcon icon={faSquareYoutube} className='h-9' />
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700' />
      </div>
      <footer className='pt-4 text-sm'>
        © Copyright {currentYear}. Made by Adam Turner
      </footer>
    </section>
  )
}

export default Contact
