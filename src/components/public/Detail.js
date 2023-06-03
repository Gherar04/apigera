// Este archivo lo cree a partir del archivo App.js  y lo que dice en la linea 17



import { Link, useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import RickAndMortyService from '../../services/RickAndMorty.service';


export const Detail = () => {

const[personaje, setpersonaje] = useState({});

const{id} = useParams();        // Me trae las mascotas de acuerdo al id 
const {pathname} = useLocation();

useEffect(() =>{        //Es un Hook Esta funcion va a estar atenta a la escucha de si cambia el id, si cambia algo va a llamar al servicio  RickAndMortyService, busca el personaje por id, se lo pasa y despues seteo  el useState que en este caso es Mascota la informacion que recibo
  console.log(pathname);  
    RickAndMortyService.getCharacterById(id)
    .then((data) => setpersonaje(data))
}, [id])

const detailCard = {
  width: '80%',
  margin: 'auto',
  background: 'white'
 }


console.log(personaje)
  return (
    <div className="card mb-3" >
    <div className="row g-0 mt-4 mb-4" >
      <div className="col-md-3">
        <img src={personaje.image} className="img-fluid rounded-start imgDetalle" alt="img del personaje"/>
      </div>
      <div className="col-md-8 detallePersonaje">
        <div className="card-body">
          <h5 className="card-title">{personaje.name}</h5>
          <p className="card-text"><small className=""> Specie: {personaje.species}</small></p>
          <p className="card-text"><small className=""> Status: {personaje.status}</small></p>
          <p className="card-text"><small className=""> Gender: {personaje.gender}</small></p>
          <p className="card-text"><small className=""> Created: {personaje.created}</small></p>
        </div>
        <div className="btn-group" >
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={'/'} className="nav-link px-2 text-success">Inicio</Link>
              </button>
            </div>
      </div>
    </div>
  </div>
  )
}


