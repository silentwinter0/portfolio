import './Projects.css'
import OtherCard from './OtherCard'

export default function OtherWork() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <OtherCard
            imageSrc=""
            title="Essays in Software Engineering"
            subtitle=""
            tech=""
            date="2025"
            link="./"
          />
          <OtherCard
            imageSrc=""
            title="Iterative UX/UI design plan for a smartwatch GUI"
            subtitle=""
            tech=""
            date="2025"
            link="./"
          />
        </div>
      </div>
    </section>
  )
}
