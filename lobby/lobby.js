document.addEventListener('DOMContentLoaded', () => {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    
    cantidadBitsX = Math.floor(ancho/50);
    cantidadBitsY  = Math.floor(alto/50);
    totalBits = cantidadBitsX * cantidadBitsY;

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
    color: white;\n
    font-size: 50px;\n
    }\n
    </style>\n`;

    for (let i = 1 ; i < (totalBits+1) ; i++ ){

        let ram = Math.round(Math.random());
        
        htmlparth = `${htmlparth}<div class = "bitcont"><a class = \"bits\" id = "bit${i}" >${ram}</a></div>\n`;

    }

    document.getElementById("lobby").innerHTML = htmlparth;

  })