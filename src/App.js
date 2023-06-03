import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";         // Importo route
import { Footer } from './components/public/Footer';
import Main from './components/public/Main';
import {Navbar} from './components/public/Navbar';
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';

function App() {
 
  return (      // Lo que quiera poner adentro del return lo tengo que poner adentro de un <div> por que el return solo puede retornar un solo html.  Todo el codigo que pegue abajo lo saque de la pagina de bootstrap en examples. Es el navbar de color negro
    <div>      


   <Navbar />           {/*Lo que hago aca es llamar al archivo Navbar que cree. Por que todo el codigo que tenia aca cree un archivo que se llama Navbar y lo mande ahi */}
  
 
  <Routes>           {/* Llamo a Switch y va a alternar entre mostrar un componente o otro  de los que puse abajo dependiendo de la ruta de url*/}

<Route exact path={""} element={<Main/>}/>
<Route exact path="/detail/:id" element={<Detail/>}/>
<Route exact path={"/user-form"} element={<UserForm/>}/> 
</Routes>
  
   <Footer />        {/*Lo que hago es llamar al Footer.js que cree y muestro todo su contenido */}

       </div>
    
    );        
}

export default App;
