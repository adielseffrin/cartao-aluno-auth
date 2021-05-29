import {useContext} from 'react'
import {firebaseAuth} from '../../provider/AuthProvider'
import Botao from './Botao'
import Horario from './Horario'
import Perfil from './Perfil'

const CartaoPerfil = (props) => {
  const {handleSignout,} = useContext(firebaseAuth)

  const handleArquivos = () => {
    props.setVisao("CartaoArquivos")
  }

  return (
    <section>
      <div className="card">
        <div className="top">
          <Perfil nome="Aluno Ânima" nivel="Aprendiz avançado" />
        </div>
        <div className="middle">
          <Horario className="profile-time"/>
        </div>
        <div className="bottom">
          <Botao className="profile-action" text="Ver preferências"/>
          <Botao className="profile-action" text="Abrir Configurações de conta"/>
          <Botao className="profile-action" text="Editar seu perfil"/>
          <Botao className="profile-action" text="Ver preferências"/>
          <Botao id="files" className="profile-action" text="Visualizar seus arquivos" onClick={handleArquivos}/>
          <Botao id="btn-sair" className="profile-action" text="Sair" onClick={handleSignout}/>
        </div>
      </div>
    </section>
  )
}

export default CartaoPerfil