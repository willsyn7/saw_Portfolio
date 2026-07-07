import { projects } from '../data/projects'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { nextPage, prevPage, toggleExpanded } from '../store/projectsSlice'
import { chunk } from '../utils/chunk'
import ProjectBox from './ProjectBox'
import ProjectDetail from './ProjectDetail'
import SkillButtons from './SkillButtons'

const PAGE_SIZE = 8

export default function ProjectsSection() {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector((state) => state.projects.currentPage)
  const expandedProjectId = useAppSelector(
    (state) => state.projects.expandedProjectId,
  )
  const selectedSkills = useAppSelector((state) => state.projects.selectedSkills)

  const filteredProjects = selectedSkills.length
    ? projects.filter((p) => p.technologies.some((t) => selectedSkills.includes(t)))
    : projects

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE))
  const page = Math.min(currentPage, totalPages)
  const start = (page - 1) * PAGE_SIZE
  const pageProjects = filteredProjects.slice(start, start + PAGE_SIZE)
  const rows = chunk(pageProjects, 3)
  const expandedProject = pageProjects.find((p) => p.id === expandedProjectId)

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

      <div className="pagination">
        <button
          type="button"
          aria-label="Previous page"
          disabled={page === 1}
          onClick={() => dispatch(prevPage())}
        >
          ←
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          type="button"
          aria-label="Next page"
          disabled={page === totalPages}
          onClick={() => dispatch(nextPage())}
        >
          →
        </button>
      </div>
    </section>
  )
}
