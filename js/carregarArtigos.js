document.addEventListener("DOMContentLoaded", () => 
{
    const lista = document.getElementById("listaArtigos");
    const artigos = JSON.parse(localStorage.getItem("artigos")) || [];

    artigos.forEach((artigo, index) => 
    {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        const card = document.createElement("a");
        card.classList.add("artigoCard", "text-decoration-none");
        card.href = "../gerenciaArtigos/detalhesArtigo.html";

        card.addEventListener("click", () =>
        {
            localStorage.setItem("artigoSelecionado", index)
        });

        card.innerHTML = `
            <div class="card h-100">
                <img src="${artigo.imagem}" class="card-img-top" alt="Imagem do artigo"/>
                <div class="card-body">
                    <h2 class="card-title"> ${artigo.titulo}</h2>
                    <p class="card-text"> ${artigo.resumo} </p>
                </div>
            </div>
        `;

        col.appendChild(card);
        lista.appendChild(col);
    });
});