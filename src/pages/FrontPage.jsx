import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import OtherWork from '../components/OtherWork.jsx'
import Article from '../components/Article.jsx'
import selfPortrait from '../assets/images/pic1.jpg'
import Hero from '../components/Hero.jsx'

function FrontPage() {

  return (
    <div className="background">
      <Hero />
      <Header />
      <div className='introduction-box'>
        <div className="introduction-text">
        <h1>Sami Manner</h1>
        <p className='introduction-bigtext'>
          I'm an undergraduate <b>engineering student</b>, studying technology, 
          business and society in the <b>Information Networks</b> programme at 
          <b> Aalto University</b>.
          <br/><br/>
          I'm interested in product development,
          data science, UI/UX design and achieving strategic goals through 
          projects and campaigns.
        </p>
        </div>
        <div className="introduction-pic">
          <img src={selfPortrait} alt="A picture of myself." />
        </div>
      </div>
      <div className="card article-container" id='projects'>
        <h1>Projects</h1>
        <Projects />
      </div>
      <div className='card article-container' id='other-work'>
        <h1>Other work</h1>
        <OtherWork />
      </div>
      <div className="card article-container" id='education'>
        <h1>Education</h1>
            <Article
              imageSrc=""
              title={<>
                Information Networks, Bachelor of Science
                <br/>
                Aalto University
              </>}
              subtitle={
              <>
                2024 – present
                <br/>
                2nd year (105/180 ECTS)
                <br/>
                4.79 / 5.00 GPA
                <br/><br/>
                Minor in Industrial Engineering and Management (10/20 ECTS)
                <br/>
                Minor in Computer Science (10/20 ECTS)
                <br/><br/>
              </>}
              content={
                <>
                The Information Networks major prepares socially conscious
                IT and business experts. Studies include engineering basics 
                (mathematics, physics and programming), business (e.g. 
                industrial engineering, organizational design and 
                entrepreneurship) and technology (computer science and design), 
                training professionals who master the principles of 
                both IT systems & business and organizational development.
                <br/><br/>
                This major provides the skills I need to a capable product 
                manager, and a developer of new products, services and 
                organizations that utilize information technology.
                
                I chose this major as the interdisciplinary nature of the major
                allows me to explore my interests while developing skills that
                benefit my work across disciplines.
                <br/><br/>
                I have focused my studies in technology, data and business, and 
                I am completing minors in both IEM and CS. I'm working on 
                developing my skills in data science and project development.
                You can see some of my course work in my <a href='./#projects'>
                projects</a> and <a href='./#other-work'>other work</a> above.
                </>
              }
              link="./"
              />
        </div>
      <div className='card article-container' id='work-experience'>
        <h1>Work experience</h1>
          <Article
            imageSrc=""
            title="Substitute teacher in advanced mathematics and sciences, 
              upper secondary school"
            subtitle="August 2024 – present"
            content={
              <>
                Part-time teacher of advanced mathematics and sciences.
                <br/><br/>
                Gained experience in explaining complex concepts clearly, and 
                managing large groups of students.
                <br/><br/>
                Learned to find and apply new methods to effectively teach new 
                concepts to a diverse audience.
              </>
            }
            link="./"
            textAlign='center'
            />
          <Article
            imageSrc=""
            title="Technical & administrative assistant, upper secondary school"
            subtitle="August 2023 – July 2024"
            content={
              <>
                Responsible for maintaining IT systems used by staff and 
                students, and providing administrative assistance
                <br/><br/>
                Improved efficiency of exam system upgrades by effectively 
                reallocating limited resources
                <br/><br/>
                Trained teachers in effective and ergonomic use of modern 
                technology for teaching
                <br/><br/>
                Organized events for student wellbeing, handling logistics
                <br/><br/>
                Contributed to the successful execution of high-profile school 
                events, e.g. involving foreign diplomats and students, promoting 
                the school’s global outreach and reputation
              </>
            }
            link="./"
            textAlign='center'
            />
          <h1>Volunteer work</h1>
            <Article
              imageSrc=""
              title="Academic affairs"
              subtitle=""
              content={
                <>
                  Student representative responsible for the School of Science
                   2026–
                  <br/><br/>
                  Member of advocacy section of Aalto University Student 
                  Union 2026–
                  <br/><br/>
                  <h4>Student representative in administration (AYY / Aalto 
                    University Student Union)
                  </h4>
                  Representative in Information Networks Master's Programme 
                  Committee, 2026–
                  <br/><br/>
                  Deputy representative in Strategic Management Team for 
                  Aalto Design Factory, 2026–
                  <br/><br/>
                  Deputy representative in Information Networks Master's Degree 
                  Programme Committee, 2025
                </>
              }
              link="./"
              textAlign='center'
              />
            <Article
              imageSrc=""
              title="Roles in student organization"
              subtitle="Guild of Information Networks, Athene"
              content={
                <>
                  High school marketing team member 2026–
                  <br/><br/>
                  Songleader disciple 2026–
                  <br/><br/>
                  Tutor for international and master's degree students 2025–
                  <br/><br/>
                  Assistant to Head of Academic Affairs 2025
                </>
              }
              link="./"
              textAlign='center'
              />
      </div>
      <div id='about' />
      <About  />
      <Footer />
    </div>
  )
}

export default FrontPage
