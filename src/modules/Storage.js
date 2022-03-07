const dataStorange = {
    '1erGrado': {
        secciones: [
            [],
            []
        ]
    },
    '2doGrado': {
        secciones: [
            [],
            []
        ]
    },
    '3erGrado': {
        secciones: [
            [],
            []
        ]
    },
    '4toGrado': {
        secciones: [
            [],
            []
        ]
    },
    '5toGrado': {
        secciones: [
            [],
            []
        ]
    },
    '6toGrado': {
        secciones: [
            [],
            [],
            []
        ]
    },
}

function getGrados () {
    const grados = JSON.parse(localStorage.getItem(keysLocalStorage.data))
    return grados;
}

function getGradoOfSeccion (grado, seccion) {
    const grados = JSON.parse(localStorage.getItem(keysLocalStorage.data))
    const currentSeccion = grados[enumsGrados[grado.toLowerCase()]].secciones[enumsSecciones[seccion]]
    return currentSeccion;
}

function saveEditedBoletin (grado="", seccion="", boletin={nombre:"", apellido:"", calif:""}) {
    let idxtoEdit = -1;
    
    const grados = getGrados();
    const currentSeccion = grados[enumsGrados[grado.toLowerCase()]].secciones[enumsSecciones[seccion]]

    const selectedAlumno = JSON.parse(sessionStorage.getItem("selectedAlumn"));
    const fullname = selectedAlumno.nombre + " " + selectedAlumno.apellido;
    
    currentSeccion.forEach((boleta, idx) => {
        const currentFullname = boleta.nombre + " " + boleta.apellido;
        if (fullname == currentFullname) {
            console.log(fullname)
            idxtoEdit = idx;
            return;
        }
    })

    currentSeccion[idxtoEdit] = boletin;

    saveSeccion(grado, seccion, currentSeccion);
    
    // const grados = getGrados();
    // grados[enumsGrados[grado.toLowerCase()]].secciones[enumsSecciones[seccion]] = currentSeccion;
    // localStorage.setItem(keysLocalStorage.data, JSON.stringify(grados));
}

function saveSeccion(grado, seccion, currentSeccion) {
    const grados = getGrados();
    grados[enumsGrados[grado.toLowerCase()]].secciones[enumsSecciones[seccion]] = currentSeccion;
    localStorage.setItem(keysLocalStorage.data, JSON.stringify(grados));
}

function pushAndSaveBoletin(grado, seccion, data) {
    const currentSeccion = getGradoOfSeccion(grado, seccion);
    currentSeccion.push(data);

    // save
    const grados = getGrados();
    grados[enumsGrados[grado.toLowerCase()]].secciones[enumsSecciones[seccion]] = currentSeccion;
    localStorage.setItem(keysLocalStorage.data, JSON.stringify(grados));
}

const keysLocalStorage = {
    data:'dataStorage'
}

const enumsGrados = {
    '1er grado': '1erGrado',
    '2do grado': '2doGrado',
    '3er grado': '3erGrado',
    '4to grado': '4toGrado',
    '5to grado': '5toGrado',
    '6to grado': '6toGrado',
}

const enumsSecciones = {
    'A': 0,
    'B': 1,
    'C': 2,
}

export { 
    dataStorange,
    keysLocalStorage,
    enumsGrados,
    enumsSecciones,
    getGrados,
    getGradoOfSeccion,
    pushAndSaveBoletin,
    saveEditedBoletin,
    saveSeccion
}