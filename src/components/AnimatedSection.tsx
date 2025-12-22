import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const AnimatedSection = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
