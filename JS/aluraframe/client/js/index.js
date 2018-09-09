var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
  ];


var tBody = document.querySelector("table tbody");
var button = document.querySelector(".form");
button.addEventListener("submit", function(event) {
  event.preventDefault();
  var tr = document.createElement("tr");

  campos.forEach(function(campo){
    var td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  var tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);
  tBody.appendChild(tr);

  campos[0].value = "";
  campos[1].value = "";
  campos[2].value = "";
});
