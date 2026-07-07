import { GitHubIcon, LinkedInIcon } from './icons'

// Placeholder URLs — replace with your real profiles.
const links = [
  { label: 'GitHub', href: 'https://github.com/', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/', Icon: LinkedInIcon },
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
