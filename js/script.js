// Seleciona o botão e os links do menu
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const navLinks = document.querySelectorAll('.menu a');

// Mostra o botão quando a página é rolada para baixo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'flex'; // Mantém o botão visível mesmo no topo
    }
});

// Volta ao topo da página quando o botão é clicado
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Adiciona um evento de clique a cada link do menu
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão de navegação
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Calcula a posição de rolagem para centralizar a seção
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);

        // Rola suavemente até o alvo
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});



function toggleSection(event, sectionId) {
    event.preventDefault(); // Previne o comportamento padrão do link
    var section = document.getElementById(sectionId);
    var allSections = document.querySelectorAll('.section');
    
    allSections.forEach(function(sec) {
        sec.style.display = 'none'; // Oculta todas as seções
    });
    
    if (section) {
        section.style.display = 'block'; // Exibe a seção clicada
    }
}

// Event listeners para os links de navegação
document.getElementById('toggle-sobre-mim').addEventListener('click', function(event) {
    toggleSection(event, 'sobre-mim');
});

document.getElementById('toggle-habilidades').addEventListener('click', function(event) {
    toggleSection(event, 'habilidades');
});

document.getElementById('toggle-servicos').addEventListener('click', function(event) {
    toggleSection(event, 'servicos');
});

document.getElementById('toggle-projetos').addEventListener('click', function(event) {
    toggleSection(event, 'projetos');
});




