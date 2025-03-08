alert('Boas vindas ao jogo do número secreto');
let numLimite = 100;
let numeroSecreto = parseInt(Math.random() * numLimite + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numLimite}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`0 número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let numTentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${numTentativas}`);

