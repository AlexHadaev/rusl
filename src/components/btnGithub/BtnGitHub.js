import './style.css';
import gutHubIcon from './gitHub-black.svg';


const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target='_blank'  rel="noreferrer" className="btn-outline">
        <img src={gutHubIcon} alt="" />
        GitHub repo
    </a>
     );
}
 
export default BtnGitHub;