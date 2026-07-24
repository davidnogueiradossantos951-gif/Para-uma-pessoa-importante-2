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
    coracao.classList.add("coracao-caindo");

    const coracoes = ["❤️", "💙"];
    coracao.innerHTML = coracoes[Math.floor(Math.random() * coracoes.length)];

    coracao.style.left = Math.random() * window.innerWidth + "px";
    coracao.style.top = "-30px";
    coracao.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(coracao);
}

setInterval(criarCoracao, 300);
