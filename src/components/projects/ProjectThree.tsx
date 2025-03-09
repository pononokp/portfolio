import { motion } from 'framer-motion';
import projectPhoto from '@assets/project-three.png';
import divider from '@assets/divider.svg';

const ProjectThree = () => {
    const fun2lTech = [
        'ReactJS',
        'JavaScript',
        'SQL',
        'Node.js',
        'Azure',
        'CSS',
        'REST',
        'Docker',
        'Firebase',
    ];
    const fun2lTechBadges = fun2lTech.map((technology, i) => {
        return (
            <div
                role="button"
                className="bg-accent text-black px-2 py-1 rounded-full"
                tabIndex={i}
            >
                <span className="text-sm">{technology}</span>
            </div>
        );
    });

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 min-h-screen">
            <motion.div
                className="lg:order-2"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={projectPhoto}
                    alt="Fun2Learn"
                    className="w-full max-w-sm lg:max-w-3xl"
                />
            </motion.div>
            <div className="lg:order-1 flex flex-col gap-5 relative">
                <motion.div
                    className="relative flex flex-row justify-start items-center gap-5"
                    initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    viewport={{
                        once: true,
                        amount: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                        delay: 0.3,
                    }}
                >
                    <img
                        src={divider}
                        alt="Divider"
                        className="relative w-auto h-4 text-accent"
                    />
                    <span className="text-lg font-bold text-accent">03</span>
                    <span className="text-primary font-sans">
                        IN DEVELOPMENT
                    </span>
                </motion.div>
                <motion.div
                    className="text-primary font-sans flex flex-col max-w-lg gap-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl max-1210:text-3xl max-md:text-2xl font-bold">
                        Making Time Management Fun for Students
                    </h1>
                    <p className="text-md max-1210:text-md max-md:text-xs">
                        Fun2Learn is a gamified time management system designed
                        to help students stay on top of their tasks while making
                        the process more enjoyable. By turning time management
                        into a fun and interactive experience, the app
                        encourages students to stay organized and motivated.
                        With personalized positive reinforcement messages and a
                        user-friendly interface, Fun2Learn makes it easier to
                        manage deadlines, reduce stress, and boost overall
                        productivity.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {fun2lTechBadges}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectThree;
