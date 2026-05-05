const respostas = {
    pt: {
        "sobre você": "Sou estudante de Engenharia de Software com formação técnica em informática...",
        "pontos fortes": "Sou organizada, proativa e gosto de aprender constantemente.",
        "pontos fracos": "Às vezes sou muito detalhista, mas estou aprendendo a equilibrar isso.",
        "motivação": "Sou apaixonada por tecnologia e por resolver problemas com código.",
        "default": "Ótima pergunta! Posso te contar mais sobre isso em uma conversa 😊"
    },

    en: {
        "about yourself": "I'm a Software Engineering student with a technical background in IT...",
        "strengths": "I am organized, proactive and always willing to learn.",
        "weaknesses": "Sometimes I can be too detail-oriented, but I'm improving this.",
        "motivation": "I am passionate about technology and solving problems through code.",
        "default": "That's a great question! I'd be happy to talk more about it 😊"
    },

    unknown: {
        "default": "Desculpa, ainda não aprendi essa língua 😅"
    }
};

function encontrarResposta(texto, idioma) {
    const respostasIdioma = respostas[idioma];

    for (let chave in respostasIdioma) {
        if (texto.includes(chave)) {
            return respostasIdioma[chave];
        }
    }

    return respostasIdioma.default;
}

function detectarIdioma(texto) {
    texto = texto.toLowerCase();

    const palavrasPT = ["você", "seu", "sua", "porque", "como"];
    const palavrasEN = ["you", "your", "why", "how", "what"];

    if (palavrasPT.some(p => texto.includes(p))) return "pt";
    if (palavrasEN.some(p => texto.includes(p))) return "en";

    return "unknown";
}

function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value.toLowerCase().trim();
    if (!userText) return;

    // mostra mensagem do usuário
    chatBox.innerHTML += `
      <div class="message user">
        <div class="bubble">${input.value}</div>
      </div>
    `;

    const idioma = detectarIdioma(userText);

    let resposta;

    if (idioma === "unknown") {
        resposta = respostas.unknown.default;
    } else {
        resposta = encontrarResposta(userText, idioma);
    }

    if (typeof resposta !== "string") {
        resposta = "Hmm... ainda estou aprendendo a responder isso 😅";
    }

    // efeito digitando
    const typingId = "typing-" + Date.now();

    chatBox.innerHTML += `
      <div class="message bot" id="${typingId}">
        <div class="bubble typing">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        const typingElement = document.getElementById(typingId);
        if (typingElement) typingElement.remove();

        chatBox.innerHTML += `
          <div class="message bot">
            <div class="bubble">${resposta}</div>
          </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    input.value = "";
}

const chatWidget = document.getElementById("chat-widget");

document.getElementById("chat-toggle").addEventListener("click", toggleChat);

function toggleChat() {
    chatWidget.style.display =
        chatWidget.style.display === "flex" ? "none" : "flex";
}

const input = document.getElementById("user-input");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});