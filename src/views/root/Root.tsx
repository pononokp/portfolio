import { ErrorBoundary } from 'react-error-boundary';
import GenericError from '../../components/generic-error';
import AppLayout from '../../components/layout';
import Intro from '../intro';
import { SparklesCore } from '../../components/sparkles';
import Skills from '../skills';
import { Projects } from '../projects';
import { Contact } from '../contact';

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
        <ErrorBoundary
            FallbackComponent={GenericError}
            onReset={() => window.location.reload()}
        >
            <AppLayout>
                <Intro />
                <Skills />
                <Projects />
                <Contact />
            </AppLayout>
        </ErrorBoundary>
    </div>
);

export default Root;
