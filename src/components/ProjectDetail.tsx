import type { Project } from '../data/projects'

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="project-detail">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="tech-list">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noreferrer">
        View project
      </a>
    </div>
  )
}
