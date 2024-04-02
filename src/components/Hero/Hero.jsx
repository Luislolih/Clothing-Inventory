import StepSection from "../StepSection/StepSection";
import { MdOutlineNewLabel } from "react-icons/md";
import { BsTextareaResize } from "react-icons/bs";
import { LuImagePlus } from "react-icons/lu";
const steps = [
    {
        number: "1",
        step: "PASO ",
        title: "INFORMACIÓN",
        path: "/add/basic-information",
        icon: <MdOutlineNewLabel />,
    },
    {
        number: "2",
        step: "PASO ",
        title: "DETALLES",
        path: "/add/details",
        icon: <BsTextareaResize />,
    },
    {
        number: "3",
        step: "PASO ",
        title: "ARCHIVOS",
        path: "/add/files",
        icon: <LuImagePlus />,
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
                        icon={step.icon}
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
