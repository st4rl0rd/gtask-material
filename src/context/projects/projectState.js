import React, {useReducer} from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
  const initialState = {
    formulario : false
  }

  // Dispatch para ejecutar acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // # Seri de funciones CRUD

  return (
    <projectContext.Provider
      value={{
        formulario: state.formulario
      }}
    >
      { props.Children }
    </projectContext.Provider>
  );
}

export default ProjectState;