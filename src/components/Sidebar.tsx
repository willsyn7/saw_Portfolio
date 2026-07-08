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
    </aside>
  )
}
