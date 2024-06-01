const imagenes = [
    'fotos/imagen1.jpg',
    'fotos/imagen2.jpg',
    'fotos/imagen3.jpg'
];

let diapositivaActual = 0;

function mostrarDiapositiva(indice) {
    const totalDiapositivas = imagenes.length;

    if (indice >= totalDiapositivas) {
        diapositivaActual = 0;
    } else if (indice < 0) {
        diapositivaActual = totalDiapositivas - 1;
    } else {
        diapositivaActual = indice;
    }

    // Actualizar el contenido del carrusel
    const carruselInterior = document.getElementById('carruselInterior');
    carruselInterior.innerHTML =` <div class="carrusel-elemento activo"><img src="${imagenes[diapositivaActual]}" alt="Imagen ${diapositivaActual + 1}"></div>`;
}

function siguienteDiapositiva() {
    mostrarDiapositiva(diapositivaActual + 1);
}

function anteriorDiapositiva() {
    mostrarDiapositiva(diapositivaActual - 1);
}

mostrarDiapositiva(diapositivaActual);                          