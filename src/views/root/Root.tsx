// import { ErrorBoundary } from 'react-error-boundary';
// import GenericError from '@components/GenericError';
import AppLayout from '../../components/layout';
// import About from '@views/About';
// import Contact from '@views/Contact';
// import Home from '@views/Home';
// import Projects from '@views/Projects';
// import Work from '@views/Work';
import Intro from '../intro';
import { SparklesCore } from '../../components/sparkles';
import Skills from '../skills';
import Projects from '../projects';

const Root = () => (
    <div className="bg-black">
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
        <AppLayout>
            <Intro />
            <Skills />
            <Projects />
        </AppLayout>
    </div>
);

export default Root;
