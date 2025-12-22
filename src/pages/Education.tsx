import { useState } from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState<number | null>(null);

    return (
        <section id="education" className="min-h-screen px-10 py-32 text-white">
            <h2 className="text-5xl font-heading text-center mb-24">
                {t("education.title")}
            </h2>

            <div className="relative max-w-6xl mx-auto">
                {/* CONTENEDOR PRINCIPAL CON LÍNEA DE FONDO */}
                <div className="relative">
                    {/* LÍNEA QUE ATRAVIESA TODOS LOS PUNTOS */}
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 border-t-2 border-dashed border-white/30 z-0" />

                    {/* CONTENEDOR DE PUNTOS (POR ENCIMA DE LA LÍNEA) */}
                    <div className="relative flex justify-between items-center z-10">
                        {[1, 2, 3].map((i) => (
                            <button
                                key={i}
                                onMouseEnter={() => setActive(i)}
                                onMouseLeave={() => setActive(null)}
                                onClick={() => setActive(i)}
                                className="focus:outline-none relative z-20"
                            >
                                <div
                                    className="
                                        w-6 h-6 rounded-full bg-[#550000]
                                        shadow-lg shadow-[#550000]/60
                                        transition-all duration-300
                                        hover:scale-125 hover:shadow-[#550000]/90
                                    "
                                />
                            </button>
                        ))}

                        {/* PUNTOS GRISES (FUTURO) */}
                        {[1, 2].map((_, i) => (
                            <div
                                key={i}
                                className="w-5 h-5 rounded-full bg-gray-600 opacity-40 relative z-20"
                            />
                        ))}
                    </div>
                </div>

                {/* PANEL CENTRAL */}
                <div className="mt-20 min-h-[160px] flex justify-center items-start">
                    {active && (
                        <div className="w-full max-w-xl bg-black/90 backdrop-blur-md p-6 rounded-xl text-center">
                            <p className="text-xl font-semibold">
                                {t(`education.degree${active}.title`)}
                            </p>
                            <p className="text-gray-400">
                                {t(`education.degree${active}.place`)}
                            </p>
                            <p className="text-gray-500">
                                {t(`education.degree${active}.year`)}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Education;