import './Projects.css'
import OtherCard from './OtherCard'

export default function OtherWork() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <OtherCard
            imageSrc=""
            title="X"
            subtitle=""
            tech=""
            date=""
            link="./"
          />
          <OtherCard
            imageSrc=""
            title="Y"
            subtitle=""
            tech=""
            date=""
            link="./"
          />
          <OtherCard
            imageSrc=""
            title="Z"
            subtitle=""
            tech=""
            date=""
            link="./"
          />
        </div>
      </div>
    </section>
  )
}
