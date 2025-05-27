// Função para verificar se o usuário está logado
function verificarAutenticacao() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
    
    // Verificar se o usuário está logado
    if (!usuarioLogado.logado) {
        // Redirecionar para a página de login
        window.location.href = 'login.html';
        return false;
    }
    
    // Verificar se o login expirou (opcional - 24 horas)
    const agora = new Date().getTime();
    const tempoLogado = agora - usuarioLogado.timestamp;
    const umDiaEmMs = 24 * 60 * 60 * 1000;
    
    if (tempoLogado > umDiaEmMs) {
        // Login expirado
        localStorage.removeItem('usuarioLogado');
        window.location.href = 'login.html?expirado=true';
        return false;
    }
    
    return true;
}

// Função para fazer logout
function fazerLogout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html?logout=true';
}

// Função para obter informações do usuário logado
function getUsuarioLogado() {
    return JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
}

// Função para exibir nome do usuário na página (pode ser usada em qualquer página interna)
function exibirNomeUsuario() {
    const usuarioLogado = getUsuarioLogado();
    const elementoNomeUsuario = document.getElementById('nome-usuario');
    
    if (elementoNomeUsuario && usuarioLogado.username) {
        elementoNomeUsuario.textContent = usuarioLogado.username;
    }
}

// Adicionar botão de logout na página
function adicionarBotaoLogout() {
    // Verificar se o botão já existe
    if (!document.getElementById('logout-btn')) {
        // Criar o botão de logout
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'logout-btn';
        logoutBtn.className = 'btn-logout';
        logoutBtn.textContent = 'Sair';
        logoutBtn.onclick = fazerLogout;
        
        // Adicionar estilos para o botão
        const style = document.createElement('style');
        style.textContent = `
            .btn-logout {
                position: absolute;
                top: 10px;
                right: 10px;
                background-color: #f44336;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
                z-index: 1000;
            }
            .btn-logout:hover {
                background-color: #d32f2f;
            }
        `;
        document.head.appendChild(style);
        
        // Adicionar o botão ao corpo do documento
        document.body.appendChild(logoutBtn);
    }
}

// Verificar parâmetros da URL para exibir mensagens específicas
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se está na página de login
    if (window.location.pathname.includes('login.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const mensagemElement = document.getElementById('mensagem');
        
        if (urlParams.has('logout') && mensagemElement) {
            mensagemElement.textContent = 'Logout realizado com sucesso!';
            mensagemElement.className = 'mensagem sucesso';
            mensagemElement.style.display = 'block';
            
            setTimeout(() => {
                mensagemElement.style.display = 'none';
            }, 3000);
        }
        
        if (urlParams.has('expirado') && mensagemElement) {
            mensagemElement.textContent = 'Sua sessão expirou. Por favor, faça login novamente.';
            mensagemElement.className = 'mensagem erro';
            mensagemElement.style.display = 'block';
            
            setTimeout(() => {
                mensagemElement.style.display = 'none';
            }, 3000);
        }
    } else {
        // Se não estiver na página de login, verificar autenticação e adicionar botão de logout
        if (verificarAutenticacao()) {
            exibirNomeUsuario();
            adicionarBotaoLogout();
        }
    }
});
