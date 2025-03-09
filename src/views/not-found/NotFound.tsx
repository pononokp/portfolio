import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Footer } from '../../components/footer';
import Logo from '../../components/logo/';
import { SparklesCore } from '../../components/sparkles';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="bg-black flex flex-col min-h-screen w-full max-md:px-6 px-[52px] pt-6 overflow-hidden">
        <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            speed={1.5}
            minSize={0.5}
            maxSize={1}
            particleDensity={35}
            className="fixed top-0 left-0 w-full h-full z-0"
            particleColor="#FFFFFF"
        />
        <div className="flex flex-col min-h-full w-full z-50 gap-20">
            <Link to="/">
                <Logo className="w-20 md:w-24 cursor-pointer text-primary  hover:text-accent transition-all duration-300 ease-in-out" />
            </Link>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col flex-grow justify-center items-center py">
                    <span className="absolute font-sans sm:text-[200px] text-[150px] font-semibold text-accent leading-none">
                        4&nbsp;&nbsp;&nbsp;4
                    </span>
                    <DotLottieReact
                        src="https://lottie.host/cfa622ed-d43e-4804-9ce8-91b37df16ba5/p4hN7Uv3Wr.lottie"
                        loop
                        autoplay
                        className="object-contain sm:w-[1000px] w-[600px] h-full"
                    />
                </div>
                <h2 className="text-primary font-sans text-2xl font-semibold sm:text-3xl">
                    🚀 Lost in Space!
                </h2>
                <p className="text-secondary text-center text-sm sm:text-md">
                    Uh-oh! It looks like you've drifted off course. This page is
                    floating somewhere in the void, but don't worry—we'll guide
                    you back to safety!
                </p>
                <p className="text-secondary text-center text-sm sm:text-md">
                    🔭 Try navigating back to the homepage before you get pulled
                    into a black hole!
                </p>
                <Link to="/">
                    <div className="font-sans text-lg sm:text-xl font-semibold text-accent hover:scale-105 transition-all duration-300 ease-in-out">
                        Back to Mission Control
                    </div>
                </Link>
            </div>
            <Footer />
        </div>
    </div>
);

export default NotFound;
