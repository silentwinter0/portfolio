import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'
import Hero from '../components/Hero.jsx'

// Pics
import pic1 from '../assets/images/projects/simplescheduler/scheduler.png'

function SimpleScheduler() {
  return (
    <div className="background">
      <Hero />
      <Header />
      <div className="card">
        <h1>Command-line Scheduler, written in C</h1>
        <p className="project-date">March 2025</p>
        <p className='project-bigtext'>
          <br/>
            Simple scheduling system for scheduling one-hour meeting 
            times. <br/><br/>
            Written from scratch in C as a console application under a strict 
            time-frame, featuring file I/O to save and load schedules.
        </p>
      </div>
      <div className='card article-container'>
        <Article
          title='The Command-line Scheduler'
          subtitle=''
          content={<>
            <figure className='inline-article-figure'>
              <img
                src={pic1}
                alt='A picture of the command-line scheduler interface while in 
                use, showing command and their effects.'
                className='inline-article-image'
              />
              <figcaption className='inline-article-caption'>
                The command-line scheduler in action
              </figcaption>
            </figure>
            <br/><br/>
            This simple C program was written as a part of my course in the 
            basics of C programming. It features simple commands for writing to 
            (W) and loading from (O) files, listing (L) current meetings, as 
            well as adding (A) or deleting (D) meetings with a specified time. 
            This was my first experience with writing a full program entirely 
            from  scratch, as well as the final course project showing my skills
            writing code in C.
            <br/><br/>
            The program itself is quite simple, and I completed it in a few days,
            well ahead of schedule.
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default SimpleScheduler
