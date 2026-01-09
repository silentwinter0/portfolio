import './Projects.css'
import ProjectCard from './ProjectCard'
import pic1 from '../assets/images/projects/comms/game2.png'
import pic2 from '../assets/images/projects/portfoliosite/figma.png'
import pic3 from '../assets/images/projects/simplescheduler/scheduler.png'
import pic4 from '../assets/images/projects/transitdatabase/uml.png'

export default function Projects() {
  return (
    <section className="projects">
      <div className="projectpile">
        <div className="top-projects">
          <ProjectCard
            imageSrc={pic1}
            title="Teaching digital novices to 
            recognize AI images"
            subtitle={<>
              How can we raise awareness about misleading AI images? 
              This communication campaign strategy and proof-of-concept game was
              presented to and praised by real professionals for 
              its clear strategy, noting it could be put to use as-is. 
              <br/><br/>
              Worked on campaign design & strategy formulation, research, 
              and content creation.
            </>}
            tech="Responsible for proof-of-concept design and 
            implementation with React."
            date="January 2025 – May 2025"
            link="./projects/communication-campaign"
          />
          <ProjectCard
            imageSrc={pic2}
            title="A portfolio page with React"
            subtitle={<>
              This site was built by me using React and CSS. Initially 
              starting out as a simple HTML/CSS-site completed as coursework, I 
              have since reworked the website from the ground to better showcase 
              my current skills and expertise.
              <br/><br/>
              Completed over the course of a few weeks.
            </>}
            tech="Developed with React, CSS"
            date="December 2025 – January 2026"
            link="./projects/portfoliosite"
          />
          <ProjectCard
            imageSrc={pic3}
            imagePosition='left'
            title="Command-line Scheduler in C"
            subtitle={<>
              Simple scheduling system for scheduling one-hour meeting 
              times. <br/><br/>
              Written from scratch in C as a console application under a strict 
              timeframe, featuring file I/O to save and load schedules.
            </>}
            tech="Written in C"
            date="March 2025"
            link="./projects/c-scheduler"
          />
          <ProjectCard
            imageSrc={pic4}
            title="Transit database project"
            subtitle={<>
              This pair course project involved planning a comprehensive 
              database system for a transit company, involving interactions 
              between vehicles, lines, schedules, tickets, stops and shifts.
              <br/><br/>
              The project was completed over the course of a few weeks, and was
              implemented for testing in SQLite.
            </>}
            tech="UML, SQLite"
            date="April 2025 – May 2025"
            link="./projects/transitdatabase"
          />
        </div>
      </div>
    </section>
  )
}
