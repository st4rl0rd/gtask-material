import React from 'react';
import NewProject from '../projects/NewProject'
import ListProjects from '../projects/List';

const Sidebar = () => {
  return (
    <aside>
      <h1>RUAT <span>Tasks</span></h1> 
      <NewProject />
      <div className="proyectos">
        <h2> Proyectos </h2>

        <ListProjects />
      </div>
    </aside>
  );
}

export default Sidebar;