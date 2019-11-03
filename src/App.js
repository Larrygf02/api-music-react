import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Informacion from './components/Informacion'
import axios from 'axios'

function App() {
  const [artista, agregarArtista] = useState('')
  const [letra, agregarLetra ] = useState([])
  const [info, agregarInfo ] = useState({})

  // Consultar la API de la letra de canciones
  const consultarAPILetra = async busqueda => {
    const { artista, cancion } = busqueda
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
    const resultado = await axios(url);
    console.log(resultado.data.lyrics);
    agregarArtista(artista)
    //Almacenar la letra en el state
    agregarLetra(resultado.data.lyrics);
  }

  const consultarAPIInfo = async () => {
    if (artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
      const resultado = await axios(url)
      agregarInfo(resultado.data.artists[0])
    }
  }

  useEffect(
    () => {
      consultarAPIInfo()
    }, [artista]
  )
  return (
    <Fragment>
      <Formulario consultarAPILetra={consultarAPILetra}></Formulario>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion
                      info={info}>
            </Informacion>
          </div>
          <div className="col-md-6">
            <Cancion letra={letra}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
