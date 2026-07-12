import profilePhoto from '../../71RP-kGPKoL._AC_UF894,1000_QL80_.jpg'

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Contact">
      <div className="profile-photo">
        <img src={profilePhoto} alt="Saw Naing" />
      </div>
      <a className="sidebar-email" href="mailto:synwill7777@gmail.com">
        synwill7777@gmail.com
      </a>
      <a className="sidebar-resume" href="/resumes/Naing.Saw.Resume.FS.pdf" download>
        Download Resume (Full Stack)
      </a>
      <a className="sidebar-resume" href="/resumes/Naing.Saw.Resume.BE.pdf" download>
        Download Resume (Backend)
      </a>

      <section className="work-history" aria-labelledby="work-history-title">
        <h2 id="work-history-title">Work History</h2>
        <ol className="work-timeline">
          <li>
            <time dateTime="2024-05">May 2024 - Present</time>
            <h3>Software Engineer</h3>
            <p>OS Analytics</p>
            <span>Open Source Web Analytics Platform</span>
          </li>
        </ol>
      </section>
    </aside>
  )
}
