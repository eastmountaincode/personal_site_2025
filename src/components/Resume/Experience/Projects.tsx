import ProjectCard from './ProjectCard'
import projectsData from '../../../data/projects.json'
import { ProjectsData } from '../../../types/projects'

function Projects() {
  const { projects } = projectsData as ProjectsData

  return (
    <div>
      <h2 className="text-2xl mb-6">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            type={project.type}
            dateText={project.dateText}
            description={project.description}
            tags={project.tags}
            link={project.link}
            images={project.images}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
