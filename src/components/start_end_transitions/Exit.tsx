import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ExitProps {
    setExit: (value: boolean) => void;
}

const Exit: React.FC<ExitProps> = ({ setExit }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            setExit(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="fixed top-0 z-50 left-0 w-full flex items-center justify-center h-screen overflow-hidden">
            <motion.div
                className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10"
                initial={{
                    opacity: 0,
                }} // Starts covering the whole screen
                animate={{
                    opacity: 1,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
        </div>
    );
};

export default Exit;
