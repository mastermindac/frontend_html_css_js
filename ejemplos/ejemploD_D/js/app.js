/*
* Ejemplo sobre Drag&Drop
*
* @author Paco Gomez <paco@mastermind.ac>
* @link https://github.com/mastermindac/frontend_html_css_js GitHub
*/

//Capturamos los dos objetos que vamos a usar
const objeto = document.getElementById("objeto");
const contenedor = document.getElementById("contenedor");

//Eventos de objeto movido
objeto.addEventListener('dragstart',
    event=>{console.log("El objeto comienza a moverse");}
);
objeto.addEventListener('dragend',
    event=>{console.log("El objeto deja de moverse");}
);
/*
objeto.addEventListener('drag',
    event=>{console.log("El objeto se esta moviendo");}
);
*/
//Eventos sobre contenedor
contenedor.addEventListener('dragenter',
    event=>{console.log("El objeto entra en el contenedor");}
);
contenedor.addEventListener('dragover',
    event=>{
        event.preventDefault();
        //console.log("El objeto esta moviendose en el contenedor");
    }
);

contenedor.addEventListener('drop',
    event=>{console.log("El objeto se suelta en el contenedor");}
);