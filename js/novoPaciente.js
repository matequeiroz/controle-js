var tabela = document.querySelector("#tabela-pacientes");
var btn = document.querySelector("#btn-adiciona");
var form = document.querySelector("#form-adiciona");

btn.addEventListener("click", function(event){
  event.preventDefault();

  //pegando o conteudo dos inputs do formulário
  var paciente = pegarDados(form);

  //criando um paciente
  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  // Adicionando conteúdo aos campos
  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;
   

  // Adicionando os atributos do paciente no TR
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  // Adicionando o paciente no html
  tabela.appendChild(pacienteTr);
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
