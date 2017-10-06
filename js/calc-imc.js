var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
  var pesoValido = true;
  var alturaValida = true;

  if(pacientes[i].querySelector(".info-peso").textContent >= 300 || pacientes[i].querySelector(".info-peso").textContent <= 0){
      var pesoValido = false;
  } else {
      var pesoValido = true;
      var peso = parseInt(pacientes[i].querySelector(".info-peso").textContent);
  }

  if(pacientes[i].querySelector(".info-altura").textContent >= 3.50 || pacientes[i].querySelector(".info-altura").textContent <= 0){
      var alturaValida = false;
  } else {
      var alturaValida = true;
      var altura = parseFloat(pacientes[i].querySelector(".info-altura").textContent);
  }

  if(pesoValido && alturaValida){
      var resultado = peso / (altura * altura);
      if(pacientes[i].querySelector(".info-imc")){
          var tdImc = pacientes[i].querySelector(".info-imc");
          tdImc.textContent = resultado.toString().substring(0,5);
      } else {
          alert("Campo inexistente!");
      }
  } else {
      if(pacientes[i].querySelector(".info-imc")){
          var tdImc = pacientes[i].querySelector(".info-imc");
          tdImc.textContent = "Peso e/ou Altura inválidos!";
      } else {
          alert("Campo inexistente!");
      }
  }
};
