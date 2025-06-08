import projectImage from "../images/projects/project.jpg";

export interface Project {
  name: string;
  image: string;
  tags: string[];
  link: string;
}

export const useGetProjects = () => {
  const projects: Project[] = [
    {
      name: "Project 1",
      image: projectImage,
      tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express"],
      link: "https://www.google.com",
    },
    {
      name: "Project 2",
      image: projectImage,
      tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express"],
      link: "https://www.google.com",
    },
    {
      name: "Project 3",
      image: projectImage,
      tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express"],
      link: "https://www.google.com",
    },
    {
      name: "Project 4",
      image: projectImage,
      tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express"],
      link: "https://www.google.com",
    },
  ];

  return { projects };
};
