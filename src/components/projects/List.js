import React from 'react';
import Project from './Project';

const ListProject = () => {

  const projects = [
    {nombre: "Mantenimiento: Inmuebles"},
    {nombre: "Investigación Científica"},
    {nombre: "BeaWeblogic en Docker"}
  ];

  return (
    <ul className="listado-proyectos">
      { projects.map( project => (
        <Project
          proyecto={project}
        />
      )) }
    </ul>
  );
}
 
export default ListProject;