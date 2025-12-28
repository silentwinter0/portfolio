import './FrontPage.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import ProjectContainer from './components/ProjectContainer'

function FrontPage() {

  return (
    <div className="background">
      <Header />
      <div className="card">
        <h1>Sami Manner</h1>
        <p className='bigtext'>
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
        <ProjectContainer/>
      </div>
      <About />
      <Footer/>
    </div>
  )
}

export default FrontPage
