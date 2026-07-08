import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProjectsSection from './components/ProjectsSection'
import About from './components/About'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        <main>
          <About />
          <ProjectsSection />
        </main>
      </div>
    </div>
  )
}

export default App
