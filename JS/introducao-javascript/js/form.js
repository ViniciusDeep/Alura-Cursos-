var buttonAdd = document.querySelector(".buttonAction");
buttonAdd.addEventListener("click",setPaciente);
function setPaciente(event) {
	event.preventDefault();

	var form = document.querySelector("#form-add");

	var paciente = obtemInfo(form);
	
	var pacienteTr = montaTr(paciente);

	console.log(paciente);

	var erro = validaPaciente(paciente);

	if(erro.length > 0) {
		exibeMensagensDeErro(erro);
		return;
	}



	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
	form.reset();
	var mensagemErro = document.querySelector("#mensagens-erro");
	mensagemErro.innerHTML = "";


	console.log(form);
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
   	ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
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

function validaPaciente(paciente) {

	var erros = [];

	if(validaPeso(paciente.peso)) {
		 erros.push("Peso inválido");
	} 


	if(validaAltura(paciente.altura)) {
		erros.push("Altura Inválida");
	}

	if(paciente.nome.length == 0) {
		erros.push("O campo nome está vazio");
	}

	if(paciente.gordura.length == 0) {
		erros.push("O campo gordura está vázio");
	}

	if(paciente.peso.length == 0) {
		erros.push("O campo peso está vazio");
	}

	if(paciente.altura.length == 0) {
		erros.push("O campo altura está vázio");
	}


	return erros;
}