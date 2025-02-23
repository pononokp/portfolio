import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import profile from '@assets/profile.png';
import { ChevronDown } from 'lucide-react';

const Intro = () => {
    const [startTypewriter, setStartTypewriter] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStartTypewriter(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            id="intro"
            className="h-screen relative flex flex-col items-center justify-center z-10"
        >
            <div className="items-center justify-center flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <span className="text-4xl max-1210:text-3xl max-md:text-2xl text-secondary">
                            Promise Ononokpono
                        </span>
                    </motion.div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-row items-center gap-5"
                        >
                            <h1 className="text-7xl max-1210:text-5xl max-md:text-3xl font-bold text-primary">
                                DEVELOPER
                            </h1>
                            <div className="hidden sm:block w-[200px] h-[2px] bg-secondary" />
                        </motion.div>
                        <motion.div
                            className="flex flex-row"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            <h1 className="text-7xl max-1210:text-5xl max-md:text-4xl font-bold text-secondary">
                                {'+ '}
                            </h1>
                            {startTypewriter && (
                                <div className="text-7xl max-1210:text-5xl max-md:text-3xl font-bold text-primary">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'ARTIST',
                                                'DESIGNER',
                                                'UI/UX',
                                                'PROGRAMMER',
                                                'ENGINEER',
                                            ],
                                            cursor: '_',
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>
                            )}
                        </motion.div>
                    </div>
                    <motion.p
                        className="md:w-3/4 text-primary font-sans text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        A fifth-year software engineering student with a strong
                        passion for problem solving, software, and its latest
                        advancements.
                    </motion.p>
                </div>
                <motion.div
                    className="relative right-0 h-full z-0"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <div className="relative w-80 h-80 rounded-full overflow-hidden">
                        <img
                            src={profile}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="absolute flex justify-center bottom-10 items-center w-full z-20 text-primary"
                initial={{ y: 50, opacity: 1 }}
                animate={{
                    y: [0, -10, 0], // Moves up and down
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity, // Makes it infinite
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                }}
            >
                <Link
                    to="skills"
                    spy
                    smooth
                    duration={700}
                    offset={-40}
                >
                    <ChevronDown
                        size={60}
                        strokeWidth={0.7}
                        className="text-primary hover:text-accent transform transition-all duration-300 ease-in-out cursor-pointer"
                    />
                </Link>
            </motion.div>
        </section>
    );
};

export default Intro;
