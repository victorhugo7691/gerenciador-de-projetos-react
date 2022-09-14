import {useEffect, useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(evento){
        evento.preventDefault();
        setUserEmail(email);
        console.log(`Email enviado com sucesso! ${userEmail}`);
    }

    function limparEmail(){
        setUserEmail("");
    }

    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input 
                tyep="email" 
                placeholder="Digite o email"
                onChange={(evento) => setEmail(evento.target.value)}
                />
                <button type="submit" onClick={enviarEmail} >
                    Enviar email
                </button>
                {userEmail &&(
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;