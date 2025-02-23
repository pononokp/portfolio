import Nav from './components/navbar';
import { PulseButton } from './components/initialize_buttons';
import { PowerButton } from './components/initialize_buttons';
import { useState } from 'react';

function App() {
    const [isEntrance, setIsEntrance] = useState(true);
    const [isBgActive, setBgActive] = useState(false);
    const [showButton, setShowButton] = useState(true);

    return (
        <div className="bg-white h-screen w-screen">
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
}

export default App;
