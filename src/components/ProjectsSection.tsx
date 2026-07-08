import { projects } from '../data/projects'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleExpanded } from '../store/projectsSlice'
import { chunk } from '../utils/chunk'
import ProjectBox from './ProjectBox'
import ProjectDetail from './ProjectDetail'
import SkillButtons from './SkillButtons'

const skillTechnologyAliases: Record<string, string[]> = {
  AI: ['AWS Bedrock', 'Vertex AI', 'OpenAI'],
  'JS/TS': ['JavaScript', 'TypeScript'],
  NoSQL: ['MongoDB'],
  'React.js': ['React'],
}

const getSkillMatches = (skill: string) => [
  skill,
  ...(skillTechnologyAliases[skill] ?? []),
]

export default function ProjectsSection() {
  const dispatch = useAppDispatch()
  const expandedProjectId = useAppSelector(
    (state) => state.projects.expandedProjectId,
  )
  const selectedSkills = useAppSelector((state) => state.projects.selectedSkills)

  const selectedTechnologies = selectedSkills.flatMap(getSkillMatches)

  const filteredProjects = selectedTechnologies.length
    ? projects.filter((p) => p.technologies.some((t) => selectedTechnologies.includes(t)))
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
