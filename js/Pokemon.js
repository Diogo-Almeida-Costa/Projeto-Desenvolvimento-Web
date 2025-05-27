// js/Pokemon.js
export class Pokemon {
    constructor(id, nome, tipo1, tipo2, altura, peso, habilidades, descricao, imagemUrl) {
        this.id = id;
        this.nome = nome;
        this.tipo1 = tipo1;
        this.tipo2 = tipo2;
        this.altura = altura;
        this.peso = peso;
        this.habilidades = habilidades;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
    }

    getTipoCssClass(tipo) {
        if (!tipo) return '';
        return `tipo-${tipo.toLowerCase().replace('é', 'e')}`; // Normaliza 'elétrico' para 'eletrico'
    }
}