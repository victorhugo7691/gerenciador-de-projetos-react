import style from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm';
import { useNavigate } from 'react-router-dom'

function NewProject(){

    const navigate = useNavigate();//Redireciona o usuário quando for preciso

    function createPost(project){
        //inicializar cost e services
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            //redirect
            navigate('/projects', { message: 'Projeto criado com suceso'});
        })
        .catch(err => console.log(err));
    }

    return (
        <div className={style.newproject_container}>
            <h1>Crie o seu projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm 
            handleSubmit={createPost}
            btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject;