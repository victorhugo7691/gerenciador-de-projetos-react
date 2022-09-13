import Button from "./evento/Button";

function Eventos({numero}){
    
    function meuEvento(){
        console.log(`Evento ativado! ${numero}` );
    }

    function segundoEvento(){
        console.log("Segundo evento!");
    }

    return (
        <>
            <p>Cllqiue para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Ativar 2 evento" />
            <button onClick={meuEvento}>Ativar</button> 
        </>
    )
}

export default Eventos;