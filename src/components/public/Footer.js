import React from 'react'
import { useState } from 'react'

export const Footer = ()=> {        // Cuando llame a footer se va renderizar todo el archivo JSX que contiene el footer

const [click, setClick] = useState(0);      // Esto es un Hook.El useState lo pongo en 0 para que arranque a contar desde 0 .Lo use para crear un contador a las veces que alguien presiona sobre la imaGen en movimiento que gira. En const esta compuesta por un arrays de dos variables que en este caso las llame clicks y setClicks. En un useState la segunda variable  q en este caso la llame setClicks es la que va a tener la funcinalidad siempre de cambiar la primera variable que tengo osea clicks en este caso

const sumarClicks = () => {
  setClick(click + 1)
}
const restarClicks = () => {
  setClick(click - 1)
}

const year = new Date().getFullYear();      // Lo uso para cambiar la fecha actual que me aparece en el footer de la pagina
const companyName = "Apigera";

const handleClick = ()=>{   // Esta funcion significa que atrapa en base a tal .
setClick(click + 1);      // A clicks le sumo una unidad y va a llamar a handleClick cada vez que hago click en la imagen y va a aparecer en la pagina la cantidad de lcicks que le hice
}

  return (    
  <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; {year} {companyName} Click ={ click} </p>    {/*  Donde antes estaba la fecha del año escrita a mano la borre y puse {year} llamando a la funcion que habia creado antes arriba llamada   const year = new Date().getFullYear();  asi cada año que pase se va actualizando solo con la fecha actual */}
                                                                                {/*Donde antes estaba la lapabra compani inc la elimine y huce lo mismo de llamar a la funcion poniendo {companyName} asi la cambia automaticamente  con la funcion const companyName = "EGG Education"; que puse arriba.   */}
                                                                                {/* La variable Clicks significa que va a mostrar la cantidad de veces que se hace click. Y adentro de las llaves llamo a la funcion que tenia antes llamada clicks */}
    
    
            <button className="btn btn-sm btn-outline-success" onClick={sumarClicks}>Sumar clicks</button>
            <button className="btn btn-sm btn-outline-danger" onClick={restarClicks}>Restar clicks</button>
    <span
    
    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-md-0 me-md-auto link-dark text-decoration"
    onClick={handleClick}   //Esta funcion esta adentro del span que contiene la imagen giratoria. Esta funcion significa que cada vez que yo haga click sobre la imagen giratoria esta va a llamar a la funcion handleClick y va a mostrar un mensaje 
>
  <img
  className="App-logo"
  src="mr increible meme.png"
  alt="mr increible meme-giratorio"
  
  />
  </span>

  
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
    </ul>
  </footer>
</div>

  )
}