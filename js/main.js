// ----- Menu mobile -----
var menuBotao = document.getElementById('menuBotao');
var menu = document.getElementById('menu');

menuBotao.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    menuBotao.setAttribute('aria-expanded', aberto);
});

menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('aberto');
        menuBotao.setAttribute('aria-expanded', 'false');
    });
});

// ----- Abas (Povos da Terra-média) -----
var abas = document.querySelectorAll('.aba');
var paineis = document.querySelectorAll('.painel');

abas.forEach(function (aba) {
    aba.addEventListener('click', function () {
        abas.forEach(function (a) { a.classList.remove('ativa'); });
        paineis.forEach(function (p) { p.classList.remove('ativo'); });

        aba.classList.add('ativa');
        document.getElementById(aba.dataset.aba).classList.add('ativo');
    });
});

// ----- FAQ (abre e fecha com transição) -----
document.querySelectorAll('.faq__pergunta').forEach(function (pergunta) {
    pergunta.addEventListener('click', function () {
        pergunta.parentElement.classList.toggle('aberto');
    });
});

// ----- Ano no rodapé -----
document.getElementById('ano').textContent = new Date().getFullYear();
