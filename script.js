/* ==========================================================================
   INTERATIVIDADE E COMPORTAMENTO - PORTFÓLIO
   ========================================================================== */

// 1. Menu Mobile
const botaoMenuMobile = document.getElementById('botao-menu-mobile');
const menuNavegacao = document.getElementById('menu-navegacao');
const linksMenu = document.querySelectorAll('.link-menu');

if (botaoMenuMobile && menuNavegacao) {
    botaoMenuMobile.addEventListener('click', () => {
        menuNavegacao.classList.toggle('ativo');
        const icone = botaoMenuMobile.querySelector('i');
        if (menuNavegacao.classList.contains('ativo')) {
            icone.classList.replace('bi-list', 'bi-x');
        } else {
            icone.classList.replace('bi-x', 'bi-list');
        }
    });

    // Fechar menu ao clicar em um link
    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            menuNavegacao.classList.remove('ativo');
            const icone = botaoMenuMobile.querySelector('i');
            if (icone) {
                icone.classList.replace('bi-x', 'bi-list');
            }
        });
    });
}

// 2. Alternar Tema (Claro / Escuro)
const botaoTema = document.getElementById('botao-tema');
const body = document.body;

if (botaoTema) {
    botaoTema.addEventListener('click', () => {
        body.classList.toggle('tema-claro');
        const iconeTema = botaoTema.querySelector('i');
        
        if (body.classList.contains('tema-claro')) {
            iconeTema.classList.replace('bi-terminal-fill', 'bi-sun-fill');
        } else {
            iconeTema.classList.replace('bi-sun-fill', 'bi-terminal-fill');
        }
    });
}

// 3. Botão Voltar ao Topo
const botaoTopo = document.getElementById('botao-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        botaoTopo.classList.add('visivel');
    } else {
        botaoTopo.classList.remove('visivel');
    }
});

if (botaoTopo) {
    botaoTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 4. Atualizar Ano Atual Automático no Rodapé
const spanAno = document.getElementById('ano-atual');
if (spanAno) {
    spanAno.textContent = new Date().getFullYear();
}