/*
 * Create a list that holds all of your cards*/
let cards = ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-anchor","fa-leaf","fa-bicycle","fa-diamond","fa-bomb","fa-leaf","fa-bomb","fa-bolt","fa-bicycle","fa-paper-plane-o","fa-cube"]
let deck = $("deck");
let shuffledCards = [];
let score = $("moves");
let moveCounter = 0;
let gameTimer = setInterval(updateDisplay, 1000); // every second call updateDisplay


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
  */

cardShuffle();



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

function cardShuffle() {
    shuffledCards = shuffle(cards);
    var newCards = $("li.card i");
    
    for (let i=0; i < newCards.length; i++) {
        let ind = shuffledCards[i];
        newCards[i].className = 'fa ' + ind;
    }
}

function restart(){
	$("li.card").removeClass("open show match");
	cardShuffle();
    moveCounter = 0;
    stopTimer();
    let gameTimer = setInterval(updateDisplay, 1000); // every second call updateDisplay

}

let restartGame = $("div.restart");
restartGame.click(restart);
/*
 

 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/* Turn Card Over */
console.log(shuffledCards);
let openCards = [];
let selectedCard = $("li.card");
let cardIDs = [];

let cardList = [];

 /* set up the event listener for a card. If a card is clicked:*/

        selectedCard.click(openCard);
    


    /*  - display the card's symbol (put this functionality in another function that you call from this one)*/
    /*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) */

function openCard(){
        selectedCard.removeClass("close");
        let currentCardID = $(this).attr("ID");
        if (cardIDs.includes(currentCardID))
        {
            alert("Do not select the same card twice!");
        }
        
        else
        {
            cardIDs.push(currentCardID);

    
            if($(this).classlist !== 'card open show match'){
                $(this).removeClass('close');
                $(this).toggleClass('open');
                $(this).toggleClass('show');
                var card = $(this);


                openCards.push(card);
                /*  - if the list already has another card, check to see if the two cards match*/
                if(openCards.length === 2){
                    matchCard();
                }
            }
        }
}


/* if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one) */
function matchCard() {
    var card1 = openCards[0].find("i").attr("class");
    var card2 = openCards[1].find("i").attr("class");
    console.log(card1,card2);
    if ( card1 === card2) {
        console.log("We've got a match");
        
        openCards[0].addClass("match");
        openCards[1].addClass("match");
        openCards = [];
        cardIDs = [];
        cardList.push(card1,card2);
        showScore();

  
    } 
    else {
        console.log("Not a match");
        noMatch();
    }

   
        showScore();

        if (cardList.length === 16)
        {
            gameOver();
        }
}

/*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)*/
function noMatch() {
    openCards[0].addClass("close");
    openCards[1].addClass("close");

    openCards = [];
    cardIDs = [];

    if ($("li.card").classlist !== 'card open show match')
    {
        $("li.card").removeClass("open show");
    }

}

/*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one) */
function showScore(){
         moveCounter++;
        console.log(moveCounter);
        $(".moves").text(moveCounter);
}

function updateDisplay() {
    var value = parseInt($('#timer').find('.value').text(), 10);
    value++;
    $('#timer').find('.value').text(value);
}

function stopTimer() {
    clearInterval(gameTimer);
}

function gameOver() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    stopTimer();

}




