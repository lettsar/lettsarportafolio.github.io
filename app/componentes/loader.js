export function loader(){
const $loader = document.createElement("img");
$loader.src="./app/assets/img/loader-lettsar.gif";
$loader.alt="Cargando";
$loader.classList.add("loader")
return $loader;

}