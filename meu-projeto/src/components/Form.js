import { useState } from 'react'

function Form(){

    function cadastrarUsuario(evento){
        evento.preventDefault(); //Ajuda a concluir o que é preciso fazer com o componente, não deixa fazer o reload da página
        console.log(name);
        console.log("Usuário cadastrado!");
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`);
    }

    const [name, setName] = useState('João'); //Atribui o valor para o useState
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" >Nome: </label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite o nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" >Senha: </label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="senha"
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;