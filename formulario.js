let txtNombre = document.getElementById("txtNombre");
let txtTelefono = document.getElementById("txtTelefono");
let txtComentario = document.getElementById("txtComentario");
let ltaErrores = document.getElementById("ltaErrores"); 
let ltaMensajes = document.getElementById("ltaMensajes");

function validar() {
    ltaMensajes.innerHTML = "";
    ltaErrores.innerHTML = "";
    txtNombre.classList.remove("error");
    txtTelefono.classList.remove("error");
    txtComentario.classList.remove("error");

    let errores = [];
    let regex_tel = /^[1-9]\d{9}$/;
    let nbre = txtNombre.value.trim();

    if (nbre.length === 0) {
        errores.push("Falta ingresar su nombre");
        txtNombre.classList.add("error");
    }

    if (txtTelefono.value.length > 10) {
        errores.push("El teléfono que puso es muy largo. :(");
        txtTelefono.classList.add("error");
    }

    if (txtTelefono.value.length > 0 && !regex_tel.test(txtTelefono.value)) {
        errores.push("El teléfono que puso empieza con 0 o no llega a los 10 dígitos.");
        txtTelefono.classList.add("error");
    }

    for (let err of errores) {
        let li = document.createElement("li");
        li.innerHTML = err;
        ltaErrores.appendChild(li);
    }

    if (errores.length === 0) {
        let li = document.createElement("li");

        if (txtTelefono.value.length > 0) {
            li.innerHTML =` Joya ${nbre}, te vamos a hablar por whatsapp al ${txtTelefono.value}`;
        }

        ltaMensajes.appendChild(li);
        document.forms[0].reset();

    }

    return false;

}