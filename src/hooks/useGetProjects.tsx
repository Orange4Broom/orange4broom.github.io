import beachkemp from "../images/projects/beachkemp.png";
import bezpecnaplzen from "../images/projects/bezpecnaplzen.png";
import obfinder from "../images/projects/finder.png";
import firestorehelper from "../images/projects/firestorehelper.png";

export interface Project {
  id: string;
  name: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Description {
  id: string;
  text: string;
}

export const useGetProjects = () => {
  const projects: Project[] = [
    {
      id: 'beachkemp',
      name: "Beach Kemp",
      image: beachkemp,
      tags: ["Typescript", "React", "Firebase", "Vercel"],
      link: "https://beachkemp.com",
    },
    {
      id: 'bezpecnaplzen',
      name: "Bezpečná plzeň",
      image: bezpecnaplzen,
      tags: ["Typescript", "React", "Firebase", "Vercel"],
      link: "/project-2",
    },
    {
      id: 'obfinder',
      name: "OB-Finder",
      image: obfinder,
      tags: ["Typescript", "React", "electron", "npm"],
      link: "/project-3",
    },
    {
      id: 'firestorehelper',
      name: "Firestore Helper TS",
      image: firestorehelper,
      tags: ["Typescript", "React", "Firebase"],
      link: "/project-4",
    },
  ];

  const descriptions: Description[] = [
    {
      id: 'beachkemp',
      text: 'BeachKemp je webová aplikace pro registraci na beachové tréninky, která umožňuje uživatelům přihlašování a správu tréninků. Administrátor může snadno vytvářet a upravovat tréninky, s automatickým zasíláním emailů účastníkům při změnách, jako je zrušení tréninku.'
    },
    {
      id: 'bezpecnaplzen',
      text: 'Bezpečná Plzeň je webová aplikace zaměřená na vzdělávání o bezpečnosti a správném jednání v krizových situacích. Uživatelé se učí, jak se chovat v nebezpečných situacích'
    },
    {
      id: 'obfinder',
      text: 'OB-Finder je desktopová aplikace inspirovaná správci souborů, která umožňuje uživatelům prohlížet soubory a disky, procházet různé kategorie a snadno organizovat data s intuitivním rozhraním.'
    },
    {
      id: 'firestorehelper',
      text: 'Firestore Helper TS je npm balíček pro vývojáře, který usnadňuje práci s Firestore. Automaticky inicializuje připojení k databázi a přidává podporu pro cache a další pokročilé funkce pro efektivní správu dat.'
    }
  ]

  return { projects, descriptions };
};
