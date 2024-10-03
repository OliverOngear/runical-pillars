document.addEventListener("DOMContentLoaded", function() {
    const lobby = document.getElementById("lobby");

    lobby.addEventListener("mouseenter", function(event) {
        
      if (event.target.tagName === "A") {

        let idelement = event.target.id;
        let elemento = document.getElementById(idelement);
        let texto = elemento.textContent;
        
        if (texto === "1") {
            elemento.textContent = "0";
        } else {
            elemento.textContent = "1";
        }
    }

    }, true);

});
