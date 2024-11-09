const emojis = [
    "😺", "😺", "🦝", "🦝", "🦊", "🦊", "🐶", "🐶", "🐵", "🐵", "🐮", "🐮",
];
let openCards = [];
let isProcessing = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function initializeGame() {
    openCards = [];
    isProcessing = false;
    shuffleArray(emojis);
    const gameContainer = document.querySelector(".game");
    gameContainer.innerHTML = "";  

    emojis.forEach((emoji) => {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = emoji;
        box.onclick = handleClick;
        gameContainer.appendChild(box);
    });
}

function handleClick() {
    if (isProcessing || openCards.length >= 2 || this.classList.contains("boxMatch")) return;
    
    this.classList.add("boxOpen");
    openCards.push(this); 

    if (openCards.length === 2) {
        isProcessing = true; 
        setTimeout(checkMatch, 500);
}
}

function checkMatch() {
    const [firstCard, secondCard] = openCards;

    if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard.classList.add("boxMatch");
        secondCard.classList.add("boxMatch");
    } else {

        firstCard.classList.remove("boxOpen");
        secondCard.classList.remove("boxOpen");
    }


    openCards = [];
    isProcessing = false; 


    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu!!");
        
}

}

initializeGame(); 
