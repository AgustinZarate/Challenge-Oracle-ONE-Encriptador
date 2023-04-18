document.getElementById('textarea').focus();

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
    document.getElementById('btn-copiar').classList.remove("completado");
    document.getElementById('btn-copiar').innerHTML = 'Copiar'
    document.getElementById('textarea').focus();
    
}

document.getElementById('textarea').addEventListener("keydown", (evento) => {
    if (evento.keyCode === 13) {
    evento.preventDefault();
    }
  });

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        encriptar()
    }
});

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
    document.getElementById('btn-copiar').classList.remove("completado");
    document.getElementById('btn-copiar').innerHTML = 'Copiar'
    document.getElementById('textarea').focus();
}

const copiar = () => {
    navigator.clipboard.writeText(document.getElementById('texto-encriptado').textContent)
    document.getElementById('btn-copiar').classList.add("completado");
    document.getElementById('btn-copiar').innerHTML = ''
    document.getElementById('textarea').focus();
}

const limpiar = () => {
    document.getElementById('texto-encriptado').innerHTML = ''
    document.getElementById('card-contenido').style.display = "flex";
    document.getElementById('texto-encriptado').style.display = "none";
    document.getElementById('btn-copiar').style.display = "none";
    document.getElementById('btn-limpiar').style.display = "none";
    document.getElementById('btn-copiar').classList.remove('completado');
    document.getElementById('btn-copiar').innerHTML = 'Copiar'
    document.getElementById('textarea').focus();
}

const limpiarEncriptador = () =>{
    document.getElementById('textarea').value = ''
}