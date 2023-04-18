/*
¡Bienvenidas y bienvenidos a nuestro primer desafío!

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, 
así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la 
encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"

Requisitos:
    *Debe funcionar solo con letras minúsculas
    *No deben ser utilizados letras con acentos ni caracteres especiales
    *Debe ser posible convertir una palabra para la versión encriptada también devolver
    una palabra encriptada para su versión original.

Por ejemplo:
    "gato" => "gaitober"
    gaitober" => "gato"

La página debe tener campos parainserción del texto que será encriptado o desencriptado, 
y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

Extras:
    Un botón que copie el texto encriptado/desencriptado para la sección de transferencia,
    o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de
    las aplicaciones.

Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a 
trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

    *La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
    *En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. 
    Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
    *En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste 
    parar por algún motivo.
    *Por fin, en la columna Concluido estarán los elementos ya concluidos.
    *El Trello es una herramienta de uso individual para que puedas controlar 
    el progreso de tus actividades, pero no será evaluada.

Buen proyecto!
*/


const encriptar = () => {
    document.getElementById('card-contenido').style.display = "none";
    document.getElementById('texto-encriptado').style.display = "block";
    document.getElementById('btn-copiar').style.display = "block";
    document.getElementById('btn-limpiar').style.display = "block";
    let texto = document.getElementById('textarea').value.toLowerCase()
    let textoEncriptado = texto.replace(/e/img,'enter');
    textoEncriptado = textoEncriptado.replace(/i/img,'imes');
    textoEncriptado = textoEncriptado.replace(/a/img,'ai');
    textoEncriptado = textoEncriptado.replace(/o/img,'ober');
    textoEncriptado = textoEncriptado.replace(/u/img,'ufat');
    document.getElementById('texto-encriptado').innerHTML = textoEncriptado;
}

const desencriptar = () => {
    document.getElementById('card-contenido').style.display = "none";
    document.getElementById('texto-encriptado').style.display = "block";
    document.getElementById('btn-copiar').style.display = "block";
    document.getElementById('btn-limpiar').style.display = "block";
    let texto = document.getElementById('textarea').value.toLowerCase()
    let textoDesencriptado = texto.replace(/enter/img,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/img,'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/img,'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/img,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/img,'u');
    document.getElementById('texto-encriptado').innerHTML = textoDesencriptado;

}

const copiar = () => {
    navigator.clipboard.writeText(document.getElementById('texto-encriptado').textContent)
}

const limpiar = () => {
    document.getElementById('texto-encriptado').value = ''
    document.getElementById('card-contenido').style.display = "flex";
    document.getElementById('texto-encriptado').style.display = "none";
    document.getElementById('btn-copiar').style.display = "none";
    document.getElementById('btn-limpiar').style.display = "none";

}