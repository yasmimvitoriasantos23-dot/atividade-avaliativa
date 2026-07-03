// ==================== BOTÃO DE CURTIR ====================
const botaoCurtir = document.querySelector("#botaoCurtir"); 
botaoCurtir.addEventListener("click", curtir);

function curtir(){
    let curtidas = document.querySelector("span");
    curtidas.textContent++;
}

// ==================== BOTÕES DE TAMANHO ====================

const elementoAlvo = document.querySelector("body");
const botaoAumentar = document.querySelector("#btn-aumentar");
const botaoDiminuir = document.querySelector("#btn-diminuir");

let tamanhoAtual = 16; 

function alterarTamanho(acao) {
    if (acao === "aumentar") {
        tamanhoAtual += 2;
    } else if (acao === "diminuir") {
        tamanhoAtual -= 2;
    }
    elementoAlvo.style.fontSize = tamanhoAtual + "px";
}

// FUNÇAO
botaoAumentar.addEventListener("click", function() {
    alterarTamanho("aumentar");
});

botaoDiminuir.addEventListener("click", function() {
    alterarTamanho("diminuir");
});