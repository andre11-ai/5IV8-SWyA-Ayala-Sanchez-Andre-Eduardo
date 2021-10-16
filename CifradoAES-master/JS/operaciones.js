function cifrar() {
    let cadena = document.getElementById("mensaje").value;
    const clave = document.getElementById("llave").value;

    var cifrado = CryptoJS.AES.encrypt(cadena, clave);
    var descifrado = CryptoJS.AES.decrypt(cifrado, clave);

    document.getElementById("moriginal").innerHTML = cadena;
    document.getElementById("mcifrado").innerHTML = cifrado;
    document.getElementById("resultados").innerHTML = descifrado;
    document.getElementById("moriginal").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
}

function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
    var elemento = document.getElementById('mensaje');
    elemento.innerHTML = contenido;
}

document.getElementById('archivo').addEventListener('change', leerArchivo, false);
function para128() {
    var cadena = document.getElementById("mensaje").value;
    var clave = document.getElementById("llave").value;
    if (cadena == "" || clave == "") {
        swal("Error", "Campos vacios", "error");
    } else if (clave.length < 16 || clave.length > 256) {
        swal("Error", "La llave debe tener más de 16 y menos de 256 caracteres", "error");
    } else {
        cifrar();
        leerArchivo();
        descargar();
    }
}

document.getElementById('archivo').addEventListener('change', leerArchivo, false);
function para192() {
    var cadena = document.getElementById("mensaje").value;
    var clave = document.getElementById("llave").value;
    if (cadena == "" || clave == "") {
        swal("Error", "Campos vacios", "error");
    } else if (clave.length < 24 || clave.length > 256) {
        swal("Error", "La llave debe tener más de 16 y menos de 256 caracteres", "error");
    } else {
        cifrar();
        leerArchivo();
        descargar();
    }
}

document.getElementById('archivo').addEventListener('change', leerArchivo, false);
function para256() {
    var cadena = document.getElementById("mensaje").value;
    var clave = document.getElementById("llave").value;
    if (cadena == "" || clave == "") {
        swal("Error", "Campos vacios", "error");
    } else if (clave.length < 32 || clave.length > 256) {
        swal("Error", "La llave debe tener más de 16 y menos de 256 caracteres", "error");
    } else {
        cifrar();
        leerArchivo();
        descargar();
    }

}

function descifrado() {
    let hj = document.getElementById("mensaje").value;
    const nmbh = document.getElementById("llave").value;
    var descifrado = CryptoJS.AES.decrypt(hj, nmbh);
    if (hj == "" || nmbh == "") {
        swal("Error", "Campos vacios", "error")
    } else {
        document.getElementById("resultados").innerHTML = descifrado;
        document.getElementById("mcifrado").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
    }
}
