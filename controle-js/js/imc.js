if(document.querySelector("#paciente-1")) {
    var p1 = document.querySelector("#paciente-1");
    var pesoValido = true;
    var alturaValida = true;

    if(p1.querySelector(".info-peso").textContent >= 300 || p1.querySelector(".info-peso").textContent <= 0){
        var pesoValido = false;
    } else {
        var pesoValido = true;
        var peso = parseInt(p1.querySelector(".info-peso").textContent);
    }

    if(p1.querySelector(".info-altura").textContent >= 3.50 || p1.querySelector(".info-altura").textContent <= 0){
        var alturaValida = false;

    } else {
        var alturaValida = true;
        var altura = parseInt(p1.querySelector(".info-altura").textContent);
    }

    if(pesoValido && alturaValida){
        var resultado = peso / (altura * altura);
        if(p1.querySelector(".info-imc")){
            var tdImc = p1.querySelector(".info-imc");
            tdImc.textContent = resultado;
        } else {
            alert("Campo inexistente!");
        }
    } else {
        if(p1.querySelector(".info-imc")){
            var tdImc = p1.querySelector(".info-imc");
            tdImc.textContent = "Peso e/ou Altura inválidos!";
        } else {
            alert("Campo inexistente!");
        }
    }


} else {
    alert("Elemento não existe!")
}

