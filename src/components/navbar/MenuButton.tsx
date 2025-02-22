import { X, Menu } from 'lucide-react';

interface MenuButtonProps {
    setIsMenuOpen: (value: boolean) => void;
    isMenuOpen: boolean;
    className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
    setIsMenuOpen,
    isMenuOpen,
    className = '',
}) => (
    <button
        className={`text-primary hover:text-accent transform transition-all duration-300 ease-in-out ${className}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
        <div
            className={`transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-90' : 'rotate-0'
            }`}
        >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
    </button>
);

export default MenuButton;
