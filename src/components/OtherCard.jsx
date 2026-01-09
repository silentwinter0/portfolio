import './ProjectCard.css'
import { ArrowRight } from 'lucide-react'

export default function OtherCard({ imageSrc, title, subtitle, tech, date, link, linkText = 'Read more' }) {
  return (
    <div className="projectcontainer">
      <div>
        {/*<img src={imageSrc} alt={`${title} image`} />*/}
      </div>
      <div className="projecttext">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className="tech-date">
          <p>{tech}</p>
          <p>{date}</p>
        </div>
        <a href={link} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          {linkText} <ArrowRight size={32} />
        </a>
      </div>
    </div>
  )
}
