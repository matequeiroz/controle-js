var tabela = document.querySelector("#tabela-pacientes");
var btn = document.querySelector("#btn-adiciona");
var form = document.querySelector("#form-adiciona");

btn.addEventListener("click", function(event){
  event.preventDefault();
  //obtendo os valores de entrada do form
  var paciente = pegarDados(form);

  //criando um tr
  var pacienteTr = criarTr(paciente);

  //Adicionando o tr na tabela
  tabela.appendChild(pacienteTr);

  //limpando dados preenchidos do formulário
  form.reset();
});

function pegarDados(form) {
  return {
    "nome": form.nome.value,
    "altura": parseFloat(form.altura.value),
    "peso": parseFloat(form.peso.value),
    "gordura": form.gordura.value,
    "imc": calculaImc(this.peso, this.altura)
  }
}

function criarTr(paciente){
  //criando td com os atributos do paciente
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
  return pacienteTr;
}

function criaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
