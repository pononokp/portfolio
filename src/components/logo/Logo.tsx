import clsx from 'clsx';

const Logo = ({ fontSize = '12', className = '', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 16"
        className={clsx(
            'font-serif transition-all duration-300 ease-in-out',
            className
        )}
        {...props}
    >
        <text
            fontFamily="var(--font-serif)"
            x="0"
            y="12"
            fill="currentColor"
            fontSize={fontSize}
            fontWeight="bold"
        >
            PO
        </text>
    </svg>
);

export default Logo;
