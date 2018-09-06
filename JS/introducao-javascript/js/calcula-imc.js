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

var alturaBool = true;
var pesoBool = true;

var TdImc = paciente.querySelector(".info-imc");
if(peso <= 0 || peso >= 500) {
	
	alert("Peso Inválido");
	TdImc.textContent = "Peso Inválido";
	paciente.classList.add("paciente-invalido");
	pesoBool = false;

} 

if(altura <= 0 || altura >= 3.0) {
	alert("Altura inválida");
	TdImc.textContent = "Altura Inválida";
	paciente.classList.add("paciente-invalido");
	alturaBool = false;

} 

if(alturaBool && pesoBool) {
TdImc.textContent = imc;
}
}


function validaCampos(peso,altura) {
	if(peso <= 0 || peso >= 500) {
	
	alert("Peso Inválido");
	TdImc.textContent = "Peso Inválido";
	paciente.classList.add("paciente-invalido");
	pesoBool = false;

	} 

if(altura <= 0 || altura >= 3.0) {
	alert("Altura inválida");
	TdImc.textContent = "Altura Inválida";
	paciente.classList.add("paciente-invalido");
	alturaBool = false;

} 
}


function calculaImc(peso,altura) {
	var imc;
	imc = peso / (altura*altura);
	return imc.toFixed(2);
}


console.log(paciente);

