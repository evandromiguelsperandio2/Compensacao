document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcularBtn').addEventListener('click', calcularIMC);
  });
  
  function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
  
    if (altura && peso) {
      const imc = peso / (altura * altura);
      const contexto = obterContextoIMC(imc);
  
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} (${contexto})`;
    }
  }
  
  function obterContextoIMC(imc) {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade Grau II';
    } else {
      return 'Obesidade Grau III';
    }
  }