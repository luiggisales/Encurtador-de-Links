import React, {useState} from 'react'
import { FiLink }  from 'react-icons/fi'
import './style.css'
import Logo from '../../assets/logo'
import Menu from '../../components/menu'
import ModalLink from '../../components/Modal'
import api from '../../services/api';
import { getLinkSave,saveLinkStorage } from '../../services/storelinks'

export default function Home() {
  const [link, setLink ] = useState(null);
  const [data, setData ] = useState(null);
  const [showmodal,setShowModal] = useState(false)

  async function EncurtarLink(){
    try {
      const response = await api.post('/shorten',{
        long_url: link,
      })

      setData(response.data)
      setShowModal(true);
      saveLinkStorage('@encurtarLink',response.data)
      setLink('');
    } catch {
      alert('Ops parece que algo deu errado')
      setLink('');
    }
  };

  return (
    <div className='container-home'>
      <div className='logo'>
        <Logo width='120' height='120' color={'#fff'}/>
        <h1>Encurtador de Links</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className='area-input'>
        <div className="input">
          <FiLink size={24} color='#fff'/>
          <input type="text" placeholder='Cole seu link aqui' value={link} onChange={link =>setLink(link.target.value)}/>
        </div>
        <button onClick={EncurtarLink}>Gerar Link</button>
      </div>
      <Menu/>
      {/*Se o modal estiver True  = mostrar*/}
      {showmodal && (
        <ModalLink closeModal={()=>setShowModal(false)}
        content={data}/>
      )}
    </div>
  )
}
