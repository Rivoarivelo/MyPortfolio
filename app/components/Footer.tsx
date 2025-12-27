"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black/40 py-8 px-4"
    >
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>© 2025 - Développé avec en Next.js & Tailwind CSS </p>
        <p>Cette application est développée par Rivo RAKOTONIAINA</p>
        <p>E-mail: rrivorakotoniaina1@gmail.com</p>
        <p>CONTACT : 0345418474</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
