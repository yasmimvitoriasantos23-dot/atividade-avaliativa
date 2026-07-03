const botao = document.querySelector("button")
botao.addEventListener("click", curtir)


function curtir(){
    let curtidas = document.querySelector("span")
    curtidas.textContent++;
}

// Botão do tamanho
const tamanho