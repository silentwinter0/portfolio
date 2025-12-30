import './ProjectCard.css'

export default function ProjectCard({ imageSrc, title, subtitle, tech, date, link }) {
  return (
    <div className="topprojectcontainer">
      <div>
        {/*<img src={imageSrc} alt={`${title} image`} />*/}
      </div>
      <div className="projecttext">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{tech}</p>
        <p>{date}</p>
        <a href={link}>Read more {'-->'}</a>
      </div>
    </div>
  )
}
