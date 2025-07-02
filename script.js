const somClick = document.getElementById("som-click");
const somFinal = document.getElementById("som-final");

function tocarSom() {
  somClick.currentTime = 0;
  somClick.play();
}

function tocarSomFinal() {
  somFinal.currentTime = 0;
  somFinal.play();
}

function iniciarJogoSoma() {
  tocarSom();

  let num1 = parseInt(prompt('Digite o primeiro número:'));
  let num2 = parseInt(prompt('Digite o segundo número:'));

  let resultado = num1 + num2;
  alert('A soma dos números é: "' + resultado + '"');

  tocarSomFinal();

  let conteudo = document.querySelector('p');
  if (conteudo) {
    conteudo.innerHTML = 'Jogo Finalizado!';
    setTimeout(() => conteudo.innerHTML = '', 5000);
  }
}

function iniciarJogoMedia() {
  tocarSom();
  alert("Bem-vindo ao Jogo da Média!");

  let quantidade = Number(prompt("Quantos números você quer digitar?"));

  if (quantidade <= 0 || isNaN(quantidade)) {
    alert("Quantidade inválida. Tente novamente com um número maior que zero.");
    return;
  }

  let soma = 0;
  for (let i = 1; i <= quantidade; i++) {
    let entrada = prompt(`Digite o ${i}º número:`);
    let numero = Number(entrada);

    if (entrada === null || entrada.trim() === "" || isNaN(numero)) {
      alert("Valor inválido. Digite um número.");
      i--;
      continue;
    }

    soma += numero;
  }

  let media = soma / quantidade;
  alert(`A média calculada entre os ${quantidade} números digitados é: ${media.toFixed(2)}`);

  tocarSomFinal();
}

function iniciarJogoNumeroSecreto() {
  tocarSom();
  alert('Seja bem-vindo ao nosso jogo!');

  let numeroSecreto = 6;
  let chute;
  let tentativas = 0;

  while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));
    if (isNaN(chute)) {
      alert("Digite um número válido.");
      continue;
    }

    tentativas++;

    if (chute == numeroSecreto) {
      alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
      tocarSomFinal();
    } else if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}. Tente novamente.`);
    } else {
      alert(`O número secreto é maior que ${chute}. Tente novamente.`);
    }
  }
}
