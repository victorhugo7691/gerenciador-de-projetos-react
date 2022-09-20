import { useEffect, useState } from 'react';
import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}){

    const [categories, setCategories] = useState([]);

    //useEffect renderiza uma vez o hook
    useEffect(() => {
        fetch("http://localhost:5000/category", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data);
    })
    .catch((err) => console.log(err)) //promisse
    }, [])
    

    return (
        <form className={styles.form}>
            <div>
                <Input 
                type="text" 
                text="Nome do projeto"
                placeholder="Insira o nome do projeto" 
                name="name"/>
            </div>

            <div>
            <Input 
                type="number" 
                text="Orçamento do projeto"
                placeholder="Insira o orçamento total" 
                name="budget"/>
            </div>

            <div>
                <Select
                    name="category_id"
                    text="Selecione uma categoria"
                    options={categories}
                />
            </div>
            
            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}

export default ProjectForm;