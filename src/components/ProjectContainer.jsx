import './ProjectContainer.css'

export default function ProjectContainer() {
  return (
    <section className="projects" id="projects">
      <div className="projectpile">
        <div className="top-projects">
          <div className="topprojectcontainer">
            <div>
              <img src="./images/pic1.jpg" alt="Project image" />
            </div>
            <div className="projecttext">
              <h2>Project Title</h2>
              <h3>I broke the internet...</h3>
              <p>C++, my bare hands</p>
              <p>December 2019</p>
              <a href="./">Read more</a>
            </div>
          </div>
          <div className="topprojectcontainer">
            <div>
              <img src="./images/pic2.jpg" alt="Project image" />
            </div>
            <div className="projecttext">
              <h2>Project Title</h2>
              <h3>Lorem ipsum, etc.</h3>
              <p>COBOL (unfortunately)</p>
              <p>January 2025</p>
              <a href="./">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
