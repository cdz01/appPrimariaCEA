function handleCearBoletin(e) {
    e.preventDefault()
    
    const data = {
        nombre: document.querySelector("#floatingNombre").value,
        apellido: document.querySelector("#floatingApellido").value,
        calif: document.querySelector("#fieldCalif").value,
    }

    console.log(data);
}

function handleClickListCalif (e) {
    const califText = e.target.innerText;

    document.querySelector("#fieldCalif").value = califText;
}

document.querySelector("#btnSubmit").addEventListener('click', (e) => handleCearBoletin(e));
document.querySelector("#listCalif").addEventListener('click', (e) => handleClickListCalif(e))

