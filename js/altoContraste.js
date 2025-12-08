document.addEventListener('DOMContentLoaded', function() {
    const btnContraste = document.getElementById('contraste');
    const body = document.body;

    // 1. Verifica se o usuário já tinha ativado o modo antes
    if (localStorage.getItem('altoContraste') === 'true') {
        body.classList.add('alto-contraste');
    }

    // 2. Função para alternar o modo
    btnContraste.addEventListener('click', function(event) {
        event.preventDefault(); // Previne comportamento padrão de link se houver
        
        body.classList.toggle('alto-contraste');

        // Salva a preferência no navegador
        if (body.classList.contains('alto-contraste')) {
            localStorage.setItem('altoContraste', 'true');
        } else {
            localStorage.setItem('altoContraste', 'false');
        }
    });
});