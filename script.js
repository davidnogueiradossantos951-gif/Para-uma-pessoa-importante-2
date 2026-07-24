const cartinhas = document.querySelectorAll(".cartinha");

cartinhas.forEach((cartinha) => {
    cartinha.addEventListener("click", () => {
        cartinha.classList.toggle("aberta");
    });
});