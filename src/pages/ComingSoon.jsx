import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'
import Hero from '../components/Hero.jsx'

function ComingSoon() {

  return (
    <div className="background">    
      <Hero />
      <Header />
      <div className="card">
        <h1>Coming soon!</h1>
        <p className="project-date">Sometime in the future...</p>
        <p className='project-bigtext'>
          <br/>
            More to come!
        </p>
      </div>
      <div className='card article-container'>
        <Article
          title='Coming soon!'
          subtitle=''
          content={<>
            <br/>
            Please check out my <a href='/#projects'>other projects</a> in the 
            meantime!
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
