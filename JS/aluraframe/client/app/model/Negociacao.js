class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  calculaVolume(){
    return this._valor * this._quantidade;
  }

  get data() {
    return this._data;
  }
  get quantidade() {
    return this._quantidade;
  }
  get valor() {
    return this._valor;
  }


}
