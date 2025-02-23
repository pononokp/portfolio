import Nav from '../navbar';
import { PulseButton } from '../initialize_buttons';
import { PowerButton } from '../initialize_buttons';
import { useState } from 'react';
import { SparklesCore } from '../sparkles';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [isEntrance, setIsEntrance] = useState(true);
    const [isBgActive, setBgActive] = useState(false);
    const [showButton, setShowButton] = useState(true);

    return (
        <div className="relative w-full bg-black overflow-x-hidden justify-center items-center">
            {/* Fixed Background */}
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                speed={1.5}
                minSize={0.5}
                maxSize={1}
                particleDensity={35}
                className="fixed top-0 left-0 w-full h-full z-0"
                particleColor="#FFFFFF"
            />

            {/* Scrollable Content */}
            {isBgActive && (
                <main className="relative justify-center items-center flex flex-col min-h-screen p-0 mx-20">
                    {children}
                </main>
            )}

            {/* Navbar and Buttons */}
            <Nav isEntrance={isEntrance} />
            <PulseButton
                isBgActive={isBgActive}
                setBgActive={setBgActive}
                setIsEntrance={setIsEntrance}
                showButton={showButton}
                setShowButton={setShowButton}
            />
            <PowerButton
                isBgActive={isBgActive}
                setBgActive={setBgActive}
                setIsEntrance={setIsEntrance}
                setShowButton={setShowButton}
            />
        </div>
    );
};

export default AppLayout;
