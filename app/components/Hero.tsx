"use client";

import { Download, Github, Linkedin, Mail, Camera } from "lucide-react";
import { motion } from "framer-motion";
// import { downloadCV } from "../utils/downloadCV";
import Image from "next/image";
import { downloadCV } from "../utils/downloadCV";
import { FaReact } from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Développeur
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              FullStack
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300"
          >
            Hi👋,Je m'appelle RAKOTONIAINA Rivoarivelo Joseph , personnes
            m'appelle Rivo .Je suis un{" "}
            <span className="bg-gradient-to-r from-red-400 via-purple-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
              Développeur FullStack,
            </span>{" "}
            création d'expériences web modernes et performantes avec React,
            Next.js et Node.js 😊
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={downloadCV}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <Download size={20} />
              Télécharger Mon CV
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 text-yellow-300 border border-yellow/30 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Me contacter
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-4"
          >
            {[
              { icon: Github, href: "https://github.com/Rivoarivelo" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/rivo-rakotoniaina-a5a467321/",
              },
              { icon: Mail, href: "https://rrivorakotoniaina1@gmail.com" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-blue-400 transition-colors"
                >
                  <Icon size={28} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Photo de profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-80 rounded-full overflow-hidden glass-effect p-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient opacity-50 blur-xl"></div>
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border-4 border-white/20 overflow-hidden">
              {/* REMPLACE CE BLOC PAR TON IMAGE */}
              {
                <Image
                  src="/profile.jpg"
                  alt="Photo de profil"
                  fill
                  className="object-cover"
                  priority
                />
              }

              {/* Placeholder temporaire */}
              <div className="flex flex-col items-center">
                <Camera size={80} className="text-gray-500" />
                <p className="mt-4 text-sm text-gray-400">
                  Ajoute ta photo ici
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
