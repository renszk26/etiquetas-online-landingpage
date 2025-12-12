// js/produtos.js

// COLE AQUI O LINK CSV DA ABA PRODUTOS QUE VOCÊ GEROU NO GOOGLE SHEETS
const URL_PLANILHA_PRODUTOS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwy8XI9WN6sRDhaJ0kInU3f0bpYxFTwzOfjTQETmPNEgiS6iSMll09cyOAuU8v2vKYRUSen__v7lL3/pub?gid=0&single=true&output=csv';

function carregarProdutos() {
    const container = document.querySelector(".produtos-cards");
    if (!container) return;

    // Usa o PapaParse para ler o CSV
    Papa.parse(URL_PLANILHA_PRODUTOS, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(resultados) {
            const produtos = resultados.data;
            container.innerHTML = ""; // Limpa o container

            produtos.forEach((prod) => {
                // Verifica se a linha tem conteúdo mínimo para evitar erros
                if(!prod.preco || !prod.descricao) return;

                const card = document.createElement("article");
                card.classList.add("card");
                card.setAttribute("aria-label", `Produto: ${prod.descricao}`);

                card.innerHTML = `
                    <img src="${prod.img || 'assets/padrao.png'}" 
                         alt="Imagem ilustrativa do produto: ${prod.descricao}" 
                         class="img-responsiva">
                    <h3>${prod.preco}</h3>
                    <p style="color:#005C00; font-weight:600;">${prod.parcelamento}</p>
                    <p>${prod.descricao}</p>
                `;

                container.appendChild(card);
            });
        },
        error: function(err) {
            console.error("Erro ao carregar produtos:", err);
            container.innerHTML = "<p>Não foi possível carregar os produtos no momento.</p>";
        }
    });
}

carregarProdutos();