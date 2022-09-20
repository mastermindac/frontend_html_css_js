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
    sessionStorage.setItem('edad',edad.value);
    sessionStorage.setItem('email',email.value);
    sessionStorage.setItem('serie1',serie1.value);
    sessionStorage.setItem('serie2',serie2.value);
    sessionStorage.setItem('serie3',serie3.value);
}

