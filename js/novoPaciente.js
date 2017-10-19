// obtendo a tabela de pacientes
var tabela = document.querySelector("#tabela-pacientes");

//pegando o botão de adicionar
var btn = document.querySelector("#btn-adiciona");

//formulario de adicionar novos pacientes;
var form = document.querySelector("#form-adiciona");


btn.addEventListener("click", function(event){
  //travando o evento padrão, ou seja, enviar o formulario para ser capturado.
  event.preventDefault();

  //obtendo os valores de entrada do form
  var paciente = pegarDados(form);

  //um array
  var response = validaPaciente(paciente);

  if(response.length > 0){
    exibirErros(response);
  } else {
    //criando um tr
    var pacienteTr = criarTr(paciente);
    //Adicionando o tr na tabela
    tabela.appendChild(pacienteTr);
    //limpando dados preenchidos do formulário
    form.reset();
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";
  }
});

function exibirErros(erros){
  var ul = document.querySelector("#mensagens-erros");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}

//pegando os dados do formulario de adicionar pacientes e retornando um objeto paciente;
function pegarDados(form) {
  var paciente =  {
    nome: form.nome.value,
    altura: parseFloat(form.altura.value),
    peso: parseFloat(form.peso.value),
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

// criando uma tr, ou seja, um paciente para ser inserido na tabela;
// retornando essa tr
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

//criando um para colocar o dado do paciente, como por exemplo: Nome, Peso...
function criaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente){
  var pesoValido = validaPeso(paciente.peso);
  var alturaValida = validaAltura(paciente.altura);
  var arrayErros = [];

  if(paciente.nome.length == 0) {
    arrayErros.push("Nome não pode ser vazio!");
  }

  if(paciente.altura.length == 0) {
    arrayErros.push("Altura não pode ser vazia!");
  }

  if(paciente.peso.length == 0) {
    arrayErros.push("Peso não pode ser vazio!");
  }

  if(paciente.gordura.length == 0) {
    arrayErros.push("Gordura não pode ser vazio!");
  }
  return arrayErros;
}
