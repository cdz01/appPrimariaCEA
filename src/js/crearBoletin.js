import { pushAndSaveBoletin } from '../modules/Storage.js'
import { showTable } from './grado.js'

const optionsToast = {
    animation: true,
    delay: 3000
}

function handleCearBoletin(e) {
    e.preventDefault()

    const data = {
        nombre: document.querySelector("#floatingNombre").value,
        apellido: document.querySelector("#floatingApellido").value,
        calif: document.querySelector("#fieldCalif").value,
    }

    const grado = JSON.parse(sessionStorage.getItem('gradoSelected')).grado;
    const seccion = JSON.parse(sessionStorage.getItem('gradoSelected')).seccion;

    pushAndSaveBoletin(grado, seccion, data);

    showToast();

    setTimeout(() => {
        showTable();
    }, 1500);
}

export function showToast() {
    const toastElement = document.querySelector("#liveToast")
    const toast = new bootstrap.Toast(toastElement, optionsToast)
    toast.show();
}

function toasty() {
    const toastElement = document.querySelector("#liveToast")
    const toast = new bootstrap.Toast(toastElement, optionsToast)
    toast.show();
}

function handleClickListCalif(e) {
    const califText = e.target.innerText;

    document.querySelector("#fieldCalif").value = califText;
}

document.querySelector("#btnSubmit").addEventListener('click', (e) => handleCearBoletin(e));
document.querySelector("#listCalif").addEventListener('click', (e) => handleClickListCalif(e))

