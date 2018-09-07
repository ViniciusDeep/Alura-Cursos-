var buttonAdd = document.querySelector(".buttonAction");
buttonAdd.addEventListener("click",setPaciente);
function setPaciente(event) {
	event.preventDefault();

	var form = document.querySelector("#form-add");

	var paciente = obtemInfo(form);
	var pacienteTr = montaTr(paciente);

	console.log(paciente);



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

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr");
	
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}