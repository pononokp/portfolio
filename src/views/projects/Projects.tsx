import { ProjectOne } from '../../components/projects';
import { ProjectTwo } from '../../components/projects';
import { ProjectThree } from '../../components/projects';

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen relative flex flex-col z-10 gap-10 py-24 max-md:py-16 items-center justify-center"
        >
            <div className="container flex flex-col items-center justify-center">
                <ProjectOne />
            </div>
            <div className="container flex flex-col items-center justify-center">
                <ProjectTwo />
            </div>
            <div className="container flex flex-col items-center justify-center">
                <ProjectThree />
            </div>
        </section>
    );
};

export default Projects;
