var text = document.querySelector("#filtrar-tabela");

text.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    for(var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var nomeTd = paciente.querySelector("info-nome");
      var nome = nomeTd.textContent;
    }//teste
});
