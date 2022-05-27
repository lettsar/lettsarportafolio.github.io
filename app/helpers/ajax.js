

export async function ajax(props){
    let {url,method,CbSuccess,data} = props    
    if(url.includes("habilidad")){       
        await fetch(url)
        .then(res => res.ok ? res.text(): Promise.reject(res))        
        .then(json => {
            CbSuccess(json)        
        })
        .catch(err =>{
            let message=err.statusText || "Ocurrio Un error";
        /*     document.getElementById("main").innerHTML=`<DIV class="error">
            <p>${err.status}:${message}</p>
            </DIV>`;
            document.querySelector(".loader").style.display="none"; */
          console.log(err)
        })
    }else{
        
        await fetch(url,props)
        .then(res => res.ok ? res.json(): Promise.reject(res))
        
        .then(json => {
            CbSuccess(json)        
        })
        .catch(err =>{
            let message=err.statusText || "Ocurrio Un error";
            document.getElementById("main").innerHTML=`<DIV class="error">
            <p>${err.status}:${message}</p>
            </DIV>`;
            document.querySelector(".loader").style.display="none";
          console.log(err)
        })
    }

    
}
