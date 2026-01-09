import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const item =
        "cursor-pointer px-3 text-xl whitespace-nowrap transition-colors duration-300 hover:text-[#550000]";

    return (
        <nav
            className="
                fixed top-0 w-full z-50
                backdrop-blur-md
                bg-transparent
            "
        >
            <div className="w-full flex items-center px-10 py-6 font-heading">

                {/* IZQUIERDA */}
                <div className="flex-1">
                    <ScrollLink
                        to="home"
                        smooth
                        duration={500}
                        className="cursor-pointer text-2xl hover:text-[#550000] transition whitespace-nowrap"
                    >
                        Martina Pérez
                    </ScrollLink>
                </div>

                {/* CENTRO (IDIOMAS - DESKTOP) */}
                <div className="hidden md:flex justify-center flex-1">
                    <LanguageSwitcher />
                </div>

                {/* DERECHA (SECCIONES - DESKTOP) */}
                <div className="hidden md:flex justify-end flex-1 items-center gap-6">
                    <ScrollLink to="about" smooth duration={500} className={item}>
                        {t("nav.about")}
                    </ScrollLink>

                    <span className="text-white/40">|</span>

                    <ScrollLink to="education" smooth duration={500} className={item}>
                        {t("nav.education")}
                    </ScrollLink>

                    <span className="text-white/40">|</span>

                    <ScrollLink to="tools" smooth duration={500} className={item}>
                        {t("nav.tools")}
                    </ScrollLink>

                    <span className="text-white/40">|</span>

                    <ScrollLink to="projects" smooth duration={500} className={item}>
                        {t("nav.projects")}
                    </ScrollLink>

                    <span className="text-white/40">|</span>

                    <ScrollLink to="contact" smooth duration={500} className={item}>
                        {t("nav.contact")}
                    </ScrollLink>
                </div>

                {/* HAMBURGUESA (MÓVIL) */}
                <button
                    className="md:hidden text-3xl hover:text-[#550000] transition"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* MENÚ MÓVIL */}
            {open && (
                <div className="md:hidden bg-black/90 backdrop-blur-xl px-8 py-10 space-y-8 text-center">
                    <div className="flex justify-center">
                        <LanguageSwitcher />
                    </div>

                    <div className="flex flex-col gap-6">
                        {["about", "education", "tools", "projects", "contact"].map((section) => (
                            <ScrollLink
                                key={section}
                                to={section}
                                smooth
                                duration={500}
                                onClick={() => setOpen(false)}
                                className="text-2xl whitespace-nowrap hover:text-[#550000]"
                            >
                                {t(`nav.${section}`)}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
