import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("mgowrndd");

    if (state.succeeded) {
        return (
            <section
                id="contact"
                className="min-h-screen px-10 py-32 text-white flex items-center justify-center"
            >
                <div className="text-center">
                    <h2 className="text-4xl font-heading mb-6">
                        {t("contact.successTitle")}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t("contact.successMessage")}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="min-h-screen px-10 py-32 text-white">
            <h2 className="text-5xl font-heading text-center mb-12">
                {t("contact.title")}
            </h2>

            <p className="text-center text-gray-400 text-xl mb-16 max-w-2xl mx-auto">
                {t("contact.description")}
            </p>

            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto flex flex-col gap-6"
            >
                <input
                    type="text"
                    name="name"
                    placeholder={t("contact.name")}
                    required
                    className="bg-black/40 border border-white/20 rounded-xl px-5 py-4 text-lg focus:outline-none focus:border-[#550000] transition"
                />

                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />

                <input
                    type="email"
                    name="email"
                    placeholder={t("contact.email")}
                    required
                    className="bg-black/40 border border-white/20 rounded-xl px-5 py-4 text-lg focus:outline-none focus:border-[#550000] transition"
                />

                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <textarea
                    name="message"
                    placeholder={t("contact.message")}
                    required
                    rows={5}
                    className="bg-black/40 border border-white/20 rounded-xl px-5 py-4 text-lg focus:outline-none focus:border-[#550000] transition resize-none"
                />

                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-6 bg-[#550000] hover:bg-[#7a0000] transition text-white text-lg font-semibold py-4 rounded-xl disabled:opacity-50"
                >
                    {state.submitting
                        ? t("contact.sending")
                        : t("contact.send")}
                </button>
            </form>
        </section>
    );
};

export default Contact;
