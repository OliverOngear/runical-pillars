function crearBits() {
    const contenedor = document.getElementById('bits-cont');

    const ancho = contenedor.offsetWidth;
    const alto = contenedor.offsetHeight;

    cantidadBitsX = Math.floor(ancho/50);
    cantidadBitsY  = Math.floor(alto/50);
    totalBits = cantidadBitsX * cantidadBitsY;

    console.log(cantidadBitsX);
    console.log(cantidadBitsY);

    let htmlparth = `
    <style>\n
    .bitcont {\n
    display: flex;\n
    width: 50px;\n
    height: 50px;\n
    text-align: center;\n
    justify-content: center;\n
    align-items: center;\n
    }\n
    .bits {\n
    font-family: 'RobotoMono', sans-serif;\n
    color: #b2b2b2;\n
    font-size: 50px;\n
    cursor: default;\n
    }\n
    </style>\n`;

    for (let i = 1 ; i < (totalBits+1) ; i++ ){

        let ram = Math.round(Math.random());
        
        htmlparth = `${htmlparth}<a class = \"bits\" id = "bit${i}" >${ram}</a>\n`;

    }

    document.getElementById("bits-cont").innerHTML = htmlparth;

}

document.addEventListener('DOMContentLoaded', crearBits);
window.addEventListener('resize', crearBits);