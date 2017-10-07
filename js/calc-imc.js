var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
  var pesoValido = true;
  var alturaValida = true;
  var tdPeso = pacientes[i].querySelector(".info-peso");

  if(pacientes[i].querySelector(".info-peso").textContent >= 300 || pacientes[i].querySelector(".info-peso").textContent <= 0){
      var pesoValido = false;
      if(pacientes[i].querySelector(".info-imc")){
          var tdImc = pacientes[i].querySelector(".info-imc");
          var tdPeso = pacientes[i].querySelector(".info-peso");
          tdPeso.classList.add("campo-invalido");
          tdImc.textContent = "Peso inválido!";
      } else {
          alert("Campo inexistente!");
      }
  } else {
      var pesoValido = true;
      var peso = parseInt(pacientes[i].querySelector(".info-peso").textContent);
  }

  if(pacientes[i].querySelector(".info-altura").textContent >= 3.50 || pacientes[i].querySelector(".info-altura").textContent <= 0){
      var alturaValida = false;
      if(pacientes[i].querySelector(".info-imc")){
          var tdImc = pacientes[i].querySelector(".info-imc");
          var tdAltura = pacientes[i].querySelector(".info-altura");
          tdAltura.classList.add("campo-invalido");
          tdImc.textContent = "Altura inválida!";
      } else {
          alert("Campo inexistente!");
      }
  } else {
      var alturaValida = true;
      var altura = parseFloat(pacientes[i].querySelector(".info-altura").textContent);
  }

  if(pesoValido && alturaValida){
      var resultado = peso / (altura * altura);
      if(pacientes[i].querySelector(".info-imc")){
          var tdImc = pacientes[i].querySelector(".info-imc");
          tdImc.textContent = resultado.toFixed(2);
      } else {
          alert("Campo inexistente!");
      }
  }
};
