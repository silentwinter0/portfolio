import { useState } from 'react'
import './Gallery.css'
import ImageModal from './ImageModal'

function Gallery({ images }) {
  const [modalImage, setModalImage] = useState(null)

  const handleImageClick = (img) => {
    setModalImage(img)
  }

  const handleCloseModal = () => {
    setModalImage(null)
  }

  return (
    <>
      <div className='image-gallery'>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            tabIndex={0}
            onClick={() => handleImageClick(img)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(img)}
          />
        ))}
      </div>
      <ImageModal image={modalImage} onClose={handleCloseModal} />
    </>
  )
}

export default Gallery