import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario'
function App() {
  const [artista, agregarArtista] = useState('')
  const [letra, agregarLetra ] = useState([])
  const [info, agregarInfo ] = useState({})

  // Consultar la API de la letra de canciones
  const consultarAPILetra = busqueda => {
    console.log(busqueda); 
  }

  return (
    <Fragment>
      <Formulario consultarAPILetra={consultarAPILetra}></Formulario>
    </Fragment>
  );
}

export default App;
