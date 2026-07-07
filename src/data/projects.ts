import { skills } from './skills'

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  link: string
}

// Placeholder entries — replace name/description/technologies/link with real project details.
export const projects: Project[] = Array.from({ length: 14 }, (_, i) => {
  const n = i + 1
  return {
    id: `project-${n}`,
    name: `Project ${n}`,
    description: 'Placeholder description — replace with a short project summary.',
    technologies: [skills[i % skills.length], skills[(i + 3) % skills.length]],
    link: 'https://github.com/',
  }
})
