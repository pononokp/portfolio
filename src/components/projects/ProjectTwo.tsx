import { motion } from 'framer-motion';
import projectPhoto from '@assets/project-two.png';
import divider from '@assets/divider.svg';
import { LuGithub } from 'react-icons/lu';

const ProjectTwo = () => {
    const androidTech = ['Kotlin', 'Android Studio', 'APIs', 'XML'];
    const androidTechBadges = androidTech.map((technology, i) => {
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
                className="lg:order-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={projectPhoto}
                    alt="ShuffleStitch"
                    className="w-full max-w-sm lg:max-w-xl"
                />
            </motion.div>
            <div className="lg:order-2 flex flex-col gap-5 relative">
                <motion.div
                    className="relative flex flex-row justify-start items-center gap-5"
                    initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
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
                    <span className="text-lg font-bold text-accent">02</span>
                    <a
                        href="https://github.com/S-M-Flynn/ShuffleStitch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary flex items-center gap-2 hover:text-accent font-sans hover:cursor-pointer transition-all duration-300 ease-in-out"
                    >
                        <LuGithub size={20} />
                        <span>CODE</span>
                    </a>
                </motion.div>
                <motion.div
                    className="text-primary font-sans flex flex-col max-w-lg gap-5"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl max-1210:text-3xl max-md:text-2xl font-bold">
                        Effortless Outfit Selection, Tailored to You
                    </h1>
                    <p className="text-md max-1210:text-md max-md:text-xs">
                        ShuffleStitch is an Android app that makes choosing
                        outfits easy and fun by offering random suggestions from
                        your digital wardrobe. You can shuffle through tops,
                        bottoms, shoes, and accessories, with filters for style,
                        while using real-time weather data. Whether you prefer
                        casual, formal, or athletic looks, ShuffleStitch helps
                        you streamline your outfit choices and adds some
                        excitement to your daily wardrobe routine.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {androidTechBadges}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectTwo;
