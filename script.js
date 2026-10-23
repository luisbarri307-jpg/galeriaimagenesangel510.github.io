function agregaImagen() {
    var ruta = document.getElementById('imagenURL').value.trim().replace(/\\/g, '/');
    var pie = document.getElementById('pieFoto').value.trim();
    var galeria = document.getElementById('galeriaImagenes');
    var mensaje = document.getElementById('mensajeGaleria');

    mensaje.textContent = '';
    mensaje.className = 'mensaje';

    if (!ruta || !pie) {
        mensaje.textContent = 'Escribe la ruta de la imagen y su pie de foto.';
        mensaje.classList.add('error');
        return;
    }

    if (!/^(https?:|data:|blob:)/i.test(ruta) &&
        !ruta.includes('/') &&
        /\.(jpe?g|png|gif|webp|svg)$/i.test(ruta)) {
        ruta = 'img/' + ruta;
    }

    var div = document.createElement('div');
    var img = document.createElement('img');
    var p = document.createElement('p');

    div.className = 'tarjeta';
    img.alt = pie;
    p.textContent = pie;

    img.onload = function () {
        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);
        document.getElementById('imagenURL').value = '';
        document.getElementById('pieFoto').value = '';
        mensaje.textContent = 'Imagen agregada a la galería.';
    };

    img.onerror = function () {
        mensaje.textContent = 'No se encontró la imagen. Usa una ruta como img/lago.jpg o pega la URL directa de una imagen.';
        mensaje.classList.add('error');
    };

    img.src = ruta;
}
