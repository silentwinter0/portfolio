import './ProjectContainer.css'
import ProjectCard from './ProjectCard'

export default function ProjectContainer() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <ProjectCard
            imageSrc=""
            title="Communication Campaign – Teaching to recognize AI images"
            subtitle="How can we raise awareness about misleading AI images? 
            This campaign strategy and proof-of-concept game was praised by real
             professionals in the field of communications, whom praised its 
             clear strategy and noted it could be put to use as-is."
            tech="Campaign design & strategy, research, content creation. 
            Responsible for POC design and implementation (React/CSS)"
            date="January 2025 – May 2025"
            link="./projects/communication-campaign"
          />
          <ProjectCard
            imageSrc=""
            title="C Scheduler"
            subtitle="Simple scheduling system for scheduling one-hour meeting 
            times. Written from scratch in C as a console application, featuring
             file I/O to save and load schedules."
            tech="Written in C"
            date="March 2025"
            link="./projects/c-scheduler"
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
