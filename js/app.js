/*
 * Create a list that holds all of your cards*/
let cardList = document.querySelectorAll("i");
console.log(cardList);
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 
 

 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/* Turn Card Over */

let openCards = [];
let selectedCard = $("li.card");
 /* set up the event listener for a card. If a card is clicked:*/
    selectedCard.click(showCard);

    /*  - display the card's symbol (put this functionality in another function that you call from this one)*/
    /*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) */

function showCard(){
        if($(this).classlist !== 'card open show match'){
        $(this).toggleClass('open');
        $(this).toggleClass('show');
        var card = $(this).querySelector("i");
        openCards.push(card);
        /*cardList.push($(this));*/
        console.log(openCards);
        if(openCards.length === 2){
                matchCard();
        }
        console.log(cardList);
}
}



function openCard(card){


        card.addClass( "open show" );
        openCards.push(card);
        /*openCards["IsOpen"] = "true"; // assign property of an // Object via bracket syntax
        openCards["picture"] = pic;*/
        
}


function closeCard(card){
    card.removeClass( "open show" );
}

function matchCard() {
    if (openCards[0] === openCards[1]) {
        console.log("We've got a match");
        openCards = [];
        cardList[cardList.length-1].addClass("match");
        cardList[cardList.length-2].addClass("match");
    } 
    else {
        console.log("Not a match");
       	cardList.slice(-2,2).removeClass("open show");
        openCards = [];
    }
}


