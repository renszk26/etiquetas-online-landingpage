// js/ofertas.js

// COLE AQUI O LINK CSV DA ABA OFERTAS QUE VOCÊ GEROU NO GOOGLE SHEETS
const URL_PLANILHA_OFERTAS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwy8XI9WN6sRDhaJ0kInU3f0bpYxFTwzOfjTQETmPNEgiS6iSMll09cyOAuU8v2vKYRUSen__v7lL3/pub?gid=1498650994&single=true&output=csv';

function carregarOfertas() {
    const container = document.querySelector(".ofertas-cards");
    if (!container) return;

    Papa.parse(URL_PLANILHA_OFERTAS, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(resultados) {
            const ofertas = resultados.data;
            container.innerHTML = "";

            ofertas.forEach((produto) => {
                if(!produto.precoAtual || !produto.descricao) return;

                const card = document.createElement("article");
                card.classList.add("card");
                card.setAttribute("aria-label", `Oferta: ${produto.descricao}`);

                card.innerHTML = `
                    <img src="${produto.img || 'assets/padrao.png'}" 
                         alt="Imagem ilustrativa do produto: ${produto.descricao}" 
                         class="img-responsiva">
                    <p>
                        <span class="preco";">
                            ${produto.precoAntigo}
                        </span>
                    </p>
                    <h3>${produto.precoAtual}</h3>
                    <p>${produto.descricao}</p>
                `;

                container.appendChild(card);
            });
        },
        error: function(err) {
            console.error("Erro ao carregar ofertas:", err);
            container.innerHTML = "<p>Não foi possível carregar as ofertas no momento.</p>";
        }
    });
}

carregarOfertas();