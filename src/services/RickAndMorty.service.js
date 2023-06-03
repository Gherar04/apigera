// Este servicio nos permite comunicarnos con API 
//Primer en el archivo Api.constants.js cree las constantes y ahora en este archivo que cree lo que hago es crear las clases

import { API_RICKMORTY } from "../constants/Api.constants";


class RickAndMortiService {


    async getAllCharacters(){   //Esta funcion lo que hace es traerme todos los personajes. async significa asincrona
        
        const response = await fetch(API_RICKMORTY.CHARACTERS());     //La variable response va a esperar la resolucion del fetch() que es traer los characters osea los personajes
        // Interceptor
        return response.json();            // Quiero que cuadno llame a la funcion  getAllCharacters() el producto que me devuelva en la variable responde sea como un json. De esta forma el service responde como un json

   
    }

    async getCharacterById(id){     //Esta funcion lo que hace es traerme todos los personajes pero por id
        const response = await fetch(API_RICKMORTY.CHARACTER_BY_ID(id));     
        // Interceptor
        return response.json();
    }
}

export default new RickAndMortiService() //esto nos va a permitir usarla desde donde necesitemos