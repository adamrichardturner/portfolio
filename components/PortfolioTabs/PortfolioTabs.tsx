import { FC, useState } from 'react'
import dynamic from 'next/dynamic'
import { IProject } from './IProject'
import projectsData from '../../util/projectsData.json'

type TabCategory = 'All' | 'Full Stack' | 'Front End' | 'WordPress'

// Dynamically import ProjectComponent with SSR disabled
const ProjectComponentWithNoSSR = dynamic(
  () => import('../ProjectComponent/ProjectComponent'),
  {
    ssr: false,
  }
)

const PortfolioTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<TabCategory>('All')
  const tabs: TabCategory[] = ['All', 'Front End', 'Full Stack', 'WordPress']

  const filteredProjects: IProject[] = projectsData.filter((project) =>
    activeTab === 'All' ? true : project.category === activeTab
  )

  return (
    <div>
      {/* Desktop Tabs */}
      <div className='flex py-4 pl-0 space-x-2'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-3 text-xxs xs:text-sm shadow-md hover:shadow-lg leading-none font-medium rounded-md focus:outline-none ${
              activeTab === tab
                ? 'bg-secondary text-black'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {filteredProjects.map((project) => (
          <ProjectComponentWithNoSSR key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default PortfolioTabs
