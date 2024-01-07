// Part 3: HTML page to draw cards
let deckId;

async function createNewDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
    const data = await response.json();
    deckId = data.deck_id;
}

async function drawCard() {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
    const data = await response.json();

    if (data.success) {
        const card = data.cards[0];
        const cardElement = document.createElement('p');
        cardElement.textContent = `${card.value} of ${card.suit}`;
        document.getElementById('drawnCards').appendChild(cardElement);
    } else {
        alert('No more cards in the deck!');
    }
}

document.getElementById('drawCardButton').addEventListener('click', drawCard);

// Initialize by creating a new deck
createNewDeck();
