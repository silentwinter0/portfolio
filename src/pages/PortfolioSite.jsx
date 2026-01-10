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
          title='Coming soon!'
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
            Lorem ipsum
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioSite
