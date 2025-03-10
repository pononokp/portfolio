import { useState } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
    const javaIcon = (
        <FontAwesomeIcon
            icon={faJava}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );

    const pythonIcon = (
        <FontAwesomeIcon
            icon={faPython}
            className="sm:text-2xl md:text-3xl lg:text-4xl"
        />
    );

    const hourglassIcon = (
        <FontAwesomeIcon
            icon={faHourglassStart}
            className="sm:text-2xl md:text-3xl lg:text-4xl mx-auto mt-[25%]"
        />
    );

    const adrlTech = [
        'Python',
        'PySide6',
        'Qt',
        'Plotly',
        'Pandas',
        'Numpy',
        'Scikit-learn',
        'Github',
    ];
    const gvTech = [
        'Java',
        'Selenium',
        'PowerShell',
        'PostgreSQL',
        'NSIS',
        'Jenkins',
        'GitHub',
        'Jira',
        'Confluence',
        'Git',
        'Agile',
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

    const gvTechBadges = gvTech.map((technology, i) => {
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

    const [animate, setAnimate] = useState(false);

    function handleIntersectionChange(inView: boolean) {
        // Trigger animation on entry to viewport
        if (inView) {
            setAnimate(true);
        } else {
            setAnimate(false); // Optionally reset animation when element leaves the viewport
        }
    }

    return (
        <div className="mt-10 mb-10">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className={`vertical-timeline-element--work text-primary font-sans ${
                        animate ? 'animate' : ''
                    }`}
                    contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderTop: '3px solid',
                        borderBottom: 'none',
                    }}
                    contentArrowStyle={{
                        borderRightColor: 'var(--color-secondary)',
                    }}
                    date="09/2022 - 04/2023"
                    iconStyle={{
                        background: 'black',
                        color: 'white',
                    }}
                    icon={javaIcon}
                    intersectionObserverProps={{
                        onChange: handleIntersectionChange,
                        threshold: 0.3, // Element must be at least 10% visible to trigger
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        <span className="vertical-timeline-element-title">
                            Quality Assurance Intern
                        </span>
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        <span className="vertical-timeline-element-subtitle">
                            Global Vision (GVD)
                        </span>
                    </h4>
                    <p className="font-sans">
                        <span className="font-sans text-xs">
                            Designed and implemented test plans, monitoring the
                            resolution of product issues. Authored and executed
                            test cases to ensure the product met requirements
                            and expectations. Assisted in developing testing
                            documentation and validated test scenarios with QA
                            and Development teams. Contributed to scaling
                            automated end-to-end tests and set up testing
                            environments and data.
                        </span>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {gvTechBadges}
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className={`vertical-timeline-element--work text-primary font-sans ${
                        animate ? 'animate' : ''
                    }`}
                    contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderTop: '3px solid',
                        borderBottom: 'none',
                    }}
                    contentArrowStyle={{
                        borderRightColor: 'var(--color-secondary)',
                    }}
                    date="05/2024 - 12/2024"
                    iconStyle={{
                        background: 'black',
                        color: 'white',
                    }}
                    icon={pythonIcon}
                    intersectionObserverProps={{
                        onChange: handleIntersectionChange,
                        threshold: 0.3, // Element must be at least 10% visible to trigger
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Software Developer Intern
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Alloy Design Research Lab
                    </h4>
                    <p>
                        <span className="font-sans text-xs">
                            Collaborated with MD Technologies and UNB Alloy
                            Design Research Laboratory to enhance material
                            simulation software. Developed a standalone UI from
                            an existing MATLAB application. Researched tools,
                            designed a modular architecture, and integrated
                            Python scripts into the UI. Gained hands-on
                            experience transforming prototypes into market-ready
                            solutions.
                        </span>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {adrlTechBadges}
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={`vertical-timeline-element--work text-primary font-sans ${
                        animate ? 'animate' : ''
                    }`}
                    iconStyle={{
                        background: 'black',
                        color: 'white',
                        textAlign: 'center',
                    }}
                    icon={hourglassIcon}
                    intersectionObserverProps={{
                        onChange: handleIntersectionChange,
                        threshold: 0.1, // Element must be at least 10% visible to trigger
                    }}
                />
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
