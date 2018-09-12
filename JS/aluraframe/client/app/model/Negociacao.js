class Negociacao {
  constructor(data, quantidade, valor) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  calculaVolume(){
    return this.valor * this.quantidade;
  }


}
