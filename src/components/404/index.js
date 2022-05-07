import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function ErrorNotFound() {
  return (
    <div className='container-error'>
        <img src='404.png' alt='Pagina nao encontrada'/>
        <h1>Página não encontrada!</h1>
        <Link to={'/'} className="bntVoltar">
            Voltar para a Home
        </Link>
    </div>
  )
}