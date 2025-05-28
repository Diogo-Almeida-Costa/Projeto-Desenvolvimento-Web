document.addEventListener("DOMContentLoaded", () => 
{
    const container = document.getElementById("detalhesArtigo");

    const tituloPagina = document.getElementById("tituloPagina");

    const removerArtigoBtn = document.getElementById("removerArtigoBtn");
    const editarArtigoBtn = document.getElementById("editarArtigoBtn");

    const artigos = JSON.parse(localStorage.getItem("artigos")) || [];
    const indice = localStorage.getItem("artigoSelecionado");

    if(isNaN(indice) || !artigos[indice])
    {
        container.innerHTML = "<p class='text-danger'> Artigo não encontrado </p>";
        removerArtigoBtn.style.display = 'none';
        editarArtigoBtn.style.display = 'none';
        return;
    }

    const artigo = artigos[indice];

    container.innerHTML = `
        <img src="${artigo.imagem}" class="img-fluid rounded mx-auto d-block mb-4" style="max-height:200px; object-fit:cover;" alt="Imagem do artigo">
        <h2 class="text-center mb-3"> ${artigo.titulo} </h2>
        <p class="fs-5"> ${artigo.conteudo} </p>
    `;

    tituloPagina.textContent = `${artigo.titulo}`;

    removerArtigoBtn.addEventListener("click", () => 
    {
        artigos.splice(indice, 1);
        localStorage.setItem("artigos", JSON.stringify(artigos));
        localStorage.removeItem("artigoSelecionado");
        window.location.href = "artigos.html";
    });

    editarArtigoBtn.addEventListener("click", () =>
    {
        localStorage.setItem("editandoArtigoIndice", indice);

        window.location.href = "adicionarArtigo.html";
    });

});