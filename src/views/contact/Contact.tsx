import { ContactCard } from '../../components/contact';
import { motion } from 'framer-motion';
import divider from '@assets/divider.svg';

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-100vh relative flex flex-col z-10 gap-10 justify-center py-24 max-md:py-16 mt-10"
        >
            <motion.div
                className="container flex flex-col gap-20"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container flex flex-col items-center justify-center">
                    <h1 className="text-4xl max-980:text-3xl font-bold text-primary font-sans justify-center">
                        LET'S CONNECT!
                    </h1>
                </div>
                <img
                    src={divider}
                    alt="Divider"
                    className="relative w-full h-4 text-accent object-contain"
                />
                <div className="justify-center items-center">
                    <p className="text-primary text-md max-1210:text-md max-md:text-xs max-w-screen-lg text-center">
                        I’d love to hear from you! Whether you have questions,
                        feedback, or just want to chat about potential
                        collaborations, feel free to reach out via email or
                        LinkedIn. Check out my GitHub and&nbsp;
                        <a
                            href="/*"
                            rel="noopener noreferrer"
                            className="text-accent cursor-pointer relative group"
                        >
                            404 page
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </a>
                        &nbsp;too.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <ContactCard
                        value="promiseono@gmail.com"
                        label="EMAIL"
                        link="mailto:promiseono@gmail.com"
                        copyable={true}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
