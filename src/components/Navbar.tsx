import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const { t } = useTranslation();

    const item =
        "cursor-pointer px-3 text-xl transition-colors duration-300 hover:text-[#550000]";

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
            <div className="flex items-center justify-between px-10 py-6 font-heading">

                {/* IZQUIERDA */}
                <ScrollLink
                    to="home"
                    smooth
                    duration={500}
                    className="cursor-pointer text-2xl hover:text-[#550000] transition"
                >
                    Martina Pérez
                </ScrollLink>

                {/* CENTRO */}
                <LanguageSwitcher />

                {/* DERECHA */}
                <div className="flex items-center gap-6">
                    <ScrollLink to="about" smooth duration={500} className={item}>
                        {t("nav.about")}
                    </ScrollLink>

                    <span className="text-gray-500">|</span>

                    <ScrollLink to="education" smooth duration={500} className={item}>
                        {t("nav.education")}
                    </ScrollLink>

                    <span className="text-gray-500">|</span>

                    <ScrollLink to="tools" smooth duration={500} className={item}>
                        {t("nav.tools")}
                    </ScrollLink>

                    <span className="text-gray-500">|</span>

                    <ScrollLink to="projects" smooth duration={500} className={item}>
                        {t("nav.projects")}
                    </ScrollLink>

                    <span className="text-gray-500">|</span>

                    <ScrollLink to="contact" smooth duration={500} className={item}>
                        {t("nav.contact")}
                    </ScrollLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
