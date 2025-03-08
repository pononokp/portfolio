import { ProjectOne } from '../../components/projects';

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen relative flex flex-col z-10 gap-10 py-24 max-md:py-16"
        >
            <div className="container flex flex-col items-center justify-center">
                <ProjectOne />
            </div>
        </section>
    );
};

export default Projects;
