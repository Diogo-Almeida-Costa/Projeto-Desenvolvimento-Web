// Modificar o arquivo escolherPokemon.html para incluir a verificação de autenticação
document.addEventListener('DOMContentLoaded', function() {
    // Incluir o script de autenticação
    const scriptAutenticacao = document.createElement('script');
    scriptAutenticacao.src = 'js/autenticacao.js';
    document.body.appendChild(scriptAutenticacao);
    
    // Incluir o script de proteção de rota após carregar o script de autenticação
    scriptAutenticacao.onload = function() {
        const scriptProtecao = document.createElement('script');
        scriptProtecao.src = 'js/protecaoRota.js';
        document.body.appendChild(scriptProtecao);
    };
});
