'use strict';

// ====================== CONTACTO ======================
console.log("Script cargado correctamente");
document.addEventListener('DOMContentLoaded', () => {
    const contactoNombre = document.getElementById('contactoNombre');
    const contactoApellidos = document.getElementById('contactoApellidos');
    const contactoCorreo = document.getElementById('contactoCorreo');
    const contactoTelefono = document.getElementById('contactoTelefono');
    const contactoFecha = document.getElementById('contactoFecha');
    const contactoRadioH = document.getElementById('contactoRadioH');
    const contactoRadioM = document.getElementById('contactoRadioM');
    const contactoAsunto  = document.getElementById('contactoAsunto');
    const contactoMensaje = document.getElementById('contactoMensaje');

    [contactoNombre, contactoApellidos, contactoCorreo, contactoTelefono, contactoFecha, contactoRadioH, contactoRadioM, contactoAsunto].forEach(element => {
        const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
        element.addEventListener('input', (event) => {
            var formularioCorrecto = true;
            if ((element === contactoNombre || element === contactoApellidos) &&
                event.target.value.length === 0 || !regex.test(event.target.value)) formularioCorrecto = false;
            else if (element === contactoCorreo &&
                (!event.target.value.includes("@") || !event.target.value.includes(".") || event.target.value.length === 0))
                formularioCorrecto = false;
            else if (element === contactoTelefono) {
                if (event.target.value.length === 0 || !event.target.value.startsWith("+")) formularioCorrecto = false;
                try {
                    const contactoTelefonoSintaxis = event.target.value.split(' ');
                    console.log(contactoTelefonoSintaxis, contactoTelefonoSintaxis.length);
                    if (contactoTelefonoSintaxis.length !== 4 ||
                        contactoTelefonoSintaxis[0].length !== 2 ||
                        contactoTelefonoSintaxis[1].length !== 2 ||
                        contactoTelefonoSintaxis[2].length !== 2) formularioCorrecto = false; // Preguntar porque no se pone en azul
                } catch (e) { formularioCorrecto = false; }
            }
            else if (element === contactoFecha && event.target.value === "") formularioCorrecto = false;
            else if (element === contactoRadioH && !contactoRadioH.checked() || element === contactoRadioM && !contactoRadioM.checked()) formularioCorrecto = false;
            else if (element === contactoAsunto && contactoAsunto.value === "") formularioCorrecto = false; // Preguntar porque no se pone en azul
            else if (element === contactoMensaje && event.target.value.length < 50) formularioCorrecto = false;


            element.style.borderColor = (formularioCorrecto) ? "#028090" : "red";
        });
    });
});

