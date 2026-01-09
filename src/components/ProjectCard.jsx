import { ArrowRight } from 'lucide-react'
import './ProjectCard.css'

export default function ProjectCard({ imageSrc,
  title, 
  subtitle, 
  tech, 
  date, 
  link,
  imagePosition = 'center'
  
 }) {
  return (
    <div className="topprojectcontainer">
        <div className="project-image split">
          <img src={imageSrc} alt={`${title} image`} style={{objectPosition: imagePosition}}/>
        </div>
      <div className="project-alltext split">
        <div className="projecttext">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className="tech-date">
            <p>{tech}</p>
            <p>{date}</p>
          </div>
          <a href={link} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Read more <ArrowRight size={32} />
          </a>
        </div>
      </div>
    </div>
  )
}
