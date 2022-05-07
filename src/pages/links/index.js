import React , {useState,useEffect} from 'react'
import { FiArrowLeft,FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {getLinkSave ,deleteLinks} from '../../services/storelinks'
import ModalLink from '../../components/Modal'
import './style.css'

export default function Links() {
  const [meuslinks,setMeusLinks] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [listaVazia,setListaVazia] = useState(false);


  useEffect(()=>{
    async function buscarLinks(){
      const result = await getLinkSave('@encurtarLink');
      
      if (result.length === 0){
        setListaVazia(true)
      }
      setMeusLinks(result);
    }
    buscarLinks()
  },[])

  function openLink(link){
    setData(link);
    setShowModal(true)
  };
  async function deleteLink(id){
    const retorno = deleteLinks(meuslinks,id);
    if (retorno.length === 0){
      setListaVazia(true)
    }
    setMeusLinks(retorno)
  };
  return (
    <div className='container-links'>
      <div className="links-headers">
        <Link to={'/'}><FiArrowLeft size={38} color='#fff'/></Link>
        <h1>Meus Links</h1>
      </div>

      {listaVazia && (
        <div className="link-item">
          <h2 className='listaVaziaText'>Sua Lista Esta Vazia!!</h2>
        </div>
      )}

      {meuslinks.map(link =>(
        <div key={link.id} className="links-item">
          <button className='link' onClick={()=>openLink(link)}>
            <FiLink size={18} color='#ffff'/>
            {link.long_url}
          </button>
          <button className='link-lixeira' onClick={()=>deleteLink(link.id)}>
            <FiTrash size={24} color='#FF5454'/>
          </button>
        </div>
      ))}

      {showModal && (
        <ModalLink closeModal={()=>setShowModal(false)} content={data}/>
      )}
    </div>
  )
}
