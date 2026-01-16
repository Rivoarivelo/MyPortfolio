"use client";

import { Code, ExternalLink, Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { image } from "framer-motion/client";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Swap-Shop",
      description: "Mini plateforme d'échange d'objets entre particuliers.",
      tags: ["Codeigniter4", "MySQL", "TailwindCSS"],
      gradient: "from-purple-500 to-pink-500",
      image: "/Swapshop.png",
      link: "https://github.com/Rivoarivelo/SwapShop.git",
    },
    {
      title: "Portfolio CMS",
      description:
        "Système de gestion de contenu pour créateurs avec éditeur visuel.",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      gradient: "from-orange-500 to-red-500",
      image: "/Portfolio.png",
      link: "https://my-portfolio-rivo.vercel.app/",
    },
    // pacman
    {
      title: "Pacman Game",
      description: "Jeu Pacman classique développé en JavaScript.",
      tags: ["Next.js", "HTML5", "tailwindCSS"],
      // ajouter un image dans la dossier public
      image: "/Pacman.png",
      gradient: "from-yellow-400 to-yellow-600",
      link: "https://pac-man-rho.vercel.app/",
    },
  ];

  return (
    <section id="projets" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Mes Projets
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Image */}

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant ProjectCard avec effet 3D
const ProjectCard = ({ project, index, isInView }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Valeurs pour l'effet 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-effect rounded-xl overflow-hidden cursor-pointer relative"
    >
      {/* Image avec gradient animé */}
      <motion.div
        className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image personnaliser sur le const project dans le dossier public */}
        {project.image && (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 10 }}
            animate={{ opacity: isHovered ? 0.3 : 1 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Icône qui flotte */}
        <motion.div
          animate={{
            y: isHovered ? [0, -15, 0] : 0,
            rotate: isHovered ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <Code size={64} className="opacity-20" />
        </motion.div>

        {/* Overlay au hover */}
        <motion.div
          className="absolute inset-0 bg-black/0"
          animate={{
            backgroundColor: isHovered ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)",
          }}
        />

        {/* Particules */}
        {isHovered && (
          <>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  opacity: 1,
                }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Contenu de la carte */}
      <motion.div
        className="p-6"
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.h3
          className="text-xl font-bold mb-3"
          animate={isHovered ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-gray-400 mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <motion.span
              key={tag}
              className="px-3 py-1 bg-white/10 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.15 + i * 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-3">
          <motion.a
            href={project.link}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            Voir le projet <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={project.link}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <Github size={20} />
          </motion.a>
        </div>
      </motion.div>

      {/* Bordure lumineuse au hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={
          isHovered
            ? {
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }
            : { boxShadow: "0 0 0px rgba(0,0,0,0)" }
        }
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Projects;
