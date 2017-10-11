var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];

  var peso = parseFloat(paciente.querySelector(".info-peso").textContent);
  var altura = parseFloat(paciente.querySelector(".info-altura").textContent);
  var tdImc = paciente.querySelector(".info-imc");
  var alturaValida = validaAltura(altura);
  var pesoValido = validaPeso(peso);

  if(!alturaValida){
    tdImc.textContent = "Altura inválida";
    tdImc.classList.add("campo-invalido");
  }

  if(!pesoValido){
    tdImc.textContent = "Peso inválido";
    tdImc.classList.add("campo-invalido");
  }

  if(pesoValido && alturaValida){
    tdImc.textContent = calculaImc(peso, altura);
  }
};

function calculaImc(peso, altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaAltura(altura){
  if(altura > 0 && altura < 3){
    return true;
  } else {
    return false;
  }
}

function validaPeso(peso){
  if(peso > 0 && peso < 1000){
    return true;
  } else {
    return false;
  }
}
