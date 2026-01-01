import './Projects.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="projects">
      <div className="projectpile">
        <div className="top-projects">
          <ProjectCard
            imageSrc=""
            title="Communication Campaign – Teaching digital novices to 
            recognize AI images"
            subtitle="How can we raise awareness about misleading AI images? 
            This campaign strategy and proof-of-concept game was praised by real
            professionals in the field of communications for its 
            clear strategy, noting it could be put to use as-is."
            tech="Worked on campaign design & strategy formulation, research, 
            content creation. Responsible for proof-of-concept design and 
            implementation with React."
            date="January 2025 – May 2025"
            link="./projects/communication-campaign"
          />
          <ProjectCard
            imageSrc=""
            title="Command-line Scheduler in C"
            subtitle="Simple scheduling system for scheduling one-hour meeting 
            times. Written from scratch in C as a console application, featuring
             file I/O to save and load schedules."
            tech="Written in C"
            date="March 2025"
            link="./projects/c-scheduler"
          />
          <ProjectCard
            imageSrc=""
            title="This portfolio site!"
            subtitle="This site was built by me using React and CSS. Initially 
            starting out as a simple HTML/CSS-site completed as coursework, I 
            have since reworked the website from the ground to better showcase 
            my current skills and expertise."
            tech="Developed with React, CSS"
            date="December 2025"
            link="./"
          />
        </div>
      </div>
    </section>
  )
}
