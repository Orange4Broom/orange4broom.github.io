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
      text: 'BeachKemp is a web application for signing up for beach training sessions, allowing users to register and manage their sessions. Administrators can easily create and edit sessions, with automatic email notifications sent to participants in case of cancellations or changes.'
    },
    {
      id: 'bezpecnaplzen',
      text: 'Bezpečná Plzeň is a web application focused on educating users about safety and proper actions in emergency situations. Users learn how to behave in dangerous situations and receive important real-time information.'
    },
    {
      id: 'obfinder',
      text: 'OB-Finder is a cross-platform desktop application inspired by file explorers, allowing users to browse files, disks, and categories with an intuitive interface for easy data organization.'
    },
    {
      id: 'firestorehelper',
      text: 'Firestore Helper TS is an npm package for developers that simplifies working with Firestore. It automatically initializes database connections and adds support for caching and other advanced features for efficient data management.'
    }
  ]

  return { projects, descriptions };
};
