import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'
import Hero from '../components/Hero.jsx'

// Pics
import pic1 from '../assets/images/projects/transitdatabase/uml.png'

function TransitDatabase() {

  return (
    <div className="background">    
      <Hero />
      <Header />
      <div className="card">
        <h1>Transit database project with UML and SQLite</h1>
        <p className="project-date">April 2025 – May 2025</p>
        <p className='project-bigtext'>
          This pair course project involved planning a comprehensive 
          database system for a transit company, involving interactions 
          between vehicles, lines, schedules, tickets, stops and shifts.
          <br/><br/>
          The project was completed over the course of a few weeks, and was
          implemented for testing in SQLite.
        </p>
      </div>
      <div className='card article-container'>
        <Article
          title='Transit database project'
          subtitle=''
          content={<>
            <figure className='inline-article-figure'>
              <img
                src={pic1}
                alt='Social post mockup'
                className='inline-article-image'
              />
              <figcaption className='inline-article-caption'>
                The UML chart for our plan of the transit database.
              </figcaption>
            </figure>
            This project a pair exercise in planning and implementing a database
            from scratch using UML and SQLite. The plan needed to take into 
            account all operations that a transit company might need, from 
            processing ticket sales and customer data to driver data, shifts and
            transit lines. The UML chart above showcases our solution, and 
            served as the basis for our implementation in SQLite.
            <br/><br/>
            The SQLite implementation ended up being more than capable of 
            handling complex operations well, such as allowing the user to look
            up how many times certain ticket types have been purchases, finding
            vehicles that haven't been used this month, and other practical 
            queries. We also created indexes to speed up queries, based on 
            common interactions, such as finding qualified drivers for certain 
            transit lines.
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default TransitDatabase
