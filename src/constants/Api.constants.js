//Uso de Hooks. Creo una constante que va a tener los datos necesarios para comunicarme con una api

export const API_RICKMORTY = {    // Creo una constante con el nombre de RM que significa el nombre del dibujo animado rick and morty
URL: "https://rickandmortyapi.com/api",         // Esta es la url de la pagina donde contiene todos los personajes, localizacion y episodios de ese dibujito animado


CHARACTERS : function (){
    return `${this.URL}/character`             // Con este metodo lo que hago es decirle que retorne el character de la url que puse antes y nos traiga todos los personajes

},
CHARACTER_BY_ID : function (id){
    return `${this.URL}/character/${id}`        // Aca le digo que nos traiga a todos los personajes pero por id

}

}