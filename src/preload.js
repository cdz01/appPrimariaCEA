// const { ipcRenderer, contextBridge, dialog} = require("electron");
// // const { jsPDF } = require("jspdf");
// // require("jspdf-autotable")

// const fs = require("fs");
// const path = require("path");

// const PATH_ARTICLES = "C:\\inventario.cea\\articles.json"

// const API = {
//     getArticles: () => getArticles(),
//     save_articles: (articles) => save_articles(articles),
//     delete_one_article: (serial) => delete_one_article(serial),
//     open_dialog: () => open_dialog(),
//     generate_pdf: (dir, name) => generate_pdf(dir, name),
//     test: (t) => { console.log(t) }
// }

// contextBridge.exposeInMainWorld("app", API);

// function open_dialog () {
//     const res = ipcRenderer.sendSync('openDialog');
//     return res;
// }

// function generate_pdf(dir, name) {
//     const articles = getArticles();
//     var all_values = [];
//     var fullPath = dir + "\\" + name + ".pdf";
    
//     let valuesCopy = [];
//     articles.map((a,i) => {
//         const values = Object.values(a);
//         for (let i = 0; i < values.length; i++) {
//             const element = values[i];
//             if (element == "") values[i] = "*";
//         }
//         values.unshift(i+1);
        
//         all_values.push(values);
//     });

//     // console.log(all_values)
//     const doc = new jsPDF('p', 'mm', 'a4');
    
//     doc.text("Inventariado CEA", 20, 20);

//     doc.autoTable({
//         head: [['Nº','Departamento', 'Categoria', 'Marca', 'Modelo', 'Cantidad', 'Serial', 'Observacion', 'Ultimo Movimiento', 'Estado']],
//         body: all_values,
//         margin: { top: 30 }
//     })
    
//     doc.save(fullPath);
// }

// function getArticles() {
//     const data = fs.readFileSync(path.join(PATH_ARTICLES), { encoding: 'utf8', flag:'r' });
//     return JSON.parse(data);
// }

// function save_articles(articles, option='s') {
//     const data = JSON.stringify(articles);
//     const success = fs.writeFileSync(path.join(PATH_ARTICLES), data);
//     console.log(option)
//     switch(option) {
//         case 's':
//             ipcRenderer.send('notification');
//             break;
//         case 'd':
//             ipcRenderer.send('notification-delete');
//             break;
//     }
// }

// function delete_one_article(serial) {
//     const arts = getArticles();

//     const fArts = arts.filter(art => art.serial !== serial);
//     save_articles(fArts, 'd');
// }

// module.exports = API