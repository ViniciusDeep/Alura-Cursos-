var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);


for(var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = calculaImc(peso, altura);
console.log(imc);

var alturaBool = validaAltura(altura);
var pesoBool = validaPeso(peso);

var TdImc = paciente.querySelector(".info-imc");
if(pesoBool) {
	
	alert("Peso Inválido");
	TdImc.textContent = "Peso Inválido";
	paciente.classList.add("paciente-invalido");
	pesoBool = false;

} 

if(alturaBool) {
	alert("Altura inválida");
	TdImc.textContent = "Altura Inválida";
	paciente.classList.add("paciente-invalido");
	alturaBool = false;

} 

if(!alturaBool && !pesoBool) {
TdImc.textContent = imc;
}
}




function calculaImc(peso,altura) {
	var imc;
	imc = peso / (altura*altura);
	return imc.toFixed(2);
}


function validaPeso(peso) {
	if(peso <= 0 || peso >= 500){
		return true;
		}  else {	
			return false;
		}
}


function validaAltura(altura) {
	if(altura <= 0 || altura >= 3.0) {
		return true;
	} else {
		return false;
	}


}

console.log(paciente);

