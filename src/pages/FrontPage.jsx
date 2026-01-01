import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import OtherWork from '../components/OtherWork.jsx'
import Article from '../components/Article.jsx'
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
            <Article
              imageSrc=""
              title="Substitute teacher in advanced mathematics and sciences, upper secondary school"
              subtitle="August 2024 – present"
              content={
                <>
                  Part-time teacher of advanced mathematics and sciences
                  <br/><br/>
                  Experienced in managing large groups of students and
                  finding methods to effectively teach new concepts to a
                  diverse audience.
                </>
              }
              link="./"
              />
            <Article
              imageSrc=""
              title="Technical & administrative assistant, upper secondary school"
              subtitle="August 2023 – July 2024"
              content={
                <>
                Responsible for maintaining IT systems used by staff and students, and providing administrative assistance
                <br/><br/>
                Improved efficiency of exam system upgrades by effectively 
                reallocating limited resources
                <br/><br/>
                Trained teachers in effective use of modern technology for teaching, improving digital ergonomics
                <br/><br/>
                Organized events for student wellbeing, demonstrating skills in organization and logistics
                <br/><br/>
                Contributed to the successful execution of high-profile school events involving foreign diplomats, demonstrating coordination and communications skills in promoting the school’s global outreach and reputation
                </>
              }
              link="./"
              />
      </div>
      <div id='about' />
      <About  />
      <Footer />
    </div>
  )
}

export default FrontPage
