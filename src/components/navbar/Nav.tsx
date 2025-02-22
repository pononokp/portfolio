import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import Footer from '@components/Footer'
import Logo from '../logo';
import resume from '@assets/resume.pdf';
import { ChevronUp } from 'lucide-react';
import MenuButton from './MenuButton';
import NavList from './NavList';
import SocialList from './SocialList';

interface NavProps {
    isEntrance?: boolean;
}

const Nav: React.FC<NavProps> = ({ isEntrance = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBackToTop, setBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setBackToTop(window.scrollY >= 150);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full p-4 sm:p-6 lg:p-8 h-nav z-50">
                <div className="flex w-full justify-between items-center h-[43px]">
                    <Link
                        to="intro"
                        spy
                        smooth
                        duration={700}
                        offset={-107}
                        isDynamic
                        activeClass="text-accent after:scale-x-100"
                    >
                        <Logo
                            className="w-20 md:w-24 cursor-pointer"
                            isEntrance={isEntrance}
                        />
                    </Link>
                    <div>
                        <a
                            href={resume}
                            download="resume.pdf"
                            rel="noopener noreferrer"
                            className="text-primary hidden md:block cursor-pointer hover:text-accent transition-all duration-300 ease-in-out"
                        >
                            {'<resume/>'}
                        </a>
                        <MenuButton
                            setIsMenuOpen={setIsMenuOpen}
                            isMenuOpen={isMenuOpen}
                            className="md:hidden"
                        />
                    </div>
                </div>
                <div
                    className={`flex flex-col gap-8 md:hidden fixed inset-0 top-[56px]  z-50 transition-all duration-300 ease-in-out px-4 py-8 backdrop-filter backdrop-blur-md ${
                        isMenuOpen
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-full pointer-events-none'
                    }`}
                >
                    <NavList
                        isMobile
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        className="py-4"
                    />
                    <SocialList
                        isMobile
                        isMenuOpen={isMenuOpen}
                        className="py-4"
                    />
                </div>
            </header>

            <div className="hidden md:flex fixed left-0 top-0 h-full m-0 p-0">
                <NavList
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    className="m-0 p-0" // Ensure no margin/padding
                />
                <SocialList
                    isMenuOpen={isMenuOpen}
                    className="m-0 p-0" // Ensure no margin/padding
                />
            </div>

            <Link
                to="intro"
                spy
                smooth
                duration={700}
                offset={-107}
                isDynamic
                activeClass="text-accent after:scale-x-100"
                className={`z-50 bg-gray-700 rounded-full shadow-md fixed bottom-8 right-8 p-3 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ${
                    showBackToTop
                        ? 'opacity-80'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                <ChevronUp
                    size={32}
                    color={'var(--color-accent)'}
                />
            </Link>
        </>
    );
};

export default Nav;
