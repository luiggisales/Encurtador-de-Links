import React from 'react'
import {FiX , FiClipboard } from 'react-icons/fi'
import './style.css'

export default function ModalLink({closeModal,content}) {
  async function copylink(){
    await navigator.clipboard.writeText(content.link);
    alert('Url copiada com sucesso!')
  };
  return (
    <div className='container-modal'>
        <div className="header">
            <h2>Link Encurtado</h2>
            <button onClick={closeModal}>
                <FiX size={20} color='#000'/>
            </button>
        </div>
        <span>{content.long_url}</span>
        
        <button className='modal-link' onClick={copylink}>
            {content.link}
            <FiClipboard size={20} color='#fff'/>
        </button>
    </div>
  )
}
