//CALCULO DEL IMC
var pesoInicial=60;
var stepPeso=5;
var incrementoFinalPeso=20;
var alturaInicial=1.65;
var stepAltura=0.05;
var finAltura=1.95;
console.log("ALTURA    PESO     IMC");
console.log("----------------------");
for (let contadorAltura = alturaInicial; contadorAltura <= finAltura; contadorAltura=contadorAltura+stepAltura) {
    for (let contadorPeso = pesoInicial; contadorPeso <= (pesoInicial+incrementoFinalPeso); contadorPeso=contadorPeso+stepPeso) {
        console.log(" "+contadorAltura+"    "+contadorPeso+"    "+(contadorPeso/(contadorAltura*contadorAltura)));
    }
    console.log("ALTURA    PESO     IMC");
    console.log("----------------------");
    pesoInicial=pesoInicial+stepPeso;
}