'use strict';

// ====================== CONTACTO ======================
console.log("Script cargado correctamente");
document.addEventListener('DOMContentLoaded', () => {
    const contactoNombre = document.getElementById('contactoNombre');

    contactoNombre.addEventListener('input', (event) => {
        if (event.target.value.includes("dd")) contactoNombre.style.borderColor = "red";
    });
});

