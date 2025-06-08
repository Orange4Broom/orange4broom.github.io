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

  return { projects };
};
