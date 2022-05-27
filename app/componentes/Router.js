import{ajax} from '../helpers/ajax.js'
import { barprogress } from './barProgress.js';
import { searchClick } from './searchClick.js';

const d=document;
const $conteiner = d.getElementById("conteiner") ;
const $conteinerapp = d.querySelector(".conteiner-app");
const $conteinercontent = d.querySelector(".conteiner-content")
const $root = d.getElementById("root");
const $dvPop = document.getElementById("PopUp");

//Validamos URL para cambiar CSS Grid

function searchquery(props){
let $url = props;

if($url === "#/" || $url === ""){
    $conteiner.classList.replace("g-conteiner-sec","g-conteiner");
    $conteinerapp.style.display="flex";
    $conteinercontent.style.display="flex";   

}else{
$conteiner.classList.replace("g-conteiner","g-conteiner-sec");
$conteinerapp.style.display="none";
$conteinercontent.style.display="none";
}
} 
searchClick()
//Segun URL renderizamos el Contenido
export async function Router(props){
    let {hash}= location;
  
    searchquery(hash)  

  if(!hash || hash==="#/"|| hash ==" "){     
                
    await ajax({
        url:'app/assets/recursoHtml/habilidad-home.html',
        CbSuccess: res=>{
          
            console.log(hash)
            $root.innerHTML=null;
            $root.innerHTML=res;    
            
        }
    })   
  
    }else if(hash==="#/experience"){       
        
        await  ajax({
            url:'app/assets/recursoHtml/habilidad-experiencia.html',
            CbSuccess: res=>{
              
                $root.innerHTML=null;
                $root.innerHTML=res;
            }
        })  
    }else if(hash==="#/training"){
        
        await   ajax({
            url:'app/assets/recursoHtml/habilidad-capacitaciones.html',
            CbSuccess: res=>{
              
                $root.innerHTML=null;
                $root.innerHTML=res;                
            }
        })
        
    }else if(hash==="#/frontend"){
        
        await   ajax({
            url:'app/assets/recursoHtml/habilidad-frontend.html',
            CbSuccess: res=>{
            
                $root.innerHTML=null;
                $root.innerHTML=res;                
            }
        })
    
    
    /* $root.appendChild(barprogress(dat)) */
       
    }else if(hash==="#/disenografico"){
        
        await   ajax({
            url:'app/assets/recursoHtml/habilidad-disenografico.html',
            CbSuccess: res=>{
           
                $root.innerHTML=null;
                $root.innerHTML=res;                
            }
        })
    }else if(hash==="#/gestionti"){
                
        await   ajax({
            url:'app/assets/recursoHtml/habilidad-gestionti.html',
            CbSuccess: res=>{
            
                $root.innerHTML=null;
                $root.innerHTML=res;   
               
            }
        })
    }else if(hash==="#/contact"){
        
        await   ajax({
            url:'app/assets/recursoHtml/habilidad-contacto.html',
            CbSuccess: res=>{
              
                $root.innerHTML=null;
                $root.innerHTML=res;                
            }
        })
    }
    
 
}
