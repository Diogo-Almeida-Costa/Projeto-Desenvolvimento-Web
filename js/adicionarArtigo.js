document.addEventListener("DOMContentLoaded", () => 
{
    const form = document.getElementById("artigoForm");

    form.addEventListener("submit", (e) => 
    {
        e.preventDefault();

        const titulo = document.getElementById("tituloArtigo").value.trim();
        const resumo = document.getElementById("resumoArtigo").value.trim();
        const conteudo = document.getElementById("conteudoArtigo").value.trim();
        const fileInput = document.getElementById("imagemArtigo");

        if(!titulo || !resumo || !conteudo)
        {
            alert("Preencha todos os campos.");
            return;
        }

        const salvarArtigo = (dataURL) =>
        {
            const novoArtigo = {
                titulo,
                resumo,
                conteudo,
                imagem: dataURL
            };
            const artigos = JSON.parse(localStorage.getItem("artigos")) || [];
            artigos.push(novoArtigo);
            localStorage.setItem("artigos", JSON.stringify(artigos));
            window.location.href = "artigos.html";
        };

        if(fileInput.file && fileInput.files[0])
        {
            const reader = new FileReader();
            reader.onload = () => salvarArtigo(reader.result);
            reader.readAsDataURL(fileInput.files[0]);
            return;
        }
        else
        {
            salvarArtigo("../img/Mew.jpeg");
        }

    });
});