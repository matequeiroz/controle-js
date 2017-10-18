var filtro = document.querySelector("#filtro-pacientes");
filtro.addEventListener("input", function(){
  var pacientes = buscarPacientes();
  pacientes.forEach(function(paciente){
    var nome = paciente.querySelector(".info-nome").textContent;
    if(nome != filtro.value){
      paciente.classList.add("ocultarTr");
    } else {
      paciente.classList.remove("ocultarTr");
    }
  });
});
