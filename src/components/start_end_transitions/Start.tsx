import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Logo from '../logo';
import { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
                transition={{
                    duration: 1.5,
                    ease: [0.8, 0.1, 0.1, 1],
                    delay: 2,
                }}
            >
                <span className="font-sans text-black text-6xl h-16">
                    <DotLottieReact
                        src="https://lottie.host/f5a80cba-0096-486b-8156-510ac3952e53/YCU1D805tZ.lottie"
                        loop={false}
                        autoplay
                        className="object-contain sm:w-[1000px] w-[600px] h-full"
                        speed={1.5}
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
