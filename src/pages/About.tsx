import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-32 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center">

                {/* SOBRE MÍ */}
                <div>
                    <h2 className="text-4xl font-heading mb-6">
                        {t("about.title")}
                    </h2>
                    <p className="max-w-xl mx-auto text-lg leading-relaxed text-gray-300">
                        {t("about.text")}
                    </p>
                </div>

                {/* FOTO PERFIL */}
                <div className="flex justify-center">
                    <img
                        src="/martina.jpg"
                        alt="Martina Pérez"
                        className="
              w-60 h-60
              rounded-full
              object-cover
              ring-4 ring-[#550000]
              hover:ring-8 transition
            "
                    />
                </div>

                {/* VALORES */}
                <div>
                    <h3 className="text-3xl font-heading mt-12 mb-6">
                        {t("about.valuesTitle")}
                    </h3>

                    <ul className="grid grid-cols-2 gap-6 text-xl max-w-md mx-auto">
                        <li>᪥ {t("values.attentive")}</li>
                        <li>᪥ {t("values.curious")}</li>
                        <li>᪥ {t("values.perseverant")}</li>
                        <li>᪥ {t("values.responsible")}</li>
                    </ul>


                </div>

            </div>
        </section>
    );
};

export default About;
