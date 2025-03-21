import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import profile from '@assets/profile.png';
import networkAccent from '@assets/network-accent.png';
import { ChevronDown } from 'lucide-react';

const Intro = () => {
    const [startTypewriter, setStartTypewriter] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStartTypewriter(true);
        }, 400);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            id="intro"
            className="h-screen relative flex flex-col items-center justify-center z-10 py-24 max-md:py-16"
        >
            <div className="container items-center justify-center flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col gap-4">
                    <motion.div
                        className="mt-40"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.9 }}
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
                            transition={{ duration: 0.5, delay: 0.7 }}
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
                            transition={{ duration: 0.5, delay: 0.5 }}
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
                        className="min-w-[300px] text-primary font-sans text-sm sm:text- max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        A fifth-year software engineering student passionate
                        about software creation, innovation, game development,
                        and AI integration. I love building and creating
                        software, constantly exploring new ways to solve
                        problems with modern tech stacks like ReactJS, Node.js,
                        and various cloud services. With a creative mindset and
                        keen attention to detail, I craft high-performance,
                        impactful tools that deliver seamless and engaging user
                        experiences.
                    </motion.p>
                </div>
                <motion.div
                    className="relative right-0 h-full z-0"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <div className="relative mb-10">
                        <div className="absolute hidden lg:block w-80 h-80 rounded-full overflow-visible top-[-100px] right-[-100px] z-0">
                            <img
                                src={networkAccent}
                                alt=""
                                className="w-full h-full max-w-sm lg:max-w-lg object-cover"
                            />
                        </div>
                        <div className="relative max-w-80 max-h-80 rounded-full overflow-hidden z-10">
                            <img
                                src={profile}
                                alt=""
                                className="w-full max-w-sm lg:max-w-lg object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="absolute flex justify-center bottom-5 items-center w-full z-20 text-primary"
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    y: isScrolled ? 20 : 0,
                    opacity: isScrolled ? 0 : 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
            >
                <motion.div
                    className="absolute flex justify-center bottom-10 items-center w-full z-20 text-primary"
                    initial={{ y: 0, opacity: 1 }}
                    animate={{
                        y: [0, 10, 0], // Moves up and down
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
                        activeClass="text-primary after:scale-x-100"
                    >
                        <ChevronDown
                            size={60}
                            strokeWidth={0.7}
                            className="text-primary hover:scale-105 hover:text-accent transform transition-all duration-300 ease-in-out cursor-pointer"
                        />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Intro;
