import { loader } from "./componentes/loader.js";
import { Router } from "./componentes/Router.js";

export function App(){
    const d = document
    
    const $conteiner= d.getElementById("conteiner")

    $conteiner.appendChild(loader())

    Router();   
 
}