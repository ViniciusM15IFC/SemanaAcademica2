function local() {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
      localStorage.setItem("inscritos", 0)
      localStorage.setItem("hasCodeRunBefore", true);
  }
}
function validarInscrição() {
  confirm('Continuar?')
  var form = document.getElementsByName("inscricao");
  contarInscrição();
  alert('Inscrição realizada com sucesso')
}
function contarInscrição() {
  local()
  var inscritos = localStorage.getItem("inscritos");
  var inscritos = parseInt(inscritos);
  var inscritos = inscritos + 1 ;
  localStorage.setItem("inscritos", inscritos);
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
