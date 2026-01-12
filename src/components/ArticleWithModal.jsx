import './Article.css'
import Modal from './Modal'
import './Modal.css'

export default function ArticleWithModal({ 
  imageSrc = '', title = '', subtitle = '', content = '', link = '#',
  modalTitle = '', modalText = ''
}) {
  return (
    <article className="article">
      <div className="article-projecttext">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{content}</p>
        <div className="article-readmore">
          <Modal 
            modalTitle={modalTitle} 
            modalText={modalText}>
          </Modal>
        </div>
      </div>
    </article>
  )
}

