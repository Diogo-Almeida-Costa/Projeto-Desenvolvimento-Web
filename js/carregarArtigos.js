document.addEventListener("DOMContentLoaded", () => 
{
    const lista = document.getElementById("listaArtigos");
    const artigos = JSON.parse(localStorage.getItem("artigos")) || [];

    artigos.forEach((artigo, index) => 
    {
        const card = document.createElement("a");
        card.classList.add("artigoCard");
        card.href = "../gerenciaArtigos/detalhesArtigo.html";

        card.addEventListener("click", () =>
        {
            localStorage.setItem("artigoSelecionado", index)
        });

        card.innerHTML = `
            <img src="${artigo.imagem}" class="thumb"/>
            <div class="conteudoCard">
                <h2 class="tituloArtigo"> ${artigo.titulo}</h2>
                <p class="textoArtigo"> ${artigo.resumo} </p>
            </div>
        `;

        lista.appendChild(card);
    });
});