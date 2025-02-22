import clsx from 'clsx';

const Logo = ({ isEntrance = false, className = '', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 16"
        className={clsx(
            'font-serif hover:text-accent transition-all duration-300 ease-in-out',
            isEntrance ? 'text-black' : 'text-primary',
            className
        )}
        {...props}
    >
        <text
            fontFamily="var(--font-serif)"
            x="0"
            y="12"
            fill="currentColor"
            fontSize="12"
            fontWeight="bold"
        >
            PO
        </text>
    </svg>
);

export default Logo;
