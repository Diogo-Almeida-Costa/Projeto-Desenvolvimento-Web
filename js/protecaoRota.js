// Função para verificar se o usuário está logado e adicionar proteção de rota
document.addEventListener('DOMContentLoaded', function() {
    if (!verificarAutenticacao()) {
        return; 
    }

    exibirNomeUsuario();
});
