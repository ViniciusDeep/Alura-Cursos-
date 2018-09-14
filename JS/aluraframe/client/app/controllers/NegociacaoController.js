class NegociacaoController {


    adciona(event) {
      event.preventDefault();
      let $ = document.querySelector.bind(document);
      let data = $("#data");
      let quantidade = $("#quantidade");
      let valor = $("#valor");

      console.log(valor.value);
      console.log(quantidade.value);
      console.log(data.value);




    }



}
