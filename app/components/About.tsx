"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          À propos de moi
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-8 md:p-12 hover-lift"
        >
          <p className="text-lg text-yellow-300 leading-relaxed mb-6">
            Passionné par le développement web,mobile depuis plusieurs années,
            je crée des applications modernes, performantes et centrées sur
            l'utilisateur. Mon expertise couvre l'ensemble du stack
            technologique, du frontend au backend ,mobile et aussi le réseau
            informatique. <br /> <br />
            Je suis une jeune passionnée de recherche, intéressée par
            l'évolution technologique et de la créativité, et j'aime le contact
            humain, notamment pour résoudre les problèmes liés au numérique.
          </p>
          <p className="text-lg text-yellow-300 leading-relaxed">
            J'aime relever de nouveaux défis techniques et collaborer sur des
            projets innovants. Mon objectif est de transformer des idées en
            solutions digitales impactantes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
