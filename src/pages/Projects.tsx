import { useTranslation } from "react-i18next";
import AnimatedSection from "../components/AnimatedSection";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section
            id="projects"
            className="min-h-screen px-10 py-32 text-white"
        >
            <h2 className="text-5xl font-heading text-center mb-20">
                {t("projects.title")}
            </h2>

            <AnimatedSection>
                <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">

                    {/* PROYECTO EN DESARROLLO */}
                    <div className="h-[360px] bg-gradient-to-br from-[#2a0000] via-gray-900 to-black border border-[#550000]/40 rounded-3xl p-10 flex flex-col justify-between hover:scale-105 hover:shadow-[0_0_30px_rgba(85,0,0,0.35)] transition">

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">
                                {t("projects.finalTitle")}
                            </h3>
                            <p className="text-lg text-[#b55] font-medium">
                                {t("projects.inProgress")}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 mb-2">
                                {t("projects.progress")} —{" "}
                                <span className="font-semibold text-white">1%</span>
                            </p>

                            <div className="w-full bg-gray-700 h-3 rounded-full mb-4">
                                <div className="bg-green-500 h-3 rounded-full w-[3%]" />
                            </div>

                            <p className="text-sm text-gray-500">2025 – 2026</p>
                        </div>
                    </div>

                    {/* PRÓXIMAMENTE */}
                    {[1, 2].map((_, i) => (
                        <div
                            key={i}
                            className="h-[360px] bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center text-2xl text-gray-400 hover:scale-105 transition"
                        >
                            {t("projects.soon")}
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Projects;
