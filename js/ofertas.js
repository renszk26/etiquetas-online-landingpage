// js/ofertas.js

// Lista de produtos (adicione, remova ou edite aqui)
const ofertas = [
    {
        img: "assets/default.png",
        precoAntigo: "R$ 507,49",
        precoAtual: "R$ 407,49",
        descricao: "Kit 10 Rls Etiqueta 10×5 100×50 Bopp Fosco + 5 Ribbon Misto Cor Branco"
    },
    {
        img: "assets/default.png",
        precoAntigo: "R$ 489,90",
        precoAtual: "R$ 389,90",
        descricao: "Etiqueta Adesiva 50×30 Bopp Fosco 15 Rolos"
    },
    {
        img: "assets/default.png",
        precoAntigo: "R$ 299,00",
        precoAtual: "R$ 219,00",
        descricao: "Ribbon Cera 110mm x 70m Preto - Caixa com 10 unidades"
    },
    {
        img: "assets/default.png",
        precoAntigo: "R$ 189,99",
        precoAtual: "R$ 129,99",
        descricao: "Etiqueta Térmica 40×30 – 30 Rolos"
    }
];

// Função para montar os cards dinamicamente
function carregarOfertas() {
    const container = document.querySelector(".ofertas-cards");
    if (!container) return;

    container.innerHTML = "";

    ofertas.forEach((produto) => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.setAttribute("aria-label", `Oferta: ${produto.descricao}`);

        card.innerHTML = `
            <img src="${produto.img}"
                 alt="Imagem ilustrativa do produto: ${produto.descricao}"
                 class="img-responsiva">
            <p>
                <span style="color:#00A650; text-decoration: line-through;">
                    ${produto.precoAntigo}
                </span>
            </p>
            <h3>${produto.precoAtual}</h3>
            <p>${produto.descricao}</p>
        `;

        container.appendChild(card);
    });
}

carregarOfertas();
