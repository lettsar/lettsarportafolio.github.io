import { ajax } from "../helpers/ajax.js";
import { loader, loaderRemove } from "./loader.js";



const $conteiner = document.getElementById("conteiner")

function creaDiv(url){
const $div= document.createElement("div");
$div.id="PopUp"
$div.classList.add("PopUp");
$div.innerHTML=`<div>
<i class="fa-solid fa-circle-xmark btn-close"></i>
</div>
<img src="./app/assets/img/certificado/${url}" alt="" >  `

   return $div;
}

export const searchClick =    e => {        
   document.addEventListener("click", e=>{
      const $dvPop = document.getElementById("PopUp");
      if(e.target.matches(".btn-url-clic *")){
         loader()
         const dt = e.target.parentNode.dataset.link;   
          ajax({
             url:"https://lettsar.github.io/lettsarportafolio.github.io/app/helpers/dataclick.json",
             CbSuccess: res=>{  
           let dato= res.find(el => el.id ==dt) 
           if(dato){
           $conteiner.appendChild(creaDiv(dato.alink));
            console.log(dato.alink)  
            loaderRemove()       
           }
           }
          })
          
        
      }if(e.target.matches(".btn-close")){
 
         $dvPop.remove()
        
     
      
       
      }
   
     
   })
   };
