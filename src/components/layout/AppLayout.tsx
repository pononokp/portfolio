import Nav from '../navbar';
import { Start, Exit } from '../start_end_transitions';
import { useState, useEffect } from 'react';
import { Footer } from '../footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [disappear, setDisappear] = useState(false);

    useEffect(() => {
        if (!disappear) {
            const timeout = setTimeout(() => {
                setStart(true);
            }, 2500);

            return () => clearTimeout(timeout);
        }
    }, [disappear]);

    return (
        <div className="min-h-svh overflow-x-hidden">
            {/* Scrollable Content */}
            {start && (
                <div className="relative justify-center items-center flex flex-col p-0 mx-20">
                    <main className="relative justify-center items-center flex flex-col p-0 mx-20">
                        {children}
                    </main>
                    <div className="container flex flex-col items-center justify-center">
                        <Footer />
                    </div>
                </div>
            )}

            {/* Navbar and Buttons */}
            <Nav
                setExit={setExit}
                setDisappear={setDisappear}
                setStart={setStart}
            />

            {/* Initialize Buttons */}
            {!disappear && <Start setDisappear={setDisappear} />}
            {exit && <Exit setExit={setExit} />}
        </div>
    );
};

export default AppLayout;
