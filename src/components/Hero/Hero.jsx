import StepSection from "../StepSection/StepSection";

const steps = [
    {
        number: "1",
        step: "PASO ",
        title: "INFORMACIÓN BÁSICA",
        path: "/add/basic-information",
    },
    {
        number: "2",
        step: "PASO ",
        title: "DETALLES",
        path: "/add/details",
    },
    {
        number: "3",
        step: "PASO ",
        title: "ARCHIVOS",
        path: "/add/files",
    },
];

const Hero = () => {
    return (
        <div className="principalAside">
            <aside className="asideMenu">
                {steps.map((step) => (
                    <StepSection
                        key={step.number}
                        number={step.number}
                        step={step.step}
                        title={step.title}
                        to={step.path}
                        stepVisible={true}
                    />
                ))}
            </aside>
        </div>
    );
};

export default Hero;
