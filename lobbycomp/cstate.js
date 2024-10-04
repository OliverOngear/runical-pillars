function changeBits() {
    const lobby = document.getElementById("bits-cont");

    // Listener para cambiar el estado de los bits al hacer mouseover
    lobby.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains('bits')) {
            let texto = event.target.textContent;
            event.target.textContent = texto === "1" ? "0" : "1";
        }
    });
}

document.addEventListener('DOMContentLoaded', changeBits);
