import Item from "./Item.";

function List(){
    //Fragment <> </>
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Chevrolet" ano_lancamento={2010}/>
                <Item marca="Fiat" ano_lancamento={2020}/>
            </ul>
        </>
    )
}

export default List;