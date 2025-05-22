document.addEventListener("DOMContentLoaded", () => 
{
    const form = document.getElementById("artigoForm");
    form.addEventListener("submit", (e) => 
    {
        e.preventDefault();

        const titulo = document.getElementById("tituloArtigo").value;
        const resumo = document.getElementById("resumoArtigo").value;

        const novoArtigo = {
            titulo,
            resumo,
            imagem: "../img/regiao-kanto.jpg"
        };

        let artigos = JSON.parse(localStorage.getItem("artigos")) || [];
        artigos.push(novoArtigo);
        localStorage.setItem("artigos", JSON.stringify(artigos));

        window.location.href = "artigos.html";
    });
});