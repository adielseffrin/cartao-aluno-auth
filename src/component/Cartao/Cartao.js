import {useState} from 'react'
import './Cartao.css';
import CartaoPerfil from './CartaoPerfil'
import CartaoArquivos from './CartaoArquivos'

const Cartao = (props) => {
  const [visao, setVisao] = useState('CartaoPerfil')

// TODO Criar demais cartões (config, edit, pref)
  const ComponentToLoad = (p) => {
    let Comp;
    switch(p){
      case 'CartaoArquivos':
        Comp = ( <CartaoArquivos setVisao={setVisao}/>)
        break
      default:
        Comp = ( <CartaoPerfil setVisao={setVisao}/>)
    }
    return Comp
    
  }

  return (
   <>
      {ComponentToLoad(visao)}
    </>
  )
}

export default Cartao