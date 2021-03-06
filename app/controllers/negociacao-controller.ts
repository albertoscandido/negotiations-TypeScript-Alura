import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { NegociacoesService } from '../services/negociacoes-service.js'

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoes-view');
  private mensagemView = new MensagemView('#mensagem-view');
  private negociacaoService = new NegociacoesService;

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @logarTempoDeExecucao(true)
  public adiciona(): void {
    
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView
        .update('Apenas dias úteis da semana são aceitos para negociações')
      return;
    }
    this.negociacoes.adiciona(negociacao);
    console.log(negociacao.paraTexto());
    console.log(this.negociacoes.paraTexto());
    this.limparFormulário();
    this.atualizaView();
  }

  importarDatos(): void {
    this.negociacaoService.obterNegocicacoesDoDia()
      .then(negociacoesDeHoje => {
        return negociacoesDeHoje.filter(negociacaoDeHoje => {
          return !this.negociacoes
            .lista()
            .some(negociacao => negociacao
              .ehIgual(negociacaoDeHoje)
            );
        })
      })
      .then((negociacoesDeHoje) => {
        negociacoesDeHoje.forEach(negociacao => this.negociacoes.adiciona(negociacao));
        this.negociacoesView.update(this.negociacoes);
      })
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }

  private limparFormulário(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!')
  }
}
