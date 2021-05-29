const Horario = (props) => {
    return(
        <div className={props.className}>
            <span>Último login: </span>
            <span id="horario">15:34</span> Horário Local
        </div>
    )
}

export default Horario