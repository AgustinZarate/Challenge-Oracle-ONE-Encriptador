const textarea = document.getElementById('textarea');

//Evita que al apretar la tecla ENTER realice un salto de linea
textarea.addEventListener("keydown", (evento) => {
    if (evento.keyCode === 13) {
    evento.preventDefault();
    }
});

//Captura la tecla ENTER para mejorar la usabilidad del usuario y de esta manera agilizar la encriptacion o desenciptacion
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        encriptar()
    }
});

//Con esta funcion logramos que el usuario siempre tenga habilitada la funcion para escribir en el texarea independientemente de que haga o deje de hacer, y de esta forma mejorar la experiencia
const enfocarTextArea = () => {textarea.focus();}
enfocarTextArea()

const cardContenido = document.getElementById('card-contenido');
const areaEncriptada = document.getElementById('texto-encriptado');
const btnCopiar = document.getElementById('btn-copiar');
const btnLimpiar = document.getElementById('btn-limpiar');

//Funcion para cambiar el display de el elemnto. Como primer parametro colocar el nodo en cuestion y colocar en string el valor a elegir
const display = (nodo, valor) =>{
    nodo.style.display = valor;
}

//Una vez que el usuario envia el texto a enciptar o desenciptar cambiamos los display para mostrar en pantalla el resultado
const cambiarVista = () => {
    display(cardContenido, "none");
    display(areaEncriptada, "block");
    display(btnCopiar, "block");
    display(btnLimpiar, "block");
}
//El usuario puede limpiar el area de texto enciptada o desencriptada para volver a ocultarlo
const limpiarVista = () => {
    display(cardContenido, 'flex');
    display(areaEncriptada, 'none');
    display(btnCopiar, 'none');
    display(btnLimpiar, 'none');
} 

//Funcion para eliminar una clase, pasada por parametro en forma de string, de un nodo determinado pasado por parametro
const removerClase = (nodo, clase) => {
    nodo.classList.remove(clase);
}

//Con esta funcion cambiamos el contenido de un nodo, el primer parametro debe ser el nodo en cuestrion y el segundo parametro el contenido en forma de string
const cambiarContenido = (nodo, contenido) => {
    nodo.innerHTML = contenido
}

//Agrega una clase al nodo adjuntado en el primer parametro, con el nombre adjuntado en forma de string en segundo parametro 
const agregarClase = (nodo, clase) => {
    nodo.classList.add(clase);
}

//La funcion remplaza aquellas vocales que esten escritas como caracteres especilaes y las devuelve sin ellas
const filtrarTexto = () => {
    let texto = textarea.value.toLowerCase()
    let textoFiltrado = texto.replace(/é/img,'e');
    textoFiltrado = textoFiltrado.replace(/í/img,'i');
    textoFiltrado = textoFiltrado.replace(/á/img,'a');
    textoFiltrado = textoFiltrado.replace(/ó/img,'o');
    textoFiltrado = textoFiltrado.replace(/ú/img,'u');
    return textoFiltrado
}

//La funcion Encriptar, primero cambia la vista del usuario par mostrar el area de texto desencriptada y procede, primero poner todas las letras en minusculas y luego buscar coincidencias para remplazar las vocales por los valores nuevos y para finalizar pinta el string en pantalla y dos botones
const encriptar = () => {
    cambiarVista()
    let textoEncriptado = filtrarTexto().replace(/e/img,'enter');
    textoEncriptado = textoEncriptado.replace(/i/img,'imes');
    textoEncriptado = textoEncriptado.replace(/a/img,'ai');
    textoEncriptado = textoEncriptado.replace(/o/img,'ober');
    textoEncriptado = textoEncriptado.replace(/u/img,'ufat');
    cambiarContenido(areaEncriptada, textoEncriptado);
    removerClase(btnCopiar, 'completad');
    cambiarContenido(btnCopiar, 'Copiar');
    enfocarTextArea();
    
}

//La funcion Desenciptar, primero cambia la vista del usuario par mostrar el area de texto desencriptada y procede, primero poner todas las letras en minusculas y luego buscar coincidencias para remplazar los valores por las vocales nuevos y para finalizar pinta el string en pantalla y dos botones
const desencriptar = () => {
    cambiarVista()
    let textoDesencriptado = filtrarTexto().replace(/enter/img,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/img,'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/img,'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/img,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/img,'u');
    cambiarContenido(areaEncriptada, textoDesencriptado);
    removerClase(btnCopiar, "completado");
    cambiarContenido(btnCopiar, 'Copiar');
    enfocarTextArea();
}

//utiliza el API del portapapeles (navigator.clipboard) para copiar el contenido de un elemento de texto encriptado a la memoria del sistema. 
const copiar = () => {
    navigator.clipboard.writeText(areaEncriptada.textContent)
    agregarClase(btnCopiar, 'completado')
    cambiarContenido(btnCopiar, '');
    enfocarTextArea();
}


//realiza varias acciones para limpiar la interfaz de usuario después de encriptar un área de texto.
const limpiar = () => {
    cambiarContenido(areaEncriptada, '');
    limpiarVista()
    removerClase(btnCopiar, "completado");
    cambiarContenido(btnCopiar, 'Copiar');
    enfocarTextArea();
}

//Limpia área de texto para que usuario pueda volver a llenarlo.
const limpiarEncriptador = () =>{
    textarea.value = ''
    enfocarTextArea();
}