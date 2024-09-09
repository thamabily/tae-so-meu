const simButton = document.querySelector('.sim');
const naoButton = document.querySelector('.nao');
const messageDiv = document.getElementById('resposta');

const buttonWidth = 120; // Removido o 's' extra
const buttonHeight = 50;

const screenWidth = 1368;
const screenHeight = 768;

function mostrarResposta() {
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = 'Parabéns! Você aprendeu que o Taehyung é somente da Tata❤️';
}

function mudarPosicao() {
    const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));
    
    naoButton.style.left = `${randomX}px`;
    naoButton.style.top = `${randomY}px`;
}

simButton.addEventListener('click', mostrarResposta);
naoButton.addEventListener('mouseover', mudarPosicao);
