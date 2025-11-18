var nao = document.querySelector("#nao");

function p51NaoePinga(){
    let larguraTela = window.innerWidth;
    let alturaTela = window.innerHeight;

    let novoX = Math.random() * larguraTela;
    let novoY = Math.random() * alturaTela;

    nao.style.cssText = `position: absolute; top: ${novoY}px; left: ${novoX}px`;

    console.log("teste");
    console.log(sim.style.cssText);
}


nao.addEventListener("mouseover", p51NaoePinga);