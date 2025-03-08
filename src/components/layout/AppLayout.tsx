import Nav from '../navbar';
import { Start, Exit } from '../start_end_transitions';
import { useState, useEffect } from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [disappear, setDisappear] = useState(false);

    useEffect(() => {
        if (!disappear) {
            const timeout = setTimeout(() => {
                setStart(true);
            }, 2200);

            return () => clearTimeout(timeout);
        }
    }, [disappear]);

    return (
        <div className="min-h-svh overflow-x-hidden">
            {/* Scrollable Content */}
            {start && (
                <main className="relative justify-center items-center flex flex-col p-0 mx-20">
                    {children}
                </main>
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
