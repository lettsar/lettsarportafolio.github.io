const valor ="jajajaja"; 

export function searchClick(){        
   document.addEventListener("click", e=>{
      if(e.target.matches(".btn-url-cap *")){
         const dt = e.target;
          alert("SIIIII")
          console.log(dt.hasAttribute("data-link"))
          
        
      }
   
   })
   };