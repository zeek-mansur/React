import ReactDOM  from 'react-dom'
import React, { Children } from 'react'
import './Modal.css'

export default function Modal({children, handleClose}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <br/>
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  ), document.body)
}

