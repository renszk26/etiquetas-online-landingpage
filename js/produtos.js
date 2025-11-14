// Lista dos produtos (adicione, remova ou edite aqui)
const produtos = [
    {
        img: "assets/default.png",
        preco: "R$ 407,49",
        parcelamento: "12x R$ 33,96 sem juros",
        descricao: "Kit 10 Rls Etiqueta 10×5 100×50 Bopp Fosco + 5 Ribbon Misto Cor Branco"
    },
    {
        img: "assets/default.png",
        preco: "R$ 189,99",
        parcelamento: "12x R$ 15,83 sem juros",
        descricao: "Etiqueta Térmica 40×30 – 30 Rolos"
    },
    {
        img: "assets/default.png",
        preco: "R$ 319,90",
        parcelamento: "12x R$ 26,65 sem juros",
        descricao: "Etiquetas 50×50 Bopp Fosco – Caixa com 20 Rolos"
    },
    {
        img: "assets/default.png",
        preco: "R$ 259,00",
        parcelamento: "12x R$ 21,58 sem juros",
        descricao: "Ribbon Misto 110mm x 74m – Caixa com 10"
    },
    {
        img: "assets/default.png",
        preco: "R$ 149,00",
        parcelamento: "12x R$ 12,41 sem juros",
        descricao: "Etiqueta 30×20 Térmica – 40 Rolos"
    },
    {
        img: "assets/default.png",
        preco: "R$ 579,00",
        parcelamento: "12x R$ 48,25 sem juros",
        descricao: "Kit Impressão Zebra + Etiquetas + Ribbon"
    },
    {
        img: "assets/default.png",
        preco: "R$ 199,00",
        parcelamento: "12x R$ 16,58 sem juros",
        descricao: "Etiquetas 40×60 Bopp – 16 Rolos"
    },
    {
        img: "assets/default.png",
        preco: "R$ 349,90",
        parcelamento: "12x R$ 29,15 sem juros",
        descricao: "Etiquetas 80×50 Fosco – 12 Rolos"
    },
    {
        img: "assets/default.png",
        preco: "R$ 279,90",
        parcelamento: "12x R$ 23,32 sem juros",
        descricao: "Ribbon Premium 110mm x 300m"
    },
    {
        img: "assets/default.png",
        preco: "R$ 159,00",
        parcelamento: "12x R$ 13,25 sem juros",
        descricao: "Etiqueta 50×30 Térmica – Pacote com 30"
    },
    {
        img: "assets/default.png",
        preco: "R$ 499,00",
        parcelamento: "12x R$ 41,58 sem juros",
        descricao: "Kit 30 Rolos Etiqueta 60×40 Bopp Fosco"
    },
    {
        img: "assets/default.png",
        preco: "R$ 229,00",
        parcelamento: "12x R$ 19,08 sem juros",
        descricao: "Etiquetas 30×10 – 50 Rolos"
    }
];

// Função para montar os cards dinamicamente
function carregarProdutos() {
    const container = document.querySelector(".produtos-cards");
    container.innerHTML = "";

    produtos.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.textAlign = "left";

        card.innerHTML = `
            <img src="${prod.img}" alt="" height="201px" width="100%">
            <h3>${prod.preco}</h3>
            <h5 style="color: #00A650;">${prod.parcelamento}</h5>
            <p>${prod.descricao}</p>
        `;

        container.appendChild(card);
    });
}

carregarProdutos();
