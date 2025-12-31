import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import OtherWork from '../components/OtherWork.jsx'
import Article from '../components/Article.jsx'

function FrontPage() {

  return (
    <div className="background">
      <Header />
      <div className="card">
        <h1>Sami Manner</h1>
        <p className='bigtext'>
          I'm an undergraduate engineering student, studying Information 
          Networks at Aalto University. Lorem ipsum please write something 
          reasonable here.
        </p>
      </div>
      <div className="card">
        <h1>Projects</h1>
        <p>
          Lorem ipsum etc.
        </p>
        <Projects />
        <h1>Studies</h1>
            <Article
              imageSrc=""
              title="Information Networks, Bachelor of Science student at Aalto University"
              subtitle="2024–present"
              content="TODO"
              link="./"
              />
        <h1>Other work</h1>
        <OtherWork />
        <h1>Work Experience</h1>
            <Article
              imageSrc=""
              title="X"
              subtitle="2023–2024"
              content="TODO"
              link="./"
              />
            <Article
              imageSrc=""
              title="X"
              subtitle="2023–2024"
              content="TODO"
              link="./"
              />
      </div>
      <About />
      <Footer />
    </div>
  )
}

export default FrontPage
