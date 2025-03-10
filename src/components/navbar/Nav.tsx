import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../logo';
import resume from '@assets/Promise-Eskor-Resume.pdf';
import { ChevronUp } from 'lucide-react';
import MenuButton from './MenuButton';
import NavList from './NavList';
import SocialList from './SocialList';
import { Footer } from '../footer';

interface NavProps {
    setExit: (value: boolean) => void;
    setDisappear: (value: boolean) => void;
    setStart: (value: boolean) => void;
}

const Nav = ({ setExit, setDisappear, setStart }: NavProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBackToTop, setBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setBackToTop(window.scrollY >= 150);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        setExit(true);
        const timeout = setTimeout(() => {
            setDisappear(false);
            setStart(false);
        }, 500);
        return () => clearTimeout(timeout);
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full p-4 sm:p-6 lg:p-8 h-nav z-50 ${
                    isMenuOpen ? 'bg-black' : ''
                }`}
            >
                <div className="flex w-full justify-between items-center h-[43px]">
                    <button
                        onClick={() => handleClick()}
                        className="bg-transparent"
                    >
                        <Logo className="w-20 md:w-24 cursor-pointer text-primary  hover:text-accent transition-all duration-300 ease-in-out" />
                    </button>
                    <div>
                        <a
                            href={resume}
                            download="resume.pdf"
                            rel="noopener noreferrer"
                            className="text-primary hidden md:block cursor-pointer hover:text-accent transition-all duration-300 ease-in-out"
                        >
                            {'<resume />'}
                        </a>
                        <MenuButton
                            setIsMenuOpen={setIsMenuOpen}
                            isMenuOpen={isMenuOpen}
                            className="md:hidden"
                        />
                    </div>
                </div>
                <div
                    className={`flex flex-col gap-8 md:hidden fixed inset-0 top-[56px]  z-50 transition-all duration-300 ease-in-out px-4 py-8 bg-black ${
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
                    <div className="container flex flex-col items-center justify-center">
                        <Footer />
                    </div>
                </div>
            </header>

            <div className="hidden md:flex fixed left-0 top-0 h-full m-0 p-0 z-50">
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
                offset={-100}
                isDynamic
                activeClass="text-primary"
                className={`text-primary z-50 fixed bottom-8 right-8 p-3 hover:scale-105 hover:text-accent hover:cursor-pointer transition-all duration-300 ease-in-out ${
                    showBackToTop
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                <ChevronUp
                    size={60}
                    strokeWidth={0.7}
                />
            </Link>
        </>
    );
};

export default Nav;
