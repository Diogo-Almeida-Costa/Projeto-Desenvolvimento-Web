// Função para validar o formulário de login
document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.querySelector('.quadrado-central');
    const mensagemElement = document.getElementById('mensagem');
    
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obter valores dos campos
        const username = document.getElementById('username').value.trim();
        const senha = document.getElementById('senha').value;
        
        // Validar campos
        if (!username || !senha) {
            exibirMensagem('Por favor, preencha todos os campos', 'erro');
            return;
        }
        
        // Buscar usuários no localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        
        // Verificar se o usuário existe
        const usuario = usuarios.find(user => user.username === username);
        
        if (!usuario) {
            exibirMensagem('Usuário não encontrado', 'erro');
            return;
        }
        
        // Verificar se a senha está correta
        if (usuario.senha !== senha) {
            exibirMensagem('Senha incorreta', 'erro');
            return;
        }
        
        // Login bem-sucedido
        exibirMensagem('Login realizado com sucesso! Redirecionando...', 'sucesso');
        
        // Salvar informação de usuário logado
        const dadosLogin = {
            username: usuario.username,
            email: usuario.email,
            logado: true,
            timestamp: new Date().getTime()
        };
        
        localStorage.setItem('usuarioLogado', JSON.stringify(dadosLogin));
        
        // Redirecionar para a página principal após 1 segundo
        setTimeout(() => {
            window.location.href = 'escolherPokemon.html';
        }, 1000);
    });
    
    // Função para exibir mensagens
    function exibirMensagem(texto, tipo) {
        mensagemElement.textContent = texto;
        mensagemElement.className = `mensagem ${tipo}`;
        mensagemElement.style.display = 'block';
        
        // Esconder a mensagem após 5 segundos se for erro
        if (tipo === 'erro') {
            setTimeout(() => {
                mensagemElement.style.display = 'none';
            }, 5000);
        }
    }
});
