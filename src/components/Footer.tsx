import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-12 text-center text-gray-400">
            <div className="flex justify-center gap-10 mb-4">

                <a
                    href="https://github.com/martinapm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#550000] transition"
                >
                    <FaGithub size={28} />
                </a>

                <a
                    href="https://www.linkedin.com/in/martinaperezmuñoz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#550000] transition"
                >
                    <FaLinkedin size={28} />
                </a>

            </div>

            <p className="text-sm">
                © {new Date().getFullYear()} Martina Pérez
            </p>
        </footer>
    );
};

export default Footer;
