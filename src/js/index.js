import { dataStorange, enumsGrados, enumsSecciones, getGradoOfSeccion, keysLocalStorage } from "../modules/Storage.js";

function handleSeccion() {
    const elements = document.querySelectorAll('.btn')
    elements.forEach(element => {
        element.addEventListener('click', function(e) {
            const gradoSelected = e.target.parentElement.children[0].innerText;
            const seccionSelected = e.target.innerText;

            if (e.target.type == undefined) return;
            
            sessionStorage.setItem('gradoSelected', JSON.stringify({
                grado: gradoSelected,
                seccion: seccionSelected
            }));

            window.location.href = './grado.html'
        })
    })
}

handleSeccion ();

$(document).ready(function () {
    if (JSON.parse(localStorage.getItem(keysLocalStorage.data)) == null) {
        localStorage.setItem(keysLocalStorage.data, JSON.stringify(dataStorange))
    }
    else {
        const unoSeccionA = getGradoOfSeccion("1er grado", "A");
        const unoSeccionB = getGradoOfSeccion("1er grado", "B");

        const dosSeccionA = getGradoOfSeccion("2do grado", "A");
        const dosSeccionB = getGradoOfSeccion("2do grado", "B");

        const tresSeccionA = getGradoOfSeccion("3er grado", "A");
        const tresSeccionB = getGradoOfSeccion("3er grado", "B");

        const cuatroSeccionA = getGradoOfSeccion("4to grado", "A");
        const cuatroSeccionB = getGradoOfSeccion("4to grado", "B");

        const cincoSeccionA = getGradoOfSeccion("5to grado", "A");
        const cincoSeccionB = getGradoOfSeccion("5to grado", "B");
        
        const seisSeccionA = getGradoOfSeccion("6to grado", "A");
        const seisSeccionB = getGradoOfSeccion("6to grado", "B");
        const seisSeccionC = getGradoOfSeccion("6to grado", "C");

        $("#1erSecA").text("#" + unoSeccionA.length)
        $("#1erSecB").text("#" + unoSeccionB.length)

        $("#2doSecA").text("#" + dosSeccionA.length)
        $("#2doSecB").text("#" + dosSeccionB.length)

        $("#3erSecA").text("#" + tresSeccionA.length)
        $("#3erSecB").text("#" + tresSeccionB.length)
        
        $("#4toSecA").text("#" + cuatroSeccionA.length)
        $("#4toSecB").text("#" + cuatroSeccionB.length)

        $("#5toSecA").text("#" + cincoSeccionA.length)
        $("#5toSecB").text("#" + cincoSeccionB.length)
        
        $("#6toSecA").text("#" + seisSeccionA.length)
        $("#6toSecB").text("#" + seisSeccionB.length)
        $("#6toSecC").text("#" + seisSeccionC.length)
    }
})