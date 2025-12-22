import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const languages = [
        { code: "es", label: "ES" },
        { code: "en", label: "EN" },
        { code: "it", label: "IT" },
    ];

    return (
        <div className="flex items-center gap-3 text-xl">
            {languages.map((lang, index) => (
                <div key={lang.code} className="flex items-center gap-3">
                    <button
                        onClick={() => i18n.changeLanguage(lang.code)}
                        className="text-white transition hover:text-[#550000]"
                    >
                        {lang.label}
                    </button>

                    {index < languages.length - 1 && (
                        <span className="text-gray-500">|</span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
