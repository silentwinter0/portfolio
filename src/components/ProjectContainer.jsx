import './ProjectContainer.css'
import ProjectCard from './ProjectCard'

export default function ProjectContainer() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <ProjectCard
            imageSrc=""
            title="Project Title"
            subtitle="I broke the internet..."
            tech="C++, my bare hands"
            date="December 2019"
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
