const cartinhas = document.querySelectorAll(".cartinha");

cartinhas.forEach((cartinha) => {
    cartinha.addEventListener("click", () => {
        cartinha.classList.toggle("aberta");
    });
});

// Contador
const dataConhecemos = new Date("2026-06-10T00:00:00");

function atualizarContador() {
    const agora = new Date();

    const diferenca = agora - dataConhecemos;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

const musica = document.getElementById("musica");

document.addEventListener("click", () => {
    musica.play();
}, { once: true });

function criarCoracao() {
    const coracao = document.createElement("div");

    coracao.innerHTML = Math.random() > 0.5 ? "❤️" : "💙";

    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.top = "-40px";
    coracao.style.fontSize = (20 + Math.random() * 20) + "px";
    coracao.style.pointerEvents = "none";
    coracao.style.zIndex = "9999";
    coracao.style.transition = "transform 6s linear";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.style.transform = "translateY(110vh)";
    }, 10);

    setTimeout(() => {
        coracao.remove();
    }, 6000);
}

setInterval(criarCoracao, 300);
