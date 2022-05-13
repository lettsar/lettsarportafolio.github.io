export function Card(props) {
    let {img,ico,text} = props
    const $card = document.createElement("section");
    $card.classList.add("conteiner-content");
    $card.innerHTML = `
    <div class="cont-content-card1">
    <img src="./app/assets/img/Card/${img}.jpg" alt="" >
    <div class="card-footer">
        ${ico}
        ${text}</div>
</div>       
<div class="cont-content-card2">
    <img src="./app/assets/img/Card-2.jpg"  alt="" >
    <div class="card-footer">
        <i class="fa-solid fa-pen-nib"></i>
       Diseño Grafico UI</div>
</div>
</div>       
<div class="cont-content-card3">
   <img src="./app/assets/img/Card-3.jpg"  alt="" >  
   <div class="card-footer">
    <i class="fa-solid fa-server"></i>
   Gestion TI</div>
</div>        
</div>       
    `;
    return $card;
}

