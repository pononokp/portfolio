import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJs,
    faHtml5,
    faCss3,
    faJava,
    faPython,
    faNodeJs,
    faDocker,
    faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

const SkillBar = () => {
    const reactIcon = (
        <FontAwesomeIcon
            icon={faReact}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );
    const jsIcon = (
        <FontAwesomeIcon
            icon={faJs}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );
    const htmlIcon = (
        <FontAwesomeIcon
            icon={faHtml5}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );
    const cssIcon = (
        <FontAwesomeIcon
            icon={faCss3}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );
    const javaIcon = (
        <FontAwesomeIcon
            icon={faJava}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );
    const pythonIcon = (
        <FontAwesomeIcon
            icon={faPython}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );
    const nodeIcon = (
        <FontAwesomeIcon
            icon={faNodeJs}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );
    const dockerIcon = (
        <FontAwesomeIcon
            icon={faDocker}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );
    const gitIcon = (
        <FontAwesomeIcon
            icon={faGitAlt}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );

    return (
        <div className="flex flex-row justify-center items-center max-sm:grid max-sm:grid-cols-3 gap-20 max-1210:gap-10 max-980:gap-5">
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {reactIcon}
                <p className="body-responsive">React</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {jsIcon}
                <p className="body-responsive">JavaScript</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {htmlIcon}
                <p className="sm:text-xs md:text-md lg:text-lg">HTML5</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {cssIcon}
                <p className="body-responsive">CSS3</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {javaIcon}
                <p className="body-responsive">Java</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {pythonIcon}
                <p className="body-responsive">Python</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {nodeIcon}
                <p className="body-responsive">Node.js</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {dockerIcon}
                <p className="body-responsive">Docker</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-all duration-300 ease-in-out">
                {gitIcon}
                <p className="body-responsive">Git</p>
            </div>
        </div>
    );
};

export default SkillBar;
