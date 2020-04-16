function calculaImc(){
    let nomeP = document.getElementById("nome").value;
    let pesoP = parseFloat(document.getElementById("peso").value);
    let alturaP = parseFloat(document.getElementById("altura").value);
    let imcP = pesoP/(alturaP * alturaP);
    return alert(`Olá ${nomeP} seu imc é ${imcP.toFixed(2)}`);
}

let botao = document.getElementById("calcula-imc");

botao.addEventListener("click", calculaImc);

//calculaImc();