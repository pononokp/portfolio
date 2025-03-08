import { motion } from 'framer-motion';
import projectPhoto from '@assets/project-one.png';

const ProjectOne = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <motion.div
                className="lg:order-2"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={projectPhoto}
                    alt="Simumat"
                    className="w-full max-w-sm lg:max-w-lg"
                />
            </motion.div>
            <motion.div
                className="lg:order-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Project One</h1>
            </motion.div>
        </div>
    );
};

export default ProjectOne;
