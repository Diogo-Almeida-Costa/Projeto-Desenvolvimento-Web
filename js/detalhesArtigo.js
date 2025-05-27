document.addEventListener("DOMContentLoaded", () => 
{
    const container = document.getElementById("detalhesArtigo");

    const tituloPagina = document.getElementById("tituloPagina");

    const artigos = JSON.parse(localStorage.getItem("artigos")) || [];
    const indice = localStorage.getItem("artigoSelecionado");

    if(isNaN(indice) || !artigos[indice])
    {
        container.innerHTML = "<p class='text-danger'> Artigo não encontrado </p>";
        return;
    }

    const artigo = artigos[indice];

    container.innerHTML = `
        <img src="${artigo.imagem}" class="img-fluid rounded mx-auto d-block mb-4" style="max-height:200px; object-fit:cover;" alt="Imagem do artigo">
        <h2 class="text-center mb-3"> ${artigo.titulo} </h2>
        <p class="fs-5"> ${artigo.conteudo} </p>
    `;

    tituloPagina.value = `${artigo.titulo}`;

});