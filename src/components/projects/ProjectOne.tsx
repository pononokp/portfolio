import { motion } from 'framer-motion';
import projectPhoto from '@assets/project-one.png';
import divider from '@assets/divider.svg';
import { LuExternalLink } from 'react-icons/lu';

const ProjectOne = () => {
    const adrlTech = [
        'Python',
        'PySide6',
        'Qt',
        'Plotly',
        'Pandas',
        'Numpy',
        'Scikit-learn',
        'Github',
        'Machine Learning',
    ];
    const adrlTechBadges = adrlTech.map((technology, i) => {
        return (
            <div
                role="button"
                className="bg-accent text-black px-2 py-1 rounded-full"
                tabIndex={i}
            >
                <span className="text-sm">{technology}</span>
            </div>
        );
    });

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 min-h-screen">
            <motion.div
                className="lg:order-2"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={projectPhoto}
                    alt="Simumat"
                    className="w-full max-w-sm lg:max-w-3xl"
                />
            </motion.div>
            <div className="lg:order-1 flex flex-col gap-5 relative">
                <motion.div
                    className="relative flex flex-row justify-start items-center gap-5"
                    initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    viewport={{
                        once: true,
                        amount: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                        delay: 0.3,
                    }}
                >
                    <img
                        src={divider}
                        alt="Divider"
                        className="relative w-auto h-4 text-accent"
                    />
                    <span className="text-lg font-bold text-accent">01</span>
                    <a
                        href="https://youtu.be/a8MHwczzAkA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary flex items-center gap-2 hover:text-accent font-sans hover:cursor-pointer transition-all duration-300 ease-in-out"
                    >
                        <LuExternalLink size={20} />
                        <span>DEMO</span>
                    </a>
                </motion.div>
                <motion.div
                    className="text-primary font-sans flex flex-col max-w-lg gap-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl max-1210:text-3xl max-md:text-2xl font-bold">
                        Improving efficiency of research in alloy design
                    </h1>
                    <p className="text-md max-1210:text-md max-md:text-xs">
                        Simu-Mat, developed in collaboration with the UNB Alloy
                        Design Research Laboratory&nbsp;
                        <a
                            href="https://admtrl.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent cursor-pointer relative group"
                        >
                            (ADRL)
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </a>
                        , is a powerful tool that helps researchers and
                        engineers test and compare different material
                        constitutive models, including those powered by{' '}
                        <span className="text-accent">machine learning</span>.
                        It predicts mechanical properties and stress
                        distributions in alloys, offering valuable insights for
                        alloy design and material testing. By combining
                        computational and AI methods, SimuMat makes data-driven
                        decisions easier for both academic and industrial
                        applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {adrlTechBadges}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectOne;
