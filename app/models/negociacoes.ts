import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao";

export class Negociacoes implements Imprimivel {
  private negociacoes: Array<Negociacao> = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // ReandonlyArray impedirá que o array seja alterado por quem listar nosso array.
  public lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

}
