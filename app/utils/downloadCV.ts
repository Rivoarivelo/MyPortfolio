export const downloadCV = () => {
  // Méthode 1 : Télécharger un PDF depuis /public
  const link = document.createElement("a");
  link.href = "/cv.pdf"; // Assure-toi d'avoir ton CV dans /public/cv.pdf
  link.download = "CV_Developpeur_FullStack.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Méthode 2 : Générer un fichier texte (pour test)
  /*
  const cvContent = `
CURRICULUM VITAE
Développeur FullStack

[Ton Nom]
Email: ton.email@example.com
Téléphone: +261 XX XX XXX XX

PROFIL
Développeur FullStack passionné avec expertise en React, Next.js et Node.js.

COMPÉTENCES TECHNIQUES
• Frontend: React, Next.js, TypeScript, Tailwind CSS
• Backend: Node.js, Express, MongoDB, PostgreSQL
• DevOps: Git, Docker, Vercel, AWS

EXPÉRIENCE
[Ajoute ton expérience ici]

FORMATION
[Ajoute ta formation ici]
  `

  const blob = new Blob([cvContent], { type: 'text/plain' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'CV_Developpeur_FullStack.txt'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
  */
};
