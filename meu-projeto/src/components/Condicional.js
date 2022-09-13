import {useState} from 'react'

function Condicional(){

    function enviarEmail(evento){
        evento.preventDefault();
    }

    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <from>
                <input tyep="email" placeholder="Digite o email" />
                <button type="submit" onClick={enviarEmail} >
                    Enviar email
                </button>
            </from>
        </div>
    )
}

export default Condicional;