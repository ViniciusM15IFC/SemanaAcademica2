function validarInscrição() {
  contarInscrição();
}
function contarInscrição() {
  confirm('Continuar?')
  var inscritos = localStorage.getItem("inscritos");
  var inscritos = parseInt(inscritos);
  var inscritos = inscritos + 1;
  localStorage.setItem("inscritos", inscritos);
  alert('Inscrição realizada com sucesso')
}
function mudarNdeInscritos() {
  var inscritos = localStorage.getItem("inscritos")
  var texto = 'Total de ' + inscritos + ' Inscritos'
  var caixa = document.getElementById('n_inscritos')
  caixa.innerHTML = texto
}
function mostrarMais(name) {
  var elemento = document.getElementById(name)
  if (elemento.classList == "esconder") {
    elemento.classList = "mostrar"
  }
  else {
    elemento.classList = "esconder"
  }
}
function Redirecionar(name) {
  document.location.href = name
}