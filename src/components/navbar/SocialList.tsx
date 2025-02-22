import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface SocialListProps {
    isMobile?: boolean;
    isMenuOpen?: boolean;
    className?: string;
}

const SocialList: React.FC<SocialListProps> = ({
    isMobile = false,
    isMenuOpen = false,
    className = '',
}) => {
    const githubIcon = (
        <FontAwesomeIcon
            icon={faGithub}
            size="lg"
        />
    );
    const linkedinIcon = (
        <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
        />
    );

    const socialMedia = [
        {
            label: 'GitHub',
            url: 'https://github.com/pononokp',
            icon: githubIcon,
            delay: 'delay-500',
        },
        {
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/promise-eskor',
            icon: linkedinIcon,
            delay: 'delay-600',
        },
    ];

    const mobileClasses = (delay: string, isMenuOpen: boolean) =>
        `transform transition-all duration-300 ease-in-out ${delay} ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`;

    return (
        <ul
            className={`flex fixed left-10 bottom-10 ${
                isMenuOpen
                    ? 'flex-row gap-8 items-center font-sans text-primary'
                    : 'transform -translate-x-0 gap-4 flex-col text-primary font-sans'
            } ${className}`}
        >
            {socialMedia.map(({ label, url, icon, delay }) => (
                <li
                    key={label}
                    className={isMobile ? mobileClasses(delay, isMenuOpen) : ''}
                >
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-all duration-300 ease-in-out"
                    >
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialList;
