import Botao from './Botao'

const CartaoArquivos = (props) => {

  const handleFechar = () => {
      props.setVisao("CartaoPerfil")
  }
// TODO Conseguir fixar o tamanho do card para ficar igual do arquivo
  return(
    <section>
      <div className="card">
        <div className="top"></div>
        <div className="middle">
          <div id="folders"></div>
        </div>
        <div className="bottom">
        <Botao className="profile-action" text="Novo"/>
        <Botao className="profile-action" text="Fechar" onClick={handleFechar}/>
        </div>
      </div>
    </section>
  )
}

export default CartaoArquivos