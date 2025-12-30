import './Projects.css'
import ProjectCard from './ProjectCard'

export default function OtherWork() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <ProjectCard
            imageSrc=""
            title="X"
            subtitle=""
            tech=""
            date=""
            link="./"
          />
          <ProjectCard
            imageSrc=""
            title="Y"
            subtitle=""
            tech=""
            date=""
            link="./"
          />
          <ProjectCard
            imageSrc=""
            title="Z"
            subtitle=""
            tech=""
            date=""
            link="./"
          />
        </div>
      </div>
    </section>
  )
}
