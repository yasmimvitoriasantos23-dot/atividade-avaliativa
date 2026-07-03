// ==================== BOTÃO DE CURTIR ====================
// Corrigido: Agora busca pelo ID correto que está no HTML
const botaoCurtir = document.querySelector("#botaoCurtir"); 
botaoCurtir.addEventListener("click", curtir);

function curtir(){
    let curtidas = document.querySelector("span");
    curtidas.textContent++;
}

// ==================== BOTÕES DE TAMANHO ====================
// Corrigido: Mudamos para 'body' para aumentar a letra da página inteira
const elementoAlvo = document.querySelector("body");

// Corrigido: IDs agora batem exatamente com o HTML atualizado
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

// Chamadas das funções ao clicar
botaoAumentar.addEventListener("click", function() {
    alterarTamanho("aumentar");
});

botaoDiminuir.addEventListener("click", function() {
    alterarTamanho("diminuir");
});