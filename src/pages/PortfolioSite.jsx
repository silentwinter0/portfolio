import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'
import { useState } from 'react'
import Hero from '../components/Hero.jsx'

// Pics
import pic1 from '../assets/images/projects/portfoliosite/figma.png'

function PortfolioSite() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="background">    
      <Hero />
      <Header />
      <div className="card">
        <h1>Portfolio site in React</h1>
        <div className="project-date">December 2025 – January 2026</div>
        <p className='project-bigtext'>
          <br/>
            This site was built by me using React and CSS. Initially 
            starting out as a simple HTML/CSS-site completed as coursework, I 
            have since reworked the website from the ground to better showcase 
            my current skills and expertise.
        </p>
      </div>
      <div className='card article-container'>
        <Article
          title='The portfolio site'
          subtitle=''
          content={<>
            <figure className='inline-article-figure'>
              <img
              src={pic1}
              alt='Social post mockup'
              className='inline-article-image'
              />
              <figcaption className='inline-article-caption'>My original website
                 design plan from January 2025, including a moodboard for design
                 inspiration.</figcaption>
            </figure>
            <br/>
            This is my portfolio site—that is, you're reading this text on the
            "final product", the completed website. I created the initial design
            of the website for a course in the basics of web publishing in 
            January 2025. This initial plan was also implemented with basic HTML,
            CSS and some JavaScript elements.
            <br/><br/>
            Now, I've rewritten the page with React, improved the structure 
            and styling for better visual appeal and readability, and added a 
            simple background animation. Most of the CSS was imported, through 
            things like font sizes, margins and especially picture placement and
            styling were improved significantly.
            <br/><br/>
            The design was conceived with a few basic concepts. First, I wanted 
            to make something a little atypical, but still visually pleasing.
            Second, I wanted to use a simple color palette, so that project
            images take less attention, and third, use of color should draw the
            attention of the viewer effectively. I did this with the "Hero" 
            animation you're seeing in the background, and by reserving the deep
            blue color for drawing attention to the projects.
            <br/><br/>
            Finally, the site should be easily expandable as I work on more and
            more projects. I've managed to build the components and templates
            I need to easily add new pages, projects and articles. Adding a new 
            page is easy enough that I can now add every project I deem worthy
            of showing off in a few minutes—though of course writing text takes 
            some time.
            <br/><br/>
            More projects to come!
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioSite
