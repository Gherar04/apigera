import React from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service'
import {Card} from './Card'
import { useEffect, useState } from 'react';


export const Cards = () => {      // Contiene el arrays de mascotas 
  
const [personajes, setpersonajes] = useState([]);     // En base a la cantidad de mascotas que tiene agarra y abajo intenta armar una lista de cartas

useEffect (() =>{         // Este hooks lo que hace es estar escuchando todo el tiempo si hubo algun cambio
   RickAndMortyService.getAllCharacters()    // Llamo a todos los personajes  
      .then((data)=> setpersonajes( data.results))           // Capturo lo que tengo en results y lo seteo en  mascotas
      .catch((error) => console.log(error));     // En caso de que algo falle muestro el error
   

},[])      //esta es la variable a escuchar constantemente para ver si cambia

console.log(personajes) //en console log lo manda vacio primero, respeta el ciclo de vida de los componentees en compoDidM


  const cardsList = personajes.map((p) => <Card personaje={p} key={p.id} />)      // Hace un mapeo de personajes y en base a esa cantidad de mascotas que me lleguen agarra y genera esa cantidad de cartas y las almacena dentro de la variable cardsList que es un jsx. Siempre le tengo que pasar una key asi se diferencia cada componentes y no tengo problemas

  
  return (
    <div className="album py-5 bg-light">
          <div className="container">
      
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              
            {cardsList}     {/* Con esto llamo a la variable y muestro todas las cartas que contiene */}
            
            </div>
          </div>
        </div>
  )
}


