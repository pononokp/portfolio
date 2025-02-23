import { Link } from 'react-scroll';
import resume from '@assets/resume.pdf';

interface NavListProps {
    isMobile?: boolean;
    isMenuOpen?: boolean;
    setIsMenuOpen: (value: boolean) => void;
    className?: string;
}

const NavList: React.FC<NavListProps> = ({
    isMobile = false,
    isMenuOpen = false,
    setIsMenuOpen,
    className = '',
}) => {
    const navLinks = [
        { label: 'SKILLS', section: 'skills', delay: 'delay-0' },
        { label: 'PROJECTS', section: 'projects', delay: 'delay-100' },
        { label: 'CONTACT', section: 'contact', delay: 'delay-200' },
    ];

    const mobileClasses = (delay: string, isMenuOpen: boolean) =>
        `transform transition-all duration-300 ease-in-out ${delay} ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`;

    return (
        <ul
            className={`flex ${
                isMenuOpen
                    ? 'flex-col gap-8 items-center font-sans text-primary'
                    : 'fixed left-0 top-1/4 transform -translate-x-20 -rotate-90 gap-4 flex-row-reverse text-primary font-sans'
            } ${className}$`}
        >
            {navLinks.map(({ label, section, delay }) => {
                return (
                    <li
                        key={label}
                        className={
                            isMobile ? mobileClasses(delay, isMenuOpen) : ''
                        }
                    >
                        <Link
                            to={section}
                            spy
                            smooth
                            duration={700}
                            isDynamic
                            activeClass="text-accent after:scale-x-100"
                            className="cursor-pointer hover:text-accent transition-all duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 after:duration-500"
                            {...({ activeAtBottom: 'contact' } as any)}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    </li>
                );
            })}
            <li
                className={
                    isMobile
                        ? `transform transition-all duration-300 ease-in-out delay-[400ms] ${
                              isMenuOpen
                                  ? 'translate-x-0 opacity-100'
                                  : 'translate-x-8 opacity-0'
                          }`
                        : ''
                }
            >
                {isMenuOpen && (
                    <a
                        href={resume}
                        download="resume.pdf"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:text-accent transition-all duration-300 ease-in-out"
                    >
                        {'<resume/>'}
                    </a>
                )}
            </li>
        </ul>
    );
};

export default NavList;
