import './style.css'
import React from 'react'
import { BsInstagram }  from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='Menu'>
        <a className='appmobile' href='https://www.mediafire.com/file/7fuidj98sdcgt18/EncurtadorDeLinks.apk/file'
        target={'_blank'} rel="noreferrer">Baixar app</a>
        <a href="https://www.instagram.com/luiggi_sales/" className='social' target={'_blank'} rel="noreferrer">
            <BsInstagram size={24} color='#fff'/>
        </a>
        <Link to={'/meuslinks'} className="menu-item">
            Meus Links
        </Link>
    </div>
  )
}
