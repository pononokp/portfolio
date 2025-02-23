import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

interface PowerButtonProps {
    isBgActive?: boolean;
    setBgActive: (value: boolean) => void;
    setIsEntrance: (value: boolean) => void;
    setShowButton: (value: boolean) => void;
}

const PowerButton: React.FC<PowerButtonProps> = ({
    isBgActive,
    setBgActive,
    setIsEntrance,
    setShowButton,
}) => {
    const handleClick = () => {
        setBgActive(!isBgActive);
        setIsEntrance(true);
        setShowButton(true);
    };
    return (
        <>
            {isBgActive && (
                <Link
                    to="intro"
                    spy
                    smooth
                    duration={700}
                    offset={-107}
                    isDynamic
                >
                    <button
                        onClick={handleClick}
                        className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center p-2 bg-transparent text-primary rounded hover:text-accent transition-all duration-300 ease-in-out"
                    >
                        <FontAwesomeIcon
                            icon={faPowerOff}
                            className="mr-2"
                        />
                    </button>
                </Link>
            )}
        </>
    );
};

export default PowerButton;
