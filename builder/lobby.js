class LobbyComp extends HTMLElement {
    constructor() {
        super();
        
        /*Accesar al archivo*/
        fetch('lobby.html')
        .then(respuesta => respuesta.text())
        .then(contenido => {

            let htmlContenido = contenido;

            this.attachShadow({ mode: 'open' });

            const template = document.createElement('template');
            template.innerHTML = htmlContenido;

            this.shadowRoot.appendChild(template.content.cloneNode(true));
        });

    }
}

customElements.define('lobby-component', LobbyComp);