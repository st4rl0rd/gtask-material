import React, { Fragment, useState } from 'react';

const NewProject = () => {

  const [project,setProject] = useState({
    nombre: ''
  });

  const { nombre } = project;

  //lee el contenido de los inputs
  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name] : e.target.value
    })
  };

  const onSubmitProject = e =>{
    e.preventDefault();
    //validar

    //agregar

    //reiniciar
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
      >
        Nuevo Proyecto
      </button>

      <form
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProject}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre proyecto"
          onChange={onChangeProject}
          value={nombre}
        />

        <input 
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
          />

      </form>
    </Fragment>
  );
}

export default NewProject;