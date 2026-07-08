import { projects } from '../data/projects'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleExpanded } from '../store/projectsSlice'
import { chunk } from '../utils/chunk'
import ProjectBox from './ProjectBox'
import ProjectDetail from './ProjectDetail'
import SkillButtons from './SkillButtons'

export default function ProjectsSection() {
  const dispatch = useAppDispatch()
  const expandedProjectId = useAppSelector(
    (state) => state.projects.expandedProjectId,
  )
  const selectedSkills = useAppSelector((state) => state.projects.selectedSkills)

  const filteredProjects = selectedSkills.length
    ? projects.filter((p) => p.technologies.some((t) => selectedSkills.includes(t)))
    : projects

  const rows = chunk(filteredProjects, 3)
  const expandedProject = filteredProjects.find((p) => p.id === expandedProjectId)

  return (
    <section className="projects-section" aria-label="Projects">
      <SkillButtons />

      <div className="project-rows">
        {rows.map((row, i) => (
          <div className="project-row" key={i}>
            {row.map((project) => (
              <ProjectBox
                key={project.id}
                project={project}
                expanded={project.id === expandedProjectId}
                onToggle={() => dispatch(toggleExpanded(project.id))}
              />
            ))}
          </div>
        ))}
      </div>

      {expandedProject && <ProjectDetail project={expandedProject} />}
    </section>
  )
}
