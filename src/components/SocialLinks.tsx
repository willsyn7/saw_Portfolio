import { GitHubIcon, LinkedInIcon } from './icons'

const links = [
  { label: 'GitHub', href: 'https://github.com/willsyn7', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saw-naing/', Icon: LinkedInIcon },
]

export default function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social links">
      {links.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
          <Icon />
        </a>
      ))}
    </nav>
  )
}
