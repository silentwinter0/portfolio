import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'

function CommunicationCampaign() {

  return (
    <div className="background">
      <Header />
      <div className="card">
        <h1>Teaching digital novices to 
            recognize AI images – A communication campaign</h1>
        <p>January 2025 – May 2025</p>
        <p className='bigtext'>
          <br/>
              How can we raise awareness about misleading AI images? 
              This communication campaign strategy and proof-of-concept game was
              presented to and praised by real professionals for 
              its clear strategy, noting it could be put to use as-is. 
              <br/><br/>
              Worked on campaign design & strategy formulation, research, 
              and content creation.
              <br/><br/>
              Responsible for proof-of-concept design and 
              implementation with React.
        </p>
      </div>
      <div className='card'>
        <Article
          title='Would you recognize an AI-image?'
          subtitle=''
          content={<>
            Lorem ipsum
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default CommunicationCampaign
