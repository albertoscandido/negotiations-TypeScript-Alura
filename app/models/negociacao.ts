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
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  // get quantidade(): number { return this.quantidade; }
  // get valor(): number { return this.valor; }
  get data(): Date { return new Date(this._data.getTime()); }
  get volume(): number { return this.valor * this.quantidade; }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }
}