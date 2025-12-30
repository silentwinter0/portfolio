import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import ProjectContainer from '../components/ProjectContainer.jsx'

function CommunicationCampaign() {

  return (
    <div className="background">
      <Header />
      <div className="card">
        <h1>Communication Campaign – Teaching to recognize AI images</h1>
        <p className='bigtext'>
          How can we raise awareness about misleading AI images? <br/>
          This campaign strategy and proof-of-concept game was praised by real 
          professionals in the field of communications for its clear strategy, 
          noting it could be put to use as-is. <br/>
          Campaign design & strategy, research, content creation. <br/>
          Responsible for POC design and implementation (React/CSS)
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default CommunicationCampaign
