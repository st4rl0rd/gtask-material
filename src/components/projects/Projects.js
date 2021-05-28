import React from 'react';
import Sidebar from '../layout/Sidebar';
import TopBar from '../layout/TopBar';
import FormTarea from '../tasks/FormTask';
import ListTask from '../tasks/ListTask';


const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <TopBar />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListTask />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;