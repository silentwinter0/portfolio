import React, { useState } from 'react'
import './Modal.css'

export default function Modal({ buttonText = 'Read more', modalTitle = '', 
  modalText = '', children }) {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const containerStyle = open ? { display: 'flex' } : { display: 'none' }
  const modalStyle = open ? { display: 'block' } : { display: 'none' }

  return (
    <>
      <button className="modal-button" onClick={openModal}>
        {buttonText}
      </button>

      <div className={`modal-container ${open ? 'visible' : ''}`} style={containerStyle}>
        <div className="modal" style={modalStyle} role="dialog">
          <button className="modal-close" onClick={closeModal}>
            <span className="button-line"></span>
            <span className="button-line"></span>
          </button>
          {<h2>{modalTitle}</h2>}
          {<p>{modalText}</p>}
          {children}
        </div>
      </div>
    </>
  )
}
