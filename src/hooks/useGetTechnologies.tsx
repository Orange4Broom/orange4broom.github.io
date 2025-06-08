import figmaIcon from '../images/icons/Figma.png';
import typescriptIcon from '../images/icons/Typescript.png';
import reactIcon from '../images/icons/React.png';
import nextjsIcon from '../images/icons/Next.png';
import sassIcon from '../images/icons/Sass.png';
import gitIcon from '../images/icons/Git.png';
import supabaseIcon from '../images/icons/Supabase.png';
import firebaseIcon from '../images/icons/Firebase.png';

export const useGetTechnologies = () => {
  const technologies = [
    {
      name: "Figma",
      description: "Design Tool",
      icon: figmaIcon,
      backgroundColor: "#194432",
    },
    {
      name: "Typescript",
      description: "Javascript but better",
      icon: typescriptIcon,
      backgroundColor: "#1E3042",
    },
    {
      name: "React",
      description: "Frontend Library",
      icon: reactIcon,
      backgroundColor: "#29484F",
    },
    {
      name: "Next.js",
      description: "React Framework",
      icon: nextjsIcon,
      backgroundColor: "#373737",
    },
    {
      name: "SASS",
      description: "CSS extension",
      icon: sassIcon,
      backgroundColor: "#4F2943",
    },
    {
      name: "Git",
      description: "Version Control",
      icon: gitIcon,
      backgroundColor: "#4D261F",
    },
    {
      name: "Supabase",
      description: "Backend Tool",
      icon: supabaseIcon,
      backgroundColor: "#204435",
    },
    {
      name: "Firebase",
      description: "Development platform",
      icon: firebaseIcon,
      backgroundColor: "#4F4829",
    }
  ];

  return technologies;
};