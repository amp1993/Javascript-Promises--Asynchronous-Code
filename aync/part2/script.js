let baseURL = 'https://deckofcardsapi.com/api/deck';


// //Console log value and suit when drawing card
// $('button').click(async function(){
  
//     let data = await $.getJSON(`${baseURL}/new/draw`)
//     let {suit, value } = data.cards[0]
//     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);

// })


//Request a single card from a newly shuffled deck. 
//Once you have the card, make a request to get one more card from the same deck.

// $('button').click(async function(){
//     let firstCard, secondCard; 

//     const data = await $.getJSON(`${baseURL}/new/draw`);
//     firstCard = data.cards[0];
//     let deckId = data.deck_id;
    
//     const newCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
//     secondCard = newCardData.cards[0]; 

//     [firstCard, secondCard].forEach(function(card){
//         console.log(`${card.value} of ${card.suit}`);
//     });
// });


async function setup() {
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    $btn.show().on('click', async function() {
      let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  setup();
;
