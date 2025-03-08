import { SkillBar, Timeline } from '../../components/skill/';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen relative flex flex-col z-10 gap-10 py-24 max-md:py-16"
        >
            <motion.div
                className="container flex flex-col items-center justify-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl max-980:text-3xl font-bold text-primary font-sans justify-center mb-10">
                    SKILLS
                </h1>
                <SkillBar />
                <h1 className="text-4xl max-980:text-3xl font-bold text-primary font-sans mt-20 justify-center">
                    EXPERIENCE
                </h1>
                <Timeline />
            </motion.div>
        </section>
    );
};
export default Skills;
