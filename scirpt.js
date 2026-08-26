const messages = [
    "Talaga ba Hannah?",
    "Luh, ayos",
    "Trippings ka",
    "Weh",
    "BADIIINGGGG!!!",
    "Ayaw mo ba talaga ng tula?",
    "Ahh sawa kana",
    "Panget mo ka bonding",
    "Balakajan iyak ako..."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yesPage.html";
}
