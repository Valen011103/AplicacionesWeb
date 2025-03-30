const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botonBasico');
const botonClear = document.getElementById('boton-clear');
const botonClearIcono = document.getElementById('boton-clear-icono');

// Mostrar números en pantalla
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        if (pantalla.textContent === '0') {
            pantalla.textContent = boton.textContent;
        } else {
            pantalla.textContent += boton.textContent;
        }
    });
});

// Limpiar pantalla con el botón "C"
botonClear.addEventListener('click', () => {
    pantalla.textContent = '0';
});

botonClearIcono.addEventListener('click', () => {
    let actual = pantalla.textContent;

    if (actual.length <= 1) {
        pantalla.textContent = '0';
    } else {
        pantalla.textContent = actual.slice(0, -1);
    }
});