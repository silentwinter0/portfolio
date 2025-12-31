import './ProjectCard.css'
import Modal from './Modal.jsx'

export default function OtherCardWithModal({ imageSrc, title, subtitle, tech, 
    date, modalTitle = '', modalText = '', modalContent = null }) {
  return (
    <div className="projectcontainer">
      <div>
        {/*<img src={imageSrc} alt={`${title} image`} />*/}
      </div>
      <div className="projecttext">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{tech}</p>
        <p>{date}</p>
        <Modal modalTitle={modalTitle} modalText={modalText}>{modalContent} 
        </Modal>
      </div>
    </div>
  )
}
