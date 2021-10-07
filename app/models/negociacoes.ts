import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // ReandonlyArray impedirá que o array seja alterado por quem listar nosso array.
  public lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
