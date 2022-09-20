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
}

function getDatosUsuario() {
    nombreValue=sessionStorage.getItem('nombre');
    edadValue=sessionStorage.getItem('edad');
    emailValue=sessionStorage.getItem('email');
    serie1Value=sessionStorage.getItem('serie1');
    serie2Value=sessionStorage.getItem('serie2');
    serie3Value=sessionStorage.getItem('serie3');
}

/**
 * Comprueba si existe nick en el sessionStorage
 */
 function comprobacionDatosUsuario(){
    if(nick==null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}