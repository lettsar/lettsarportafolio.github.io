export function loader(){
const $conteiner = document.getElementById("conteiner")
const $imgloader = document.createElement("div");
$imgloader.src="./app/assets/img/loader-lettsar.gif";
$imgloader.alt="Cargando";
$imgloader.classList.add("imgloader")
$imgloader.id="imgloader"
$conteiner.appendChild($imgloader)
return $conteiner;

}
export function loaderRemove(){
    const $loader= document.getElementById("imgloader");
    $loader.remove()
}