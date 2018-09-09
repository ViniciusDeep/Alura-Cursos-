var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(campoFiltro.value.length > 0 ) {
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var reg = new RegExp(this.value, "i");


        if (reg.test(nome)) {
            paciente.classList.remove("invisivel");
        } else {
            paciente.classList.add("invisivel");
          }
      }
    } else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
          }
        }



});
