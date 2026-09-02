document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('temperatura');
  var botao = document.getElementById('btnAtualizar');
  var retangulo = document.getElementById('retangulo');
  var mensagemErro = document.getElementById('mensagemErro');

  var CLASSES_COR = [
    'azul-claro',
    'amarelo-claro',
    'vermelho-claro',
    'vermelho-escuro',
    'branco'
  ];

  function definirCor(classe) {
    retangulo.classList.remove.apply(retangulo.classList, CLASSES_COR);
    retangulo.classList.add(classe);
  }

  function atualizarRetangulo() {
    var valorTexto = input.value.trim();
    var valor = Number(valorTexto);

    var valido =
      valorTexto !== '' &&
      !isNaN(valor) &&
      Number.isFinite(valor) &&
      valor >= 0 &&
      valor <= 70;

    if (!valido) {
      definirCor('branco');
      mensagemErro.textContent = 'Valor inválido';
      return;
    }

    mensagemErro.textContent = '';

    if (valor >= 0 && valor <= 29) {
      definirCor('azul-claro');
    } else if (valor >= 30 && valor <= 45) {
      definirCor('amarelo-claro');
    } else if (valor >= 46 && valor <= 60) {
      definirCor('vermelho-claro');
    } else {
      // acima de 60
      definirCor('vermelho-escuro');
    }
  }

  botao.addEventListener('click', atualizarRetangulo);

  // Estado inicial: valor 30 -> amarelo claro (já definido no HTML/CSS)
});

