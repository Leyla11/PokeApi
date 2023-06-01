const PokeCard = (props) => {
    return (
        <div className="pokecard">
            <h1>El nombre de este Pokemon es {props.personaje.nombre}</h1>
            <img src={props.personaje.imagen} alt="personaje"/>
            <p>Este personaje es del tipo {props.personaje.tipo}</p>
        </div>
    )
}

export default PokeCard