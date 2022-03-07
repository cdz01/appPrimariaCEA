import { enumsGrados, enumsSecciones, getGradoOfSeccion, saveEditedBoletin } from "../modules/Storage.js";
import { enumsSession } from '../modules/Enums.js'
import { showToast } from "./crearBoletin.js";


const stateGrado = {
    grado: '',
    seccion: ''
}

function getDataGrado() {
    const data = JSON.parse(sessionStorage.getItem('gradoSelected'))
    stateGrado.grado = data.grado;
    stateGrado.seccion = data.seccion;

}

// INICIALIZAR ESTADOS Y VARIABLES
getDataGrado();


// handlers
function handleCrearBoletin() {

}

export function showTable() {
    $("tbody").children().remove();

    const seccion = getGradoOfSeccion(stateGrado.grado, stateGrado.seccion);

    seccion.forEach((alumno, idx) => {
        const tr = document.createElement("tr");

        //confi al tr
        tr.addEventListener('click', e => handleRowClicked(e, alumno));
        tr.setAttribute("data-bs-toggle", "modal");
        tr.setAttribute("data-bs-target", "#accionModal");

        tr.innerHTML = `
                <td>${idx + 1}</td>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.calif}</td>
            `

        $('tbody').append(tr)
    });
}

function handleRowClicked(e, alumno) {
    sessionStorage.setItem("selectedAlumn", JSON.stringify(alumno));
    $("#alumnoModal").text(alumno.nombre + " " + alumno.apellido);

    // EDITAR. llenar los campos
    const currentAlumno = {
        nombre: JSON.parse(sessionStorage.getItem("selectedAlumn")).nombre,
        apellido: JSON.parse(sessionStorage.getItem("selectedAlumn")).apellido,
        calif: JSON.parse(sessionStorage.getItem("selectedAlumn")).calif,
    }

    document.querySelectorAll("#floatingNombre")[1].value = currentAlumno.nombre;
    document.querySelectorAll("#floatingApellido")[1].value = currentAlumno.apellido;
    document.querySelectorAll("#fieldCalif")[1].value = currentAlumno.calif;
}


//middlewares

function middModalFormEdit() {
    // CAMPO CALIF

    document.querySelectorAll("#listCalif")[1].addEventListener("click", e => {
        document.querySelectorAll("#fieldCalif")[1].value = e.target.innerText;
    });

    document.querySelectorAll("#btnSubmit")[1].addEventListener("click", e => {
        e.preventDefault();

        const nombre = document.querySelectorAll("#floatingNombre")[1].value;
        const apellido = document.querySelectorAll("#floatingApellido")[1].value;
        const calif = document.querySelectorAll("#fieldCalif")[1].value;

        const currentGrado = JSON.parse(sessionStorage.getItem(enumsSession.currentGrado));

        saveEditedBoletin(currentGrado.grado, currentGrado.seccion, {
            nombre: nombre,
            apellido: apellido,
            calif: calif
        });

        $("#accionModal").modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();

        showToast();

        setTimeout(() => {
            showTable();
        }, 500);
    })
}


//
$(document).ready(function () {

    $('#nav-title').text(`${stateGrado.grado}. Seccion: ${stateGrado.seccion}`);

    $('tbody').ready(function () {
        const storage = JSON.parse(localStorage.getItem('dataStorage'));

        const seccion = getGradoOfSeccion(stateGrado.grado, stateGrado.seccion);

        seccion.forEach((alumno, idx) => {
            const tr = document.createElement("tr");

            //confi al tr
            tr.addEventListener('click', e => handleRowClicked(e, alumno));
            tr.setAttribute("data-bs-toggle", "modal");
            tr.setAttribute("data-bs-target", "#accionModal");

            tr.innerHTML = `
                <td>${idx + 1}</td>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.calif}</td>
            `

            $('tbody').append(tr)
        });
    })

});

middModalFormEdit();