var btn = document.querySelector("#btn-buscar");

btn.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){
    //verificando o status da requisição para seguir com o fluxo
    if(xhr.status != 200){
      //mostrando a respota ao usuário
      var span = document.querySelector("#response-ajax");
      span.classList.remove("ocultarSpan");
      span.classList.add("label");
      span.classList.add("label-danger");
      span.textContent = "Erro no servidor!"
    } else {
      //obtendo os pacientes na response
      var pacientes = JSON.parse(xhr.responseText);
      pacientes.forEach(function(paciente){
        adicionarPacienteTabela(paciente);
        console.log(paciente.nome);
      });
      var span = document.querySelector("#response-ajax");
      span.classList.remove("ocultarSpan");
      span.classList.add("label");
      span.classList.add("label-success");
      span.textContent = "Busca realizada com sucesso!";
    }
  });
  xhr.send();

});
