import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}){
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
                />
            </div>
            
            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}

export default ProjectForm;