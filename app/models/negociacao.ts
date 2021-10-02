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
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

  get data(): Date { return this._data; }
  get quantidade(): number { return this._quantidade; }
  get valor(): number { return this._valor; }
  get volume(): number { return this._valor * this._quantidade; }
}