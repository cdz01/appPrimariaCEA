import { enumsFormat } from '../modules/Enums.js'

const formatText = document.querySelector('#formatText');
const viewSelectedFormat = document.querySelector('#selectedFormat');

document.querySelector('#listFormats').addEventListener('click', function(e) {
    const selectedFormat = e.target.innerText;
    const format = app.getFormat(enumsFormat.Lengua);

    formatText.value = format;
    viewSelectedFormat.innerText = selectedFormat;
    formatText.style.height = ((format + '').length / 3) + 'px';
})

document.querySelector();