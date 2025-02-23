import { motion } from 'framer-motion';
import { SparklesCore } from '../sparkles';
import { Typewriter } from 'react-simple-typewriter';
interface PulseButtonProps {
    isBgActive: boolean;
    setBgActive: (value: boolean) => void;
    setIsEntrance: (value: boolean) => void;
    showButton: boolean;
    setShowButton: (value: boolean) => void;
}

const PulseButton: React.FC<PulseButtonProps> = ({
    isBgActive,
    setBgActive,
    setIsEntrance,
    showButton,
    setShowButton,
}) => {
    const handleClick = () => {
        setBgActive(true);
        setIsEntrance(false);
        const timer = setTimeout(() => {
            setShowButton(false);
        }, 500); // Delay of 500 milliseconds (0.5 seconds)

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    };

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-black"
                initial={{
                    scale: 0,
                    borderRadius: '50%',
                }} // Start with a rounded shape
                animate={{
                    scale: isBgActive ? 1 : 0,
                    borderRadius: isBgActive ? '0%' : '50%',
                }} // Transition to fill the screen
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    speed={1.5}
                    minSize={0.5}
                    maxSize={1}
                    particleDensity={25}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </motion.div>

            {showButton && (
                <div className="flex flex-col items-center justify-center gap-10">
                    <span className="font-sans text-black text-6xl">
                        <Typewriter
                            words={['WELCOME']}
                            loop={1} // Set loop to false to type once
                            cursor
                            cursorStyle="_"
                            typeSpeed={200} // Speed of typing
                            deleteSpeed={50} // Speed of deleting (if any)
                        />
                    </span>
                    <motion.button
                        onClick={handleClick}
                        className="relative z-10 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out"
                        animate={{
                            scale: [1, 3, 1],
                        }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        }}
                    ></motion.button>
                    <span className="font-sans text-black text-xs italic">
                        click here
                    </span>
                </div>
            )}
        </div>
    );
};

export default PulseButton;
