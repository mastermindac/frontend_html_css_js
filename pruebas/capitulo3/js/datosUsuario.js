/*
* JS Para la gestión de los datos de usuario
*
* @author Paco Gomez <paco@mastermind.ac>
* @link https://github.com/mastermindac/frontend_html_css_js GitHub
*/
var nombreValue;
var emailValue;
var edadValue;
var serie1Value;
var serie2Value;
var serie3Value;
var errorValue;
var geolocalizacionTxt;

//sessionStorage

/**
 * Almacenar los datos en el sessionStorage
 * @param  {} nombre
 * @param  {} edad
 * @param  {} email
 * @param  {} serie1
 * @param  {} serie2
 * @param  {} serie3
 */
function datosUsuario(nombre, edad, email,serie1,serie2,serie3) {
    sessionStorage.setItem('nombre',nombre.value);
    sessionStorage.setItem('edad',edad.options[edad.selectedIndex].text);
    sessionStorage.setItem('email',email.value);
    sessionStorage.setItem('serie1',serie1.options[serie1.selectedIndex].text);
    sessionStorage.setItem('serie2',serie2.options[serie2.selectedIndex].text);
    sessionStorage.setItem('serie3',serie3.options[serie3.selectedIndex].text);
    sessionStorage.setItem('geolocalizacionTxt',geolocalizacionTxt);
}

function getDatosUsuario() {
    nombreValue=sessionStorage.getItem('nombre');
    edadValue=sessionStorage.getItem('edad');
    emailValue=sessionStorage.getItem('email');
    serie1Value=sessionStorage.getItem('serie1');
    serie2Value=sessionStorage.getItem('serie2');
    serie3Value=sessionStorage.getItem('serie3');
}

//localStorage
function historicoUsuarios(nombre, serie1,serie2,serie3){
    let seleccionesStorage=localStorage.getItem('selecciones');
    let selecciones;
    if(historicoStorage==null){
        selecciones=[];
    }else{
        selecciones=JSON.parse(seleccionesStorage);
    }
    let registroUsuario={
        usuario:nick.value,
        serie1:serie1.value,
        serie2:serie2.value,
        serie3:serie3.value,
        fecha:Date.now()
    }
    selecciones.push(registroUsuario);
    localStorage.setItem('selecciones',JSON.stringify(selecciones));
}

/**
 * Comprueba si existe nick en el sessionStorage
 */
 function comprobacionDatosUsuario(){
    if(nombreValue==null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}

/**
 * Calcula la geolocalizacion del usuario y la almacena en geolocalizacionTxt
 */
 function datoGeolocalizacion(){
    if(!navigator.geolocation){
        geolocalizacionTxt="El navegador no es compatible con API Geolocation";
    }else{
        navigator.geolocation.getCurrentPosition(
            //Exito
            (position)=>{geolocalizacionTxt='Latitud:'+position.coords.latitude+',longitud:'+position.coords.longitude},
            //Error
            ()=>{geolocalizacionTxt="La geolocalizacion no se ha podido realizar";}
        )
    }
}