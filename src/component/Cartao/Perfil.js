import ProfilePicture from './profile-placeholder.svg'

const Perfil = (props) =>{

    return (
        <div className="profile">
            <img className="profile-picture" src={ProfilePicture}/>
            <h3 className="profile-name">{props.nome}<span id="status" className="status on"></span></h3>
            <p className="profile-title" name="titulo">{props.nivel}</p>
        </div>
    )
}

export default Perfil