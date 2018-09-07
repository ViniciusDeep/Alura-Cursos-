var buttonAdd = document.querySelector(".buttonAction");
buttonAdd.addEventListener("click",setPaciente);
function setPaciente(event) {
	event.preventDefault();

	var form = document.querySelector("#form-add");

	var paciente = obtemInfo(form);
	console.log(paciente);

	var pacienteTr = document.createElement("tr");
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = imc;
	
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	console.log(form);
}

function obtemInfo(form) {
     paciente = {
     	nome: form.nome.value,
     	peso: form.peso.value,
     	altura: form.altura.value,
     	gordura: form.gordura.value,
     	imc: calculaImc(form.peso.value, form.altura.value)
     }
     return paciente;
}