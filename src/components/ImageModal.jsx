import React, { useEffect, useState } from 'react'
import './Modal.css'

export default function ImageModal({ image = null, onClose = () => {} }) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const TRANSITION_MS = 220

  useEffect(() => {
    let t
    if (image) {
      setMounted(true)
      t = setTimeout(() => setVisible(true), 20)
    } else {
      setVisible(false)
      t = setTimeout(() => setMounted(false), TRANSITION_MS)
    }
    return () => clearTimeout(t)
  }, [image])

  const close = () => {
    setVisible(false)
    setTimeout(() => {
      setMounted(false)
      onClose()
    }, TRANSITION_MS)
  }

  if (!mounted) return null

  return (
    <div className={`modal-container ${visible ? 'visible' : ''}`} style={{ display: 'flex' }}>
      <div className="modal" style={{ display: 'block' }} role="dialog">
        <button className="modal-close" onClick={close}>
          <span className="button-line"></span>
          <span className="button-line"></span>
        </button>
        {image && (
          <>
            <h2 style={{marginTop:0}}>{image.alt}</h2>
            <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
            {image.caption && <p className="modal-caption">{image.caption}</p>}
          </>
        )}
      </div>
    </div>
  )
}
