// js/visualizarTimes.js
document.addEventListener('DOMContentLoaded', () => {
    const novoTimeBtn = document.getElementById('novoTimeBtn');
    const timesContainer = document.querySelector('.timesContainer'); // Onde os cards dos times serão inseridos

    // 1. Configurar o botão "+ Novo Time"
    if (novoTimeBtn) {
        novoTimeBtn.addEventListener('click', () => {
            // Redireciona para a página onde os Pokémons são escolhidos para formar um time
            window.location.href = 'escolherPokemon.html';
        });
    }

    // 2. Função para carregar e exibir os times
    function carregarEExibirTimes() {
        const meusTimesJSON = localStorage.getItem('meusTimesPokemon');
        const meusTimes = meusTimesJSON ? JSON.parse(meusTimesJSON) : []; // Converte de JSON para Array

        timesContainer.innerHTML = ''; // Limpa o conteúdo atual do container

        if (meusTimes.length === 0) {
            // Se não houver times, exibe uma mensagem
            timesContainer.innerHTML = `
                <div class="sem-times">
                    <p>Você ainda não criou nenhum time!</p>
                    <p>Clique em "+ Novo Time" para começar a montar sua equipe.</p>
                </div>
            `;
            return; // Sai da função se não houver times
        }

        // Itera sobre cada time salvo e cria um card para ele
        meusTimes.forEach((time, index) => {
            const timeCardElement = document.createElement('div');
            timeCardElement.classList.add('time-card'); // Adiciona uma classe para estilização
            // Você pode usar o índice como um ID ou um nome único se seus times tiverem
            timeCardElement.dataset.teamId = time.nome.replace(/\s+/g, '-') + '-' + index; // Ex: Time-1-0

            // Monta o HTML para os Pokémons dentro do time
            let pokemonsHtml = '<div class="pokemons-no-time-container">';
            if (time.pokemons && time.pokemons.length > 0) {
                time.pokemons.forEach(pokemon => {
                    pokemonsHtml += `
                        <div class="pokemon-no-time" title="${pokemon.nome || 'Pokémon sem nome'}">
                            <img src="${pokemon.imagem || 'img/placeholder.png'}" alt="${pokemon.nome || 'Pokémon'}">
                            <p class="pokemon-nome-no-time">${pokemon.nome || 'N/A'}</p>
                        </div>
                    `;
                });
            } else {
                pokemonsHtml += '<p>Time vazio.</p>';
            }
            pokemonsHtml += '</div>';

            // Monta o HTML completo do card do time
            timeCardElement.innerHTML = `
                <h3 class="nome-time">${time.nome || `Time ${index + 1}`}</h3>
                ${pokemonsHtml}
                <button class="btn-excluir-time" data-team-index="${index}">Excluir Time</button>
            `;

            timesContainer.appendChild(timeCardElement);
        });

        // Após adicionar todos os cards, configura os botões de exclusão
        configurarBotoesExcluir();
    }

    // 3. Função para configurar os botões de excluir
    function configurarBotoesExcluir() {
        const botoesExcluir = document.querySelectorAll('.btn-excluir-time');
        botoesExcluir.forEach(botao => {
            botao.addEventListener('click', (event) => {
                // Pega o índice do time a ser excluído a partir do atributo data-team-index
                const teamIndex = parseInt(event.target.dataset.teamIndex);
                excluirTime(teamIndex);
            });
        });
    }

    // 4. Função para excluir um time
    function excluirTime(indexParaExcluir) {
        const meusTimesJSON = localStorage.getItem('meusTimesPokemon');
        let meusTimes = meusTimesJSON ? JSON.parse(meusTimesJSON) : [];

        if (indexParaExcluir >= 0 && indexParaExcluir < meusTimes.length) {
            const timeRemovido = meusTimes.splice(indexParaExcluir, 1)[0]; // Remove o time do array
            
            // Confirmação visual (opcional)
            alert(`Time "${timeRemovido.nome}" foi excluído!`);

            localStorage.setItem('meusTimesPokemon', JSON.stringify(meusTimes)); // Atualiza o localStorage
            carregarEExibirTimes(); // Recarrega e reexibe a lista de times atualizada
        } else {
            console.error("Índice inválido para exclusão de time:", indexParaExcluir);
        }
    }

    // Chama a função principal para carregar os times quando a página carregar
    carregarEExibirTimes();
});