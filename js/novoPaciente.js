var tabela = document.querySelector("#tabela-pacientes");
var btn = document.querySelector("#btn-adiciona");
var form = document.querySelector("#form-adiciona");

btn.addEventListener("click", function(event){
  event.preventDefault();

  //pegando o conteudo dos inputs do formulário
  var pacienteNome = form.nome.value;
  var pacienteAltura = form.altura.value;
  var pacientePeso = form.peso.value;
  var pacienteGordura = form.gordura.value;

  //criando um paciente
  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");

  // Adicionando conteúdo aos campos
  nomeTd.textContent = pacienteNome;
  pesoTd.textContent = pacientePeso;
  alturaTd.textContent = pacienteAltura;
  gorduraTd.textContent = pacienteGordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  tabela.appendChild(pacienteTr);
});
