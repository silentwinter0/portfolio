import './ProjectContainer.css'
import ProjectCard from './ProjectCard'

export default function ProjectContainer() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <ProjectCard
            imageSrc=""
            title="Societal Campaign Project"
            subtitle="How can we raise awareness about misleading AI images? This project was praised by real professionals in the field of communications."
            tech="Campaign design & strategy, research, web design (React/CSS)"
            date="January 2025 – May 2025"
            link="./"
          />
          <ProjectCard
            imageSrc=""
            title="Project Title"
            subtitle="Lorem ipsum, etc."
            tech="COBOL (unfortunately)"
            date="January 2025"
            link="./"
          />
          <ProjectCard
            imageSrc=""
            title="Project Title"
            subtitle="Testing wider layout"
            tech="React, CSS"
            date="March 2024"
            link="./"
          />
          <ProjectCard
            imageSrc=""
            title="Project Title"
            subtitle="Another test card"
            tech="HTML, CSS"
            date="April 2024"
            link="./"
          />
          <ProjectCard
            imageSrc=""
            title="Project Title"
            subtitle="Testing wider layout"
            tech="React, CSS"
            date="March 2024"
            link="./"
          />
          <ProjectCard
            imageSrc=""
            title="Project Title"
            subtitle="Another test card"
            tech="HTML, CSS"
            date="April 2024"
            link="./"
          />
        </div>
      </div>
    </section>
  )
}
