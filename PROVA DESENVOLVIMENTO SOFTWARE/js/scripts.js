const botao = document.getElementById('btnmensagem');
const areaMensagem = document.getElementById('areaMensagem');

const mensagens = [
  'O limite é uma fronteira só criada pela mente, Racionais MC.'
];

botao.addEventListener('click', function() {
  const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
  const mensagemSorteada = mensagens[indiceAleatorio];
  
  areaMensagem.textContent = mensagemSorteada;
  areaMensagem.style.display = 'block';
  areaMensagem.style.marginTop = '15px';
  areaMensagem.style.padding = '10px';
  areaMensagem.style.borderLeft = '4px black';
  areaMensagem.style.backgroundColor = '#f4f4f4';
});