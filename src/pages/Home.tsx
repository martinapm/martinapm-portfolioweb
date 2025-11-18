import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl font-heading mb-4">
                {t("home.welcome")}
            </h1>

            <h2 className="text-2xl text-gray-300 mb-6">
                {t("home.subtitle")}
            </h2>

            <p className="max-w-xl text-lg text-gray-400 mb-10">
                {t("home.description")}
            </p>

            <div className="flex gap-10">
                <a
                    href="https://github.com/martinapm"
                    target="_blank"
                    className="hover:text-[#550000] transition"
                >
                    <FaGithub size={36} />
                </a>

                <a
                    href="https://www.linkedin.com/in/martinaperezmuñoz/"
                    target="_blank"
                    className="hover:text-[#550000] transition"
                >
                    <FaLinkedin size={36} />
                </a>
            </div>
        </section>
    );
};

export default Home;
