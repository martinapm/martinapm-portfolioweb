import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-32 px-6 text-center">
            <h2 className="text-5xl font-heading mb-6">
                {t("contact.title")}
            </h2>

            <p className="text-gray-400 mb-20">
                {t("contact.description")}
            </p>

            <form className="max-w-lg mx-auto flex flex-col gap-6">
                <input
                    type="text"
                    placeholder={t("contact.name")}
                    className="bg-black/60 border border-gray-700 rounded-lg p-3"
                />
                <input
                    type="email"
                    placeholder={t("contact.email")}
                    className="bg-black/60 border border-gray-700 rounded-lg p-3"
                />
                <textarea
                    placeholder={t("contact.message")}
                    className="bg-black/60 border border-gray-700 rounded-lg p-3 h-32"
                />
                <button className="bg-[#550000] py-3 rounded-lg hover:scale-105 transition">
                    {t("contact.send")}
                </button>
            </form>
        </section>
    );
};

export default Contact;
