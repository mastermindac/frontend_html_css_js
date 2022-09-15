//Ejemplo sobre carga de JS
var progreso=".";
console.log(document.getElementById("p2").innerText);
for (let index = 0; index < 10000000; index++) {
    progreso="."+progreso;
}
console.log("Script cargado");
