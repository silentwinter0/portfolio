import './ProjectContainer.css'
import ProjectCard from './ProjectCard'

export default function ProjectContainer() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <ProjectCard
            imageSrc="./images/pic1.jpg"
            title="Project Title"
            subtitle="I broke the internet..."
            tech="C++, my bare hands"
            date="December 2019"
            link="./"
          />
          <ProjectCard
            imageSrc="./images/pic2.jpg"
            title="Project Title"
            subtitle="Lorem ipsum, etc."
            tech="COBOL (unfortunately)"
            date="January 2025"
            link="./"
          />
        </div>
      </div>
    </section>
  )
}
