import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Logo from '../logo';
import { useEffect } from 'react';

const Start = ({
    setDisappear,
}: {
    setDisappear: (value: boolean) => void;
}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisappear(true);
        }, 3500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="fixed z-50 top-0 left-0 w-full flex items-center justify-center h-screen overflow-hidden">
            <motion.div
                className="fixed inset-0 bg-white z-45 flex flex-col items-center justify-center gap-10"
                initial={{
                    y: 0,
                }} // Starts covering the whole screen
                animate={{
                    y: '-100vh',
                }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
            >
                <span className="font-sans text-black text-6xl h-16">
                    <Typewriter
                        words={['WELCOME']}
                        loop={1} // Set loop to false to type once
                        cursor
                        cursorStyle="_"
                        typeSpeed={200} // Speed of typing
                        deleteSpeed={50} // Speed of deleting (if any)
                    />
                </span>
                <motion.div
                    className="flex flex-col items-center justify-center gap-10 z-50"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 700, // Increase stiffness for a quicker response
                        damping: 10, // Decrease damping for a quicker settle
                        duration: 1.2,
                        delay: 1.5,
                    }}
                >
                    <Logo
                        className="w-24 h-24 text-black"
                        fontSize="24"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Start;
