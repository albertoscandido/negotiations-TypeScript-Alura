// import { Negociacao } from './models/negociacao.js';

import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao.volume);

const controller = new NegociacaoController;

const form = document.querySelector('.form');
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  controller.adiciona();
});

// const negociacoesView = new NegociacoesView();
// const template = negociacoesView.template();
