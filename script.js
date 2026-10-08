// Tema claro/escuro (lembra a escolha, mas funciona sem armazenamento)
const root = document.documentElement;
try {
  const salvo = localStorage.getItem('tema');
  if (salvo) root.dataset.theme = salvo;
} catch (e) {}

document.getElementById('tema').addEventListener('click', () => {
  const escuroAgora = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = escuroAgora ? 'light' : 'dark';
  try { localStorage.setItem('tema', root.dataset.theme); } catch (e) {}
});

// Galeria do projeto em destaque: troca a imagem ao clicar ou a cada 4s
const imagens = [...document.querySelectorAll('#shots img')];
let atual = 0;
function mostrar(i) {
  atual = i % imagens.length;
  imagens.forEach((img, n) => img.classList.toggle('on', n === atual));
}
mostrar(0);
let timer = setInterval(() => mostrar(atual + 1), 4000);
imagens.forEach(img => img.addEventListener('click', () => {
  clearInterval(timer);
  mostrar(atual + 1);
}));

document.getElementById('ano').textContent = new Date().getFullYear();
