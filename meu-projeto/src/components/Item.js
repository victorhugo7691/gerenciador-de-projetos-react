import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
            <li>{marca} - {ano_lancamento} </li>
        </>
    )
}

Item.propTypes = {//Faz validação a nível de programação / Define o tipo da variável
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = { //executa quando não é informado valor
    marca: "Marca não informada!",
    ano_lancamento: 0
}

export default Item;