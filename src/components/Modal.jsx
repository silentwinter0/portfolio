import React, { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal({ buttonText = 'Read more', modalTitle = '', modalText = '', children }) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const TRANSITION_MS = 220

  const openModal = () => setMounted(true)

  // small delay, browser's somehow not picking up the animation without it
  useEffect(() => {
    let t
    if (mounted) {
      t = setTimeout(() => setVisible(true), 20)
    }
    return () => clearTimeout(t)
  }, [mounted])

  const closeModal = () => {
    setVisible(false)
    setTimeout(() => setMounted(false), TRANSITION_MS)
  }

  return (
    <>
      <button className="modal-button" onClick={openModal}>
        {buttonText}
      </button>

      {mounted && (
        <div className={`modal-container ${visible ? 'visible' : ''}`} style={{ display: 'flex' }}>
          <div className="modal" style={{ display: 'block' }} role="dialog">
            <button className="modal-close" onClick={closeModal}>
              <span className="button-line"></span>
              <span className="button-line"></span>
            </button>
            {<h2>{modalTitle}</h2>}
            {<p>{modalText}</p>}
            {children}
          </div>
        </div>
      )}
    </>
  )
}
