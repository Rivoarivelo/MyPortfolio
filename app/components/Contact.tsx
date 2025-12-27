"use client";

import { Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { downloadCV } from "../utils/downloadCV";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Travaillons Ensemble
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12"
        >
          Un projet en tête ? N'hésitez pas à me contacter pour en discuter !
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://rrivorakotoniaina1@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            <Mail size={20} />
            Envoyer un email
          </motion.a>
          <motion.button
            onClick={downloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            <Download size={20} />
            Télécharger mon CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
