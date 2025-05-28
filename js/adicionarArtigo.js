document.addEventListener("DOMContentLoaded", () => 
{
    const form = document.getElementById("artigoForm");

    const fileInput = document.getElementById("imagemArtigo");
    const tituloI = document.getElementById("tituloArtigo");
    const resumoI = document.getElementById("resumoArtigo");
    const conteudoI = document.getElementById("conteudoArtigo");
    const tituloPagina = document.querySelector('h2');

    let editandoIndice = null;

    const indiceParaEditar = localStorage.getItem("editandoArtigoIndice");
    if(indiceParaEditar !== null)
    {
        const artigos = JSON.parse(localStorage.getItem("artigos")) || [];
        const artigoEditar = artigos[indiceParaEditar];

        if(artigoEditar)
        {
            tituloI.value = artigoEditar.titulo;
            resumoI.value = artigoEditar.resumo;
            conteudoI.value = artigoEditar.conteudo;

            tituloPagina.textContent = "Editar Artigo";
            editandoIndice = parseInt(indiceParaEditar);
        }
        else
        {
            localStorage.removeItem("editandoArtigoIndice");
        }
    }

    form.addEventListener("submit", (e) => 
    {
        e.preventDefault();

        const titulo = tituloI.value.trim();
        const resumo = resumoI.value.trim();
        const conteudo = conteudoI.value.trim();

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
            let artigos = JSON.parse(localStorage.getItem("artigos")) || [];

            if(editandoIndice !== null)
            {
                artigos[editandoIndice] = novoArtigo;
                localStorage.removeItem("editandoArtigoIndice");
            }
            else
            {
                artigos.push(novoArtigo);
            }

            localStorage.setItem("artigos", JSON.stringify(artigos));
            window.location.href = "artigos.html";
        };

        if(fileInput.files && fileInput.files[0])
        {
            const reader = new FileReader();
            reader.onload = () => salvarArtigo(reader.result);
            reader.readAsDataURL(fileInput.files[0]);
            return;
        }
        else
        {
            if(editandoIndice !== null && artigos[editandoIndice] && artigos[editandoIndice].imagem)
            {
                salvarArtigo(artigos[editandoIndice].imagem);
            }
            else
            {
                salvarArtigo("../img/Mew.jpeg");
            }
        }

    });
});