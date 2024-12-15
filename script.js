document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger-menu').addEventListener('click', function() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');  // Alterna a visibilidade do menu ao clicar no hambúrguer
    });
});
