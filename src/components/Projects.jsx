import './Projects.css'
import ProjectCard from './ProjectCard'
import pic1 from '../assets/images/projects/comms/game2.png'
import pic2 from '../assets/images/projects/simplescheduler/scheduler.png'
import pic3 from '../assets/images/projects/comms/game2.png'

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
            imageSrc={pic3}
            title="This portfolio site!"
            subtitle={<>
              This site was built by me using React and CSS. Initially 
              starting out as a simple HTML/CSS-site completed as coursework, I 
              have since reworked the website from the ground to better showcase 
              my current skills and expertise.
            </>}
            tech="Developed with React, CSS"
            date="December 2025"
            link="./"
          />
        </div>
      </div>
    </section>
  )
}
