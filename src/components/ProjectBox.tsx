import type { Project } from '../data/projects'
import { GitHubIcon } from './icons'

interface ProjectBoxProps {
  project: Project
  expanded: boolean
  onToggle: () => void
}

export default function ProjectBox({ project, expanded, onToggle }: ProjectBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div
      className={'project-box' + (expanded ? ' project-box--active' : '')}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    >
      <a
        className="project-github-link"
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.name} on GitHub`}
        onClick={(e) => e.stopPropagation()}
      >
        <GitHubIcon />
      </a>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="tech-list">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}
