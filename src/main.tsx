import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Project } from './components/Project';
import { useGetProjects } from './hooks/useGetProjects';
import './index.scss';

const AppWithProjects = () => {
  const { projects } = useGetProjects();

  return (
    <Routes>
      <Route path="/" element={<App />} />
      {projects.map((project) => (
        <Route key={project.id} path={`/${project.id}`} element={<App />} />
      ))}
    </Routes>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppWithProjects />
    </BrowserRouter>
  </StrictMode>
);
