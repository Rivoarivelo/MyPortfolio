"use client";

import { useEffect, useRef } from "react";
import {
  Code,
  Palette,
  Server,
  Database,
  FileCode2,
  Code2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdQrCode2 } from "react-icons/md";
// import { RiReactjsFill } from "react-icons/ri";
gsap.registerPlugin(ScrollTrigger);

const SkillsGSAP = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  const skillsFront = [
    {
      name: "React.js",
      level: 60,
      icon: Code,
      color: "bg-blue-500",
      glow: "shadow-blue-500/50",
    },
    {
      name: "Next.js",
      level: 50,
      icon: Code2,
      color: "bg-gray-800",
      glow: "shadow-gray-700/50",
    },
    {
      name: "Html",
      level: 90,
      icon: Code,
      color: "bg-blue-500",
      glow: "shadow-blue-500/50",
    },
    {
      name: "CSS",
      level: 70,
      icon: Code,
      color: "bg-red-600",
      glow: "shadow-gray-700/50",
    },
    {
      name: "JavaScript",
      level: 80,
      icon: FileCode2,
      color: "bg-yellow-500",
      glow: "shadow-gray-700/50",
    },

    {
      name: "TypeScript",
      level: 80,
      icon: Code2,
      color: "bg-blue-600",
      glow: "shadow-blue-600/50",
    },
    {
      name: "Tailwind CSS",
      level: 60,
      icon: Palette,
      color: "bg-cyan-500",
      glow: "shadow-cyan-500/50",
    },
  ];
  const skillsBack = [
    {
      name: "Node.js/Express",
      level: 50,
      icon: Server,
      color: "bg-green-500",
      glow: "shadow-green-500/50",
    },
    {
      name: "Spring Boot",
      level: 35,
      icon: Server,
      color: "bg-green-600",
      glow: "shadow-gray-700/50",
    },
    {
      name: "Python",
      level: 50,
      icon: MdQrCode2,
      color: "bg-blue-800",
      glow: "shadow-blue-500/50",
    },
    {
      name: "C#",
      level: 70,
      icon: Code,
      color: "bg-purple-700",
      glow: "shadow-blue-500/50",
    },
    {
      name: "Java",
      level: 70,
      icon: Code2,
      color: "bg-red-600",
      glow: "shadow-gray-700/50",
    },
    {
      name: "PostgreSQL",
      level: 50,
      icon: Database,
      color: "bg-purple-600",
      glow: "shadow-gray-700/50",
    },
    {
      name: "CodeIgniter",
      level: 60,
      icon: Database,
      color: "bg-orange-500",
      glow: "shadow-red-700/50",
    },
    {
      name: "MySQL",
      level: 60,
      icon: Database,
      color: "bg-emerald-600",
      glow: "shadow-emerald-600/50",
    },
    {
      name: "Prisma",
      level: 70,
      icon: Database,
      color: "bg-indigo-500",
      glow: "shadow-indigo-500/50",
    },
  ];
  const skillsOutils = [
    {
      name: "Git/GitHub",
      level: 75,
      icon: Code,
      color: "bg-red-600",
      glow: "shadow-gray-700/50",
    },
    {
      name: "Postman",
      level: 30,
      icon: Server,
      color: "bg-blue-600",
      glow: "shadow-blue-600/50",
    },
    {
      name: "Visual Studio Code",
      level: 80,
      icon: Code2,
      color: "bg-blue-600",
      glow: "shadow-blue-600/50",
    },
  ];
  // const skills = [...skillsFront, ...skillsBack];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du titre
      gsap.from(".skills-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      // Animation des cartes de compétences
      skillsRef.current.forEach((skill, index) => {
        gsap.from(skill, {
          scrollTrigger: {
            trigger: skill,
            start: "top 85%",
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
        });

        // Animation des barres de progression
        const progressBar = skill.querySelector(".progress-bar");
        if (progressBar) {
          gsap.from(progressBar, {
            scrollTrigger: {
              trigger: skill,
              start: "top 85%",
            },
            width: 0,
            duration: 1.5,
            delay: 0.5 + index * 0.1,
            ease: "power2.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="competences" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="skills-title text-3xl text-yellow-300 md:text-5xl font-bold text-center mb-16">
          Mes Compétences
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Voici un aperçu de mes compétences techniques
        </p>
        <h3 className="skills-title text-xl text-red-300 md:text-5xl font-bold text-center mb-16">
          Front-End
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsFront.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                ref={(el) => {
                  if (el) skillsRef.current[index] = el;
                }}
                className="glass-effect rounded-xl p-6 hover-lift cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${skill.color} p-3 rounded-lg`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`progress-bar ${skill.color} h-full rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="skills-title text-xl text-red-300 md:text-5xl font-bold text-center my-16">
          Back-End
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsBack.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                ref={(el) => {
                  if (el) skillsRef.current[index] = el;
                }}
                className="glass-effect rounded-xl p-6 hover-lift cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${skill.color} p-3 rounded-lg`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`progress-bar ${skill.color} h-full rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="skills-title text-xl text-red-300 md:text-5xl font-bold text-center my-16">
          Outils
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsOutils.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                ref={(el) => {
                  if (el) skillsRef.current[index] = el;
                }}
                className="glass-effect rounded-xl p-6 hover-lift cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${skill.color} p-3 rounded-lg`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`progress-bar ${skill.color} h-full rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="skills-title text-xl text-red-300 md:text-5xl font-bold text-center my-16">
          Diplôme et Formation professionnel
        </h3>
        <p className="text-gray-400 mt-4">
          - 2025 : Troisième année de licence à l'ISPM ,Parcours: Eléctronique
          Système Informatique et Intelligence Artificielle(ESIIA) <br />
          - 2023 : Formation à Alliance Française .Niveau:B2 <br />
          - 2022 : Baccalauréat Téchnique Eléctronique. Mention : Bien <br />-
          2021 : Brevet d'Etude Proféssionnelle (BEP) en Téchnique Eléctronique.
          Mention : Bien
        </p>
      </div>
    </section>
  );
};

export default SkillsGSAP;
