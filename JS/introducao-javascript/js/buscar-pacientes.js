var button = document.querySelector("#buscar-paciente");


button.addEventListener("click", function() {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

//https://rickandmortyapi.com/api/character/ Rick and morty API
  xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
                adicionaPacientaNaTabela(paciente);
        });

    });

      xhr.send();

});
