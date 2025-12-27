import './FrontPage.css'
import MenuButton from './components/MenuButton'

function FrontPage() {

  return (
    <div className="background">
      <nav>
        <MenuButton />
      </nav>
      <div className="card">
        <h1>Sami Manner</h1>
        <p>
          I'm a undergraduate engineering student, <br/>
          studying Information Networks at Aalto University.
          <br />Lorem ipsum please write <br />
          something reasonable here.
        </p>
      </div>
      <div className="card">
        <h1>Projects</h1>
        <p>
          Lorem ipsum etc.
        </p>
        <div className="top-projects" id="more-top-projects">
          <div className="topprojectcontainer">
              <div>
                  <img src="./images/pic2.jpg" alt="An illustrative image showcasing the general style of the project."/>
              </div>
              <div className="projecttext">
                  <h2>Project Title</h2>
                  <h3>Hey I fixed it!</h3>
                  <p>C++, my bare hands</p>
                  <p>December 2019</p>
                  <a href="./projects/project1.html">Read more</a>
              </div>
          </div>
          <div className="topprojectcontainer">
              <div>
                  <img src="./images/pic1.jpg" alt="An illustrative image showcasing the general style of the project."/>
              </div>
              <div className="projecttext">
                  <h2>Project Title</h2>
                  <h3>The Internet! It's back!</h3>
                  <p>COBOL (unfortunately)</p>
                  <p>January 2025</p>
                  <a href="./projects/project1.html">Read more</a>
              </div>
          </div>
      </div>
      </div>
      <div className="card">
        <h1>Other work</h1>
        <p>
          Lorem ipsum etc.
        </p>
      </div>
      <section id="about" className="about flex flex-col items-center justify-center pt-32 pb-32 text-center">
        <h1 className="text-4xl font-semibold">ABOUT ME</h1>
        <div className="selfportrait border-2 border-white bg-[#181A1E] w-3/5 md:w-1/3 mx-auto my-6 overflow-hidden">
          <img src="./images/pic3.jpg" alt="A picture of the website author, myself." className="w-full h-auto object-cover" />
        </div>
        <p className="bigtext text-2xl font-medium">programmer/designer</p>
        <p className="mt-2">something lorem ipsum.</p>
      </section>
    </div>
  )
}

export default FrontPage
