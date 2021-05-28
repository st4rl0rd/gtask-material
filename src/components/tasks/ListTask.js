import React, { Fragment } from 'react';
import Task from './Task';

const ListTasks = () => {
  const tasksProject = [
    { nombre: 'Ejemplo de prueba 1', estado: true},
    { nombre: 'Ejemplo de prueba 2', estado: false},
    { nombre: 'Ejemplo de prueba 3', estado: false},
    { nombre: 'Ejemplo de prueba 4', estado: false},
    { nombre: 'Ejemplo de prueba 5', estado: true},
  ];
  return (
    <Fragment>
      <h2> Proyecto: Proyecto </h2>
      <ul className="listado-tareas" >
        {
          tasksProject.length === 0 
            ? ( <li className="tarea"> <p>No existen tareas</p> </li> )
            : tasksProject.map( tarea => (
              <Task
                tarea={tarea}
              />
            ))
        }
      </ul>

      <button
        type="button"
        className="btn btn-secundario"
        >Eliminar Proyecto &times;</button>
    </Fragment>
  );
}

export default ListTasks;