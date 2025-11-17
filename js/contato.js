// Inicializa o EmailJS
emailjs.init("SEU_PUBLIC_KEY_AQUI"); // Substitua pelo seu PUBLIC KEY

const form = document.getElementById("formContato");
const msgStatus = document.getElementById("statusMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    msgStatus.textContent = "Enviando...";

    const params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    };

    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", params)
        .then(() => {
            msgStatus.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        })
        .catch((err) => {
            msgStatus.textContent = "Erro ao enviar. Tente novamente.";
            console.error("ERRO:", err);
        });
});
