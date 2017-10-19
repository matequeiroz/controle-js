var btn = document.querySelector("#btn-buscar");

btn.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){
    var pacientes = JSON.parse(xhr.responseText);
  });
  xhr.send();

});
