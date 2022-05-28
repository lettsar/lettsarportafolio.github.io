export function loader(){
const $imgloader = document.createElement("div");
$imgloader.src="./app/assets/img/loader-lettsar.gif";
$imgloader.alt="Cargando";
$imgloader.classList.add("imgloader")
$imgloader.id="imgloader"
return $imgloader;

}