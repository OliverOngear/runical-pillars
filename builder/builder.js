// Inicia el script cuando se termina de cargar el documento html
document.addEventListener('DOMContentLoaded', () => {

    //let tituloHtml = document.title;
    let fileHtml = window.location.pathname.split('/').pop(); // obtener nombre del archivo html
    let planfile = `plan-${fileHtml}`; // agregar "plan-" al nombre para buscar el plan de la pagina
    planfile = planfile.replace('.html', '.json'); // cambar la extencion del archivo a json

    fetch(planfile) // Se busca el json con el plan
    .then(response => response.json())
    .then(data => {

        let compCreator = "<!--Seccion de componentes-->\n"; // Se crean marcadores para separar el codigo
        let scriptCreator = "<!--Seccion de scripts-->\n"; // e identificar las partes en el html
        let insertHtml = "";

        if(data[0].htmlfile === fileHtml){
            for (let i = 1; i < data.length; i++) {
                let namecom = `${data[i].name}-${data[i].type}`;
                compCreator += `<${namecom}></${namecom}>\n`;
                scriptCreator += `<script src="${data[i].jsroot}"></script>\n`;
            }

            insertHtml = `${compCreator}`;
            document.getElementById("body").innerHTML = insertHtml;

            // Crear y agregar los scripts manualmente
            data.forEach((component, index) => {
                if (index > 0) {
                    let script = document.createElement('script');
                    script.src = component.jsroot;
                    document.body.appendChild(script);
                }
            });

        } else {
            console.error("Plan-Error #00: Archivo o datos de archivo incorrectos, revisar que el .json contenga el plan para esta pagina.");
        }
    })
    .catch(error => {
        console.error('Error al leer el archivo JSON:', error);
    });
});
