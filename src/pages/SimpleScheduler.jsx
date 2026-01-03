import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'
import { useState } from 'react'

// Pics
import pic1 from '../assets/images/projects/simplescheduler/scheduler.png'

function SimpleScheduler() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="background">
      <Header />
      <div className="card">
        <h1>TODO</h1>
        <p>March 2025</p>
        <p className='bigtext'>
          <br/>
           TODO
        </p>
      </div>
      <div className='card'>
        <Article
          title='TODO'
          subtitle='TODO'
          content={<>
            <figure className='inline-article-figure'>
              <img
                src={pic1}
                alt='TODO'
                className='inline-article-image'
              />
              <figcaption className='inline-article-caption'>TODO</figcaption>
            </figure>
            <br/><br/>
            TODO
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default SimpleScheduler
