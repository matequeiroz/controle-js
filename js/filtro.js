var filtro = document.querySelector("#filtro-pacientes");
filtro.addEventListener("input", function(){
  var pacientes = buscarPacientes();
  if(this.value.length > 0 ){
    pacientes.forEach(function(paciente){
      var nome = paciente.querySelector(".info-nome").textContent;
      var expression = new RegExp(filtro.value,"i");
      if(!expression.test(nome)){
        paciente.classList.add("ocultarTr");
      } else {
        paciente.classList.remove("ocultarTr");
      }
    });
  } else {
    pacientes.forEach(function(paciente){
      paciente.classList.remove("ocultarTr");
    });
  }

});
