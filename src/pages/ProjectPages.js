// import img from './../img/projects/02-big.jpg';
import BtnGitHub from '../components/btnGithub/BtnGitHub';
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/progectsList';

const ProjectPages = () => {
    const {id} = useParams();
    const project = projects[id];
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgbig} alt={project.title} className="project-details__cover" />

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>

               {project.gitHubLink && (<BtnGitHub link="https://github.com" /> )}
            </div>
        </div>
    </main>
     );
}
 
export default ProjectPages;