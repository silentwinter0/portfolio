import './Projects.css'
import OtherCard from './OtherCard'

export default function OtherWork() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <OtherCard
            imageSrc=""
            title="Iterative human-centred UX/UI design plan for developing a 
            smartwatch GUI"
            subtitle="This course assignment involved defining a human-centred 
            design process for developing a GUI for a smartwatch, designed for
            the needs of young children."
            tech="Sketches and essays"
            date="November 2025"
            link="/projects/uiux"
            linkText='Read more'
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
