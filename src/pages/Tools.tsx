import { useTranslation } from "react-i18next";

/* TECNOLOGÍAS PRINCIPALES */
const technologies = [
    { name: "Angular", icon: "angular" },
    { name: "Azure", icon: "azure" },
    { name: "CSS", icon: "css" },
    { name: "Figma", icon: "figma" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "HTML", icon: "html" },
    { name: "IntelliJ IDEA", icon: "idea" },
    { name: "Java", icon: "java" },
    { name: "JavaScript", icon: "js" },
    { name: "Linux", icon: "linux" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "Node.js", icon: "nodejs" },
    { name: "PHP", icon: "php" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "Postman", icon: "postman" },
    { name: "Python", icon: "py" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "TypeScript", icon: "ts" },
    { name: "VS Code", icon: "vscode" },
    { name: "WordPress", icon: "wordpress" }
];

const Tools = () => {
    const { t } = useTranslation();

    return (
        <section
            id="tools"
            className="py-32 px-6 bg-transparent"
        >
            <div className="max-w-6xl mx-auto text-center">

                {/* TÍTULO */}
                <h2 className="text-5xl font-heading mb-6">
                    {t("tools.title")}
                </h2>

                <p className="text-xl text-gray-400 mb-20">
                    {t("tools.description")}
                </p>

                {/* SKILLS */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-14 place-items-center">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="group w-28 h-28 [perspective:1000px]"
                        >
                            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                {/* FRONT */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a0a0a] to-black flex items-center justify-center ring-2 ring-[#550000]/70 shadow-[0_0_20px_rgba(85,0,0,0.25)] group-hover:shadow-[0_0_30px_rgba(85,0,0,0.45)] transition [backface-visibility:hidden]">
                                    <img
                                        src={`https://skillicons.dev/icons?i=${tech.icon}`}
                                        alt={tech.name}
                                        className="w-12 h-12"
                                    />
                                </div>

                                {/* BACK */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#550000] to-[#2a0000] flex items-center justify-center text-sm font-semibold px-3 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_25px_rgba(85,0,0,0.5)]">
                                    {tech.name}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* HERRAMIENTAS ADICIONALES */}
                <div className="mt-32 flex justify-center">
                    <div className="group w-[460px] h-56 [perspective:1000px]">
                        <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                            {/* FRONT */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] to-black rounded-2xl flex items-center justify-center text-2xl ring-2 ring-[#550000]/70 shadow-[0_0_25px_rgba(85,0,0,0.3)] font-heading [backface-visibility:hidden]">
                                {t("tools.additionalTitle")}
                            </div>

                            {/* BACK */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#550000] to-[#2a0000] rounded-2xl flex items-center justify-center text-sm [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_30px_rgba(85,0,0,0.5)]">
                                <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-left">
                                    <p>᪥ ABSYSNET (SaaS)</p>
                                    <p>᪥ JDBC</p>
                                    <p>᪥ Access</p>
                                    <p>᪥ Microsoft Dynamics 365</p>
                                    <p>᪥ ALFRESCO</p>
                                    <p>᪥ PL/SQL</p>
                                    <p>᪥ Drupal</p>
                                    <p>᪥ StarUML</p>
                                    <p>᪥ Excel</p>
                                    <p>᪥ Swing</p>
                                    <p>᪥ Protégé</p>
                                    <p>᪥ XAMPP</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Tools;
