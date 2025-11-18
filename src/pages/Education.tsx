import { useTranslation } from "react-i18next";

const Education = () => {
    const { t } = useTranslation();

    const items = [
        t("education.degree1"),
        t("education.degree2"),
        t("education.degree3"),
    ];

    return (
        <section
            id="education"
            className="min-h-screen px-10 py-32 text-white"
        >
            <h2 className="text-5xl font-heading text-center mb-24">
                {t("education.title")}
            </h2>

            <div className="relative max-w-6xl mx-auto">
                {/* LÍNEA DISCONTINUA */}
                <div className="absolute top-1/2 w-full border-t-2 border-dashed border-white/30" />

                <div className="relative flex justify-between items-center">
                    {items.map((_, index) => (
                        <div key={index} className="relative group">

                            {/* PUNTO ACTIVO */}
                            <div className="
                                w-6 h-6 rounded-full
                                bg-[#550000]
                                shadow-lg shadow-[#550000]/60
                                transition-all duration-300
                                group-hover:scale-125
                                group-hover:shadow-[0_0_20px_rgba(85,0,0,0.9)]
                            " />

                            {/* TOOLTIP */}
                            <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-72 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                                <div className="bg-black/90 backdrop-blur-md p-5 rounded-xl text-center border border-white/10">
                                    <p className="text-lg font-semibold">
                                        {t(`education.degree${index + 1}.title`)}
                                    </p>
                                    <p className="text-gray-400">
                                        {t(`education.degree${index + 1}.place`)}
                                    </p>
                                    <p className="text-gray-500">
                                        {t(`education.degree${index + 1}.year`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* FUTURO (INACTIVO) */}
                    {[1, 2].map((_, i) => (
                        <div
                            key={`future-${i}`}
                            className="w-5 h-5 rounded-full bg-gray-600 opacity-40"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
