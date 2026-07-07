import { skills } from '../data/skills'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleSkill } from '../store/projectsSlice'

export default function SkillButtons() {
  const dispatch = useAppDispatch()
  const selectedSkills = useAppSelector((state) => state.projects.selectedSkills)

  return (
    <div className="core-skills">
      <h2>Core Skills</h2>
      <div className="skills-row">
        {skills.map((skill) => {
          const isSelected = selectedSkills.includes(skill)
          return (
            <button
              key={skill}
              type="button"
              className={'skill-button' + (isSelected ? ' skill-button--active' : '')}
              aria-pressed={isSelected}
              onClick={() => dispatch(toggleSkill(skill))}
            >
              <span className="coffee-cup-wrap" aria-hidden="true">
                <span className="steam" />
                <span className="coffee-handle" />
                <span className="coffee-cup">
                  <span className="coffee-fill" />
                </span>
              </span>
              <span className="skill-label">{skill}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
