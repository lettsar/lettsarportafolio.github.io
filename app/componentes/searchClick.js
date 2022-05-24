const valor ="jajajaja"; 

export function searchClick(){        
   document.addEventListener("click", e=>{
      if(e.target.matches(".btn-url-clic *")){
         const dt = e.target;         
          console.log(dt.parentNode.dataset.link)
          
        
      }
   
   })
   };