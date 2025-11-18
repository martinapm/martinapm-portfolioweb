import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center gap-3 text-lg">
            {["es", "en", "it"].map((lng, index) => (
                <span key={lng} className="flex items-center gap-3">
          <button
              onClick={() => i18n.changeLanguage(lng)}
              className="hover:text-[#550000] transition"
          >
            {lng.toUpperCase()}
          </button>
                    {index < 2 && <span>|</span>}
        </span>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
