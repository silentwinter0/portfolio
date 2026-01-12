import './Projects.css'
import OtherCard from './OtherCard'

export default function OtherWork() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <OtherCard
            imageSrc=""
            title="Iterative UX/UI design plan for developing a smartwatch GUI"
            subtitle=""
            tech=""
            date="November 2025"
            link="/projects/UIUX"
            linkText='Coming soon!'
          />
          {/*
          ** Future stuff **
          <OtherCard
            imageSrc=""
            title="Essays in Software Engineering"
            subtitle=""
            tech=""
            date="2025"
            link="/projects/softeng-essays"
          />
          */}
        </div>
      </div>
    </section>
  )
}
