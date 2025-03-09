import { useState } from 'react';
import { ExternalLink, Copy, Check, Mail } from 'lucide-react';

interface ContactCardProps {
    value: string;
    label: string;
    link: string;
    copyable: boolean;
}

const ContactCard = ({ value, label, link, copyable }: ContactCardProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
        >
            <div className="flex flex-col rounded-md p-8 border border-primary h-[300px] lg:w-[500px] sm:max-w-[100%] gap-12 justify-center hover:scale-[1.02] transition-all duration-300 ease-in-out group">
                <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between">
                        <Mail
                            size={32}
                            color="var(--color-accent)"
                        />
                        <ExternalLink
                            size={18}
                            className="text-primary"
                        />
                    </div>
                    <p className="text-sm font-sans">{label}</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-primary group-hover:text-accent transition-all duration-300 ease-in-out">
                        {value}
                    </p>
                    {copyable && (
                        <button
                            onClick={handleCopy}
                            className="transition-all duration-300 ease-in-out p-2 rounded-md hover:bg-slate-800"
                        >
                            {copied ? (
                                <Check
                                    size={16}
                                    className="text-accent"
                                />
                            ) : (
                                <Copy
                                    size={16}
                                    className="text-primary"
                                />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </a>
    );
};

export default ContactCard;
