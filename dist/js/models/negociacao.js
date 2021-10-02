export class Negociacao {
    // método comum
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number) {
    //   this._data = data;
    //   this._quantidade = quantidade;
    //   this._valor = valor;
    // }
    // método mais simples usando o TypeScript - como o construtor recebe as propriedades que nosso objeto precisa
    // podemos declarar elas no próprio parametrô dele 
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() { return this._data; }
    get quantidade() { return this._quantidade; }
    get valor() { return this._valor; }
    get volume() { return this._valor * this._quantidade; }
}
