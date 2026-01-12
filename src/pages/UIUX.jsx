import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'
import Hero from '../components/Hero.jsx'

// Pics
import pic1 from '../assets/images/projects/uiux/design.jpg'

function UIUX() {

  return (
    <div className="background">    
      <Hero />
      <Header />
      <div className="card">
        <h1>
          Iterative human-centred UX/UI design plan for developing a 
          smartwatch GUI
        </h1>
        <p className="project-date">November 2025</p>
        <p className='project-bigtext'>
          This course assignment involved defining a human-centred 
          design process for developing a GUI for a smartwatch, designed for
          the needs of young children.
        </p>
      </div>
      <div className='card article-container'>
        <Article
          title='The first prototype'
          subtitle=''
          content={<>
            <figure className='inline-article-figure'>
              <img
                src={pic1}
                alt='Social post mockup'
                className='inline-article-image'
              />
              <figcaption className='inline-article-caption'>
                A paper prototype illustrating the key screens of the smartwatch.
              </figcaption>
            </figure>
            This course assignment was one of several I completed during a 
            course on Human-Computer Interaction, which studies how people 
            interact with technology. One of the core themes of the course was 
            human-centred design, which often leads to more usable and therefore
            superior products. Here, the intention was for this design process 
            plan to ensure reliable production of smartwatches that children 
            find intuitive to use.
            <br/><br/>
            The first prototype, as show above, shows the key screens of the 
            smartwatch interface and how users would navigate between them. The 
            main views are stacked vertically, allowing users to swipe up or 
            down to move between screens, while a consistent left swipe returns
            to the previous view to build familiarity. The primary screen 
            shows the time and a notification count for quick, glanceable 
            access. Swiping down opens the contacts menu, where selecting a 
            person leads to a conversation view, with a clear choice to call or 
            message the person in question. Messaging uses a compact keyboard 
            with a suggestion bar and support for both tapping and swiping, 
            and a backspace key for error recovery. Across all screens, clear 
            labels, directional arrows, and generous hit targets reduce errors 
            and clearly communicate how to interact with the interface.
            
            The first evaluation should be conducted with children aged roughly 
            7–12, focused on whether the navigation model and core screens are
            intuitive, how well interruptions like incoming calls are handled,
            and how easily tasks such as messaging and sharing stats could be
            completed. Using a Wizard-of-Oz setup with printed screens and 
            neutral prompts, the prototype would then be iterated until core 
            tasks achieved sufficiently high success rates with low error rates.
          </>}
        />
        <Article
          title='The second prototype'
          subtitle=''
          content={<>
            After the first set of iterations, a functional, wrist-wearable 
            second prototype could be developed using interactive design tooling
            and a small touchscreen. It should include animated transitions, 
            simulated front-facing features, and haptic vibration feedback to 
            reinforce interactions with feedback to the user. The keyboard and 
            suggestion bar should also be implemented in this prototype to 
            properly test the intended typing experience, and a small speaker 
            and microphone should be installed to simulated phone calls, with 
            mock data used for messages and activity. All improvements derived 
            from the first prototype should be integrated.
            <br/><br/>
            The second evaluation should focus on validating effectiveness, 
            efficiency and satisfaction for core flows, such as checking the 
            time, reading notifications, contacting someone, handling an 
            incoming call and resuming the previous activity, and sharing stats.
            It should also compare tapping against swiping for text input, 
            assess learnability through reduced backtracking, and evaluate the 
            clarity of feedback along with ergonomics and accessibility. 
            Testing should take place both indoors (in a usability lab or 
            classroom) to assess the interface itself and outdoors (such as in 
            a park) to examine glanceability, gesture reliability and 
            interruption recovery in realistic conditions. 
            Tasks should be structured with neutral prompts, outcomes measured
            and environmental factors noted, and the sessions concluded with 
            brief interviews about input preferences, comfort while moving 
            and overall intuitiveness.
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default UIUX
