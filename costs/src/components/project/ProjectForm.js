import { useEffect, useState } from 'react';
import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({handleSubmit, projectData, btnText}){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

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
    

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }
//? project.category.name : ''

    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input 
                    type="text" 
                    text="Nome do projeto"
                    placeholder="Insira o nome do projeto" 
                    name="name"
                    handleOnChange={handleChange}
                    value={project.name}
                />
            </div>

            <div>
                <Input 
                    type="number" 
                    text="Orçamento do projeto"
                    placeholder="Insira o orçamento total" 
                    name="budget"
                    handleOnChange={handleChange}
                    value={project.budget}
                />
            </div>

            <div>
                <Select
                    name="category_id"
                    text="Selecione uma categoria"
                    options={categories}
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : ''}
                />
            </div>
            
            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}

export default ProjectForm;