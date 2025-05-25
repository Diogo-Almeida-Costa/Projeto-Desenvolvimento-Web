document.addEventListener("DOMContentLoaded", () => 
{
    const container = document.getElementById("detalhesArtigo");

    const artigos = JSON.parse(localStorage.getItem("artigos")) || [];
    const indice = localStorage.getItem("artigoSelecionado");

    if(!indice || !artigos[indice])
    {
        container.innerHTML = "<p class='text-danger'> Artigo não encontrado </p>";
        return;
    }

    const artigo = artigos[indice];

    container.innerHTML = `
        <img src="${artigo.imagem}" class="img-fluid rounded mb-3" alt="Imagem do artigo">
        <h2 class="text-primary"> ${artigo.titulo} </h2>
        <p class="mt-3 fs-5 text-dark"> ${artigo.resumo} </p>
    `;
});