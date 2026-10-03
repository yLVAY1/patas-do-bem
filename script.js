const botao = document.querySelector('.menu');
const nav = document.getElementById('navegacao');
const tela = window.matchMedia('(max-width: 768px)');
function atualizarMenu() {
  botao.hidden = !tela.matches;
  nav.hidden = tela.matches;
  botao.setAttribute('aria-expanded', String(!nav.hidden));
  botao.setAttribute('aria-label', nav.hidden ? 'Abrir menu' : 'Fechar menu');
}
atualizarMenu();
tela.addEventListener('change', atualizarMenu);
botao.addEventListener('click', () => {
  nav.hidden = !nav.hidden;
  botao.setAttribute('aria-expanded', String(!nav.hidden));
  botao.setAttribute('aria-label', nav.hidden ? 'Abrir menu' : 'Fechar menu');
});
nav.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && tela.matches) {
    nav.hidden = true;
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
    botao.focus();
  }
});
const formulario = document.querySelector('form');
if (formulario) formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  document.getElementById('resultado').textContent = 'Demonstração concluída! Os campos foram validados. Nenhum dado foi enviado ou armazenado.';
});

// A preferência vale para as duas páginas. O site funciona mesmo sem armazenamento.
const temasPermitidos = ['claro', 'escuro', 'contraste'];
const seletorTema = document.getElementById('tema');
let temaSalvo;
try { temaSalvo = localStorage.getItem('patas-tema'); } catch (erro) { /* Armazenamento indisponível. */ }
const temaInicial = temasPermitidos.includes(temaSalvo) ? temaSalvo :
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro');
function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;
  seletorTema.value = tema;
}
aplicarTema(temaInicial);
seletorTema.addEventListener('change', () => {
  aplicarTema(seletorTema.value);
  try { localStorage.setItem('patas-tema', seletorTema.value); } catch (erro) { /* Tema continua ativo na página. */ }
});
