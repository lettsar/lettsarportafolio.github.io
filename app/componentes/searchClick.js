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

export const searchClick = e => {        
   document.addEventListener("click", e=>{
      const $dvPop = document.getElementById("PopUp");
      if(e.target.matches(".btn-url-clic *")){
         const dt = e.target.parentNode.dataset.link;   
          ajax({
             url:"http://localhost:5555/btn-url-cap",
             CbSuccess: res=>{  
           let dato= res.find(el => el.id ==dt) 
           if(dato){
          
           $conteiner.appendChild(creaDiv(dato.alink));
            console.log(dato.alink)
         
           }else{
              console.log(`NO Encontrado ${dt}`)
           }
           }
          })
          
        
      }if(e.target.matches(".btn-close")){
         loader()
         $dvPop.remove()
         loaderRemove()
      
       
      }
   
     
   })
   };