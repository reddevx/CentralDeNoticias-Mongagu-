document.addEventListener('DOMContentLoaded', () => {
    startInitialConversation();
});

function startInitialConversation() {
    setTimeout(() => {
        appendMessage('received', 'Maria', users[0].avatar, 'Olá, tudo bem?');
    }, 1000);
    setTimeout(() => {
        appendMessage('received', 'João', users[1].avatar, 'Sim, e você?');
    }, 2000);
    setTimeout(() => {
        appendMessage('received', 'Ana', users[2].avatar, 'Estou bem também.');
    }, 3000);
    setTimeout(() => {
        appendMessage('received', 'Ana', users[3].avatar, 'Alguém sabe se tem alguma construção na rua Aimores ?');
    }, 4000);
    setTimeout(() => {
        appendMessage('received', 'Carlos', users[3].avatar, 'Não que eu saiba.');
    }, 5000);
    setTimeout(() => {
        appendMessage('received', 'Beatriz', users[3].avatar, 'Não, só a feira de domingo.');
    }, 6000);
    setTimeout(() => {
        appendMessage('received', 'Ana', users[3].avatar, '@Carlos ah ss, obrigado.');
    }, 7000);
}

function handleCarlosResponse() {
    setTimeout(() => {
        appendMessage('received', 'Beatriz', users[4].avatar, 'Está tudo tranquilo.');
    }, 1000);
    setTimeout(() => {
        appendMessage('received', 'Lucas', users[5].avatar, 'Nada de trânsito por lá.');
    }, 2000);
    setTimeout(() => {
        appendMessage('received', 'Fernanda', users[6].avatar, 'Confirmado, sem trânsito.');
    }, 3000);
    setTimeout(() => {
        appendMessage('received', 'Beatriz', users[4].avatar, 'só tem um doido na rua.');
    }, 4000);
}


document.getElementById('send-button').addEventListener('click', handleSendMessage);
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSendMessage();
    }
});
// Fotos dos avatares
const users = [
    { name: 'Maria', avatar: 'Imagens/m.jpg' },
    { name: 'João', avatar: 'Imagens/h.jpg' },
    { name: 'Ana', avatar: 'Imagens/mu.jpg' },
    { name: 'Carlos', avatar: 'Imagens/ho.jpg' },
    { name: 'Beatriz', avatar: 'Imagens/mul.jpg' },
    { name: 'Lucas', avatar: 'Imagens/hom.jpg' },
    { name: 'Fernanda', avatar: 'Imagens/mulh.jpg' }
];

let step = 0;

function handleSendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        appendMessage('sent', 'Você', '', messageText);
        messageInput.value = '';
        messageInput.focus();
        handleResponses(messageText);
    }
}

function handleResponses(userMessage) {
    if (step === 0) {
        setTimeout(() => {
            appendMessage('received', 'Maria', users[0].avatar, ' A água está no joelho.');
        }, 1000);
        setTimeout(() => {
            appendMessage('received', 'João', users[1].avatar, 'Sim, muitos alagamentos.');
        }, 2000);
        setTimeout(() => {
            appendMessage('received', 'Ana', users[2].avatar, 'A situação está difícil com esses alagamentos.');
        }, 3000);
        setTimeout(() => {
            appendMessage('received', 'Carlos', users[3].avatar, 'Alguém sabe como está o trânsito na avenida principal?');
            handleCarlosResponse(); // Chamando handleCarlosResponse após a conversa inicial
        }, 4000);
    }

    step++;
}

function appendMessage(type, username, avatar, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);

    if (avatar) {
        const avatarElement = document.createElement('img');
        avatarElement.classList.add('avatar');
        avatarElement.src = avatar;
        messageElement.appendChild(avatarElement);
    }

    const messageContent = document.createElement('div');
    const usernameElement = document.createElement('span');
    usernameElement.classList.add('username');
    usernameElement.textContent = username;

    const textElement = document.createElement('span');
    textElement.innerHTML = text;

    messageContent.appendChild(usernameElement);
    messageContent.appendChild(textElement);
    messageElement.appendChild(messageContent);

    document.getElementById('messages').appendChild(messageElement);
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
}
