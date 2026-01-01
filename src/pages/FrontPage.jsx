import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import OtherWork from '../components/OtherWork.jsx'
import ArticleWithModal from '../components/ArticleWithModal.jsx'

function FrontPage() {

  return (
    <div className="background">
      <Header />
      <div className="beginning-introduction">
        <h1>Sami Manner</h1>
        <p className='bigtext'>
          I'm an undergraduate engineering student, studying technology, 
          business and society in the Information Networks programme at 
          Aalto University.
          <br/><br/>
          I'm interested in product development,
          data science, UI/UX and achieving strategic goals with projects and 
          campaigns.
        </p>
      </div>
      <div className="card" id='projects'>
        <h1>Projects</h1>
        <p>
          Lorem ipsum etc.
        </p>
        <Projects />
        <h1>Studies</h1>
            <ArticleWithModal
              imageSrc=""
              title="Information Networks, Bachelor of Science student at Aalto University"
              subtitle="2024–present"
              content="TODO"
              link="./"
              modalTitle="Information Networks"
              modalText="ABC"
              />
        <h1>Other work</h1>
        <OtherWork />
        <h1>Work experience</h1>
            <ArticleWithModal
              imageSrc=""
              title="X"
              subtitle="2023–2024"
              content="TODO"
              link="./"
              modalTitle="XYZ"
              modalText="ABC"
              />
            <ArticleWithModal
              imageSrc=""
              title="X"
              subtitle="2023–2024"
              content="TODO"
              link="./"
              modalTitle="XYZ"
              modalText="ABC"
              />
      </div>
      <div id='about' />
      <About  />
      <Footer />
    </div>
  )
}

export default FrontPage
