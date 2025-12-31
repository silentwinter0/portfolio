import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'

function CommunicationCampaign() {

  return (
    <div className="background">
      <Header />
      <div className="card">
        <h1>Communication Campaign – Teaching to recognize AI images</h1>
        <p>January 2025 – May 2025</p>
        <p className='bigtext'>
          <br/>
          How can we raise awareness about misleading AI images? <br/><br/>

          This campaign strategy and proof-of-concept game was praised by real 
          professionals in the field of communications for its clear strategy, 
          noting it could be put to use as-is. <br/><br/>

          Worked on campaign design & strategy, research, content creation. <br/>
          Responsible for proof-of-concept design and implementation (React/CSS)
        </p>
      </div>
      <div className='card'>
        <Article
          title='Tunnistatko tekoälykuvat? – Would you recognize an AI-image?'
          subtitle=''
          content="Lorem ipsum"
        />
      </div>
      <Footer />
    </div>
  )
}

export default CommunicationCampaign
