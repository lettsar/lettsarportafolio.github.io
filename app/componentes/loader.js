export function loader(){
const $conteiner = document.getElementById("conteiner")
const $imgloader = document.createElement("div");

$imgloader.alt="Cargando";
$imgloader.classList.add("imgloader")
$imgloader.id="imgloader"
$imgloader.innerHTML=`
<img src="./app/assets/img/loader-lettsar.gif"></img>"
`
$conteiner.appendChild($imgloader)
return $conteiner;

}
export function loaderRemove(){
    const $loader= document.getElementById("imgloader");
    $loader.remove()
}