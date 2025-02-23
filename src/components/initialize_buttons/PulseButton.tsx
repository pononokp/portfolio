import { motion } from 'framer-motion';
// import { SparklesCore } from '../sparkles';
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
        setShowButton(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-center h-screen overflow-hidden">
            <motion.div
                className="fixed inset-0 bg-white z-30"
                initial={{ clipPath: 'circle(150% at center)' }} // Starts covering the whole screen
                animate={{
                    clipPath: isBgActive
                        ? 'circle(0% at center)' // Shrinks to the middle (disappear)
                        : 'circle(150% at center)', // Expands from the middle outward (appear)
                }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            />

            {showButton && (
                <div className="flex flex-col items-center justify-center gap-10 z-50">
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
                        className="relative w-16 h-16 rounded-full bg-black text-white flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out"
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
