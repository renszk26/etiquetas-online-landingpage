// js/contato.js

// Inicializa o EmailJS
// Substitua "SEU_PUBLIC_KEY_AQUI" pelo seu PUBLIC KEY real do EmailJS
emailjs.init("RDwW0yW_JvDtyaYJ8");

const form = document.getElementById("formContato");
const msgStatus = document.getElementById("statusMsg");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        msgStatus.textContent = "Enviando mensagem...";
        const params = {
            nome: document.getElementById("nome").value.trim(),
            email: document.getElementById("email").value.trim(),
            mensagem: document.getElementById("mensagem").value.trim()
        };

        // Validação simples extra (além do required no HTML)
        if (!params.nome || !params.email || !params.mensagem) {
            msgStatus.textContent = "Por favor, preencha todos os campos obrigatórios *.";
            return;
        }

        emailjs
            .send("service_3501eci", "template_ujcvft1", params)
            .then(() => {
                msgStatus.textContent = "Mensagem enviada com sucesso!";
                form.reset();
            })
            .catch((err) => {
                console.error("ERRO:", err);
                msgStatus.textContent = "Erro ao enviar. Tente novamente mais tarde.";
            });
    });
}
