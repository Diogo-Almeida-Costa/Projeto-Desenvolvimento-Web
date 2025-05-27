// Função para validar o formulário de cadastro
document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.querySelector('.quadrado-central');
    const mensagemElement = document.getElementById('mensagem');
    
    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obter valores dos campos
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;
        
        // Validar campos
        if (!username || !email || !senha || !confirmarSenha) {
            exibirMensagem('Todos os campos são obrigatórios', 'erro');
            return;
        }
        
        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            exibirMensagem('Por favor, insira um email válido', 'erro');
            return;
        }
        
        // Validar senhas iguais
        if (senha !== confirmarSenha) {
            exibirMensagem('As senhas não coincidem', 'erro');
            return;
        }
        
        // Validar tamanho da senha
        if (senha.length < 6) {
            exibirMensagem('A senha deve ter pelo menos 6 caracteres', 'erro');
            return;
        }
        
        // Verificar se usuário já existe
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        
        if (usuarios.some(user => user.username === username)) {
            exibirMensagem('Nome de usuário já está em uso', 'erro');
            return;
        }
        
        if (usuarios.some(user => user.email === email)) {
            exibirMensagem('Email já está cadastrado', 'erro');
            return;
        }
        
        // Criar novo usuário
        const novoUsuario = {
            username,
            email,
            senha, 
            dataCadastro: new Date().toISOString()
        };
        
        // Adicionar ao localStorage
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        // Exibir mensagem de sucesso
        exibirMensagem('Cadastro realizado com sucesso! Redirecionando...', 'sucesso');
        
        // Redirecionar para login após 2 segundos
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
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
