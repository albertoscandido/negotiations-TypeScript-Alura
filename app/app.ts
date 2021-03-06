// import { Negociacao } from './models/negociacao.js';

import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao.volume);

const controller = new NegociacaoController;

const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    controller.adiciona();
  });
} else {
  throw new Error('Não foi possível inicializar a aplicação');
}

const botaoImporta = document.querySelector('#botao-importar');

if (botaoImporta) {
  botaoImporta.addEventListener('click', () => {
    controller.importarDatos();
  });
} else {
  throw new Error('Botão importa não encontrado');
}

// const negociacoesView = new NegociacoesView();
// const template = negociacoesView.template();
