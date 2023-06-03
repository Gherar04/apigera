// Aca voy a generar mi propio hooks

import { useState } from 'react';


export const useUserForm = (initialState = {}) => {         // Aca voy a crear un hooks para manejar el formulario UserForm.js que tenia creado. El json arranca vacio 

const [form, setForm] = useState(initialState);         // Con el serForm lo que hago es ir guardando los valores de los imput en form

const handleChanges = ({target}) =>{                // Esto lo que hace es estar a la escucha de cambios que se hagan en el input del archivo UserForm.js . Cuando un input se modifique va a llamar a la funcion const handleChanges y esa funcion va a atrapar al input que la llamo y la va a guardar en el  target
const {name, value} = target;           // Del target de ese input me interesa saber nadamas el name y el value

console.log("target ", target);
console.log("name ", name);
console.log("value ", value);


setForm({       
    ...form,            //  Esto esprit le dice que en caso de tener valores el formulario que los  añada
    [name]: value,
});
};

return{
    form, 
    setForm, 
    handleChanges,
};
};