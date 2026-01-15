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
          />
          <OtherCard
            imageSrc=""
            title="Essays in Software Engineering"
            subtitle="Essays about common pitfalls and best practices in the 
            field of software engineering. Includes topics like software design,
            architecture and requirements engineering. Received full points for
            all essays."
            tech=""
            date="September 2025 – December 2025"
            link="/projects/softeng-essays"
            linkText="Coming soon!"
          />
          {/*
          ** Future Stuff **
          <OtherCard
            imageSrc=""
            title="Online recipe parser and viewer"
            subtitle="A small personal project for parsing online recipes to 
            JSON, then displaying them with a custom, cross-platform user 
            interface."
            tech="TBD – Experimenting"
            date="Working on it!"
            link="/projects/coming-soon"
            linkText='Coming soon!'
          />
          */}
        </div>
      </div>
    </section>
  )
}
