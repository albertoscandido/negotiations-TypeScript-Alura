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
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // get quantidade(): number { return this.quantidade; }
    // get valor(): number { return this.valor; }
    get data() { return new Date(this._data.getTime()); }
    get volume() { return this.valor * this.quantidade; }
}
