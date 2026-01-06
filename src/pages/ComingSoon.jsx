import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'
import { useState } from 'react'
import Hero from '../components/Hero.jsx'

// Pics
import pic1 from '../assets/images/projects/simplescheduler/scheduler.png'

function ComingSoon() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="background">    
      <Hero />
      <Header />
      <div className="card">
        <h1>Coming soon!</h1>
        <p>Sometime in the future...</p>
        <p className='bigtext'>
          <br/>
            More to come!
        </p>
      </div>
      <div className='card'>
        <Article
          title='Coming soon!'
          subtitle=''
          content={<>
            <br/>
            Please check out my <a href='/#projects'>other projects</a> in the meantime!
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default ComingSoon
