// Este archivo lo cree a partir del archivo App.js  y lo que dice en la linea 18

import React, { useState, useEffect } from "react";
import { useUserForm } from "../../hooks/Custom.hooks";

export const UserForm = () => {
  const { form, handleChanges } = useUserForm();  // Traigo lo que habia usado en Custom.hooks.js

  const [areEquals, setareEquals] = useState(true); // se va a encargar de ver si las contraseñas son iguales

  const [passwordConfirmation, setpasswordConfirmation] = useState(); //se encarga de atrapar la unica clave que vamos a mandar


  
  const [pass, setPass] = useState(true)


  
  const validPass = () => { //comprueba que la password no este indefinida
    const { password } = form;  
    if (password !== undefined) {
    setPass(false)
  } 
  return pass
  }

  const handlePasswordConfirmation = (e) => {
    //la e hace refencia al input de donde se ejecuta la funcion
    setpasswordConfirmation(e.target.value); //aca vemos el valor de ese input
  };

  useEffect(() => {       // Evalua cambios que se hagan en passwordConfirmation. Si algo cambia hago un destructuring de form, es decir, saco lo que me interesa de form, en este caso password, que es el name del input de contraseña
    
    const { password } = form; 
    setareEquals(password === passwordConfirmation);
    validPass()
  }, [passwordConfirmation, pass]);

  const handleSubmit = (e) => {
    // se va a encargar de atrapar el envio del formulario
    e.preventDefault();     // Este evento lo que hace es evitar que no se refresque la pagina 
    console.log(form);
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input                  // Este es el input que va a ser atrapado por el json en el archivo Custom.hooks.js
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}    // onChange va a estar atento a la escucha de cambios en el input. Y llamo a la funcion handleChanges  que es la que contiene los valores del formulario 
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Clave"
              name="password" //con esto se va a ir generando el json que mandamos a la api porq asi lo armamos en el hook
              onChange={handleChanges}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input
              // no le ponemos name porque no nos interesa mandarla a la api, la contraseña se manda del primer input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation} // Llamo a la funcion handlePasswordConfirmation de la linea 27
            />
            { !areEquals && (       // En caso de que si sean iguales las contraseñas pongo esta condicion para que el cartel  Las claves no son iguales desaparezca. En caso de que la contraseña no son iguales me sale un cartel diciendome  Las claves no son iguales. 
              <div className="form-text list-group-item-danger">
                Las claves no son iguales
              </div>
            )}
          </div>
          <button
            disabled={!areEquals || pass}     // Esto hace que en aso de que las dos contraseñas no cincidan entre si que el boton de registrarme no aparezca para apretarlo 
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}      // Le agrego este evento al submit que puse en la liea de arriba. Va a llamar a handleSubmit
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};
