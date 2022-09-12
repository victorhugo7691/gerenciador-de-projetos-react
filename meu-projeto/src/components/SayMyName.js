function SayMyName(props) {
    //props = propriedade, usado para passar parâmetros.
    return (
        <div>
            <p>Fala aí {props.nome}, suave?</p>
        </div>
    )
}

export default SayMyName;