// https://www.youtube.com/watch?v=LxXWTXOny3A  To create the deck. 
// https://www.youtube.com/watch?v=seApG3uwjAs  To shuffle the deck.

function createDeck() { // (whenever we want to use this we call the function 'createDeck'.)
    var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    var deck = [];
    
    for (var suitCounter = 0; suitCounter < 4; suitCounter++){
    // (first statement keeps track of which iteration we're on. "suitCounter" keeps track of how many times the loop has run. The 0 is the first spot (0, 1, 2, 3, etc).)
    // (second statement is the condition that tells us when to break out of the loop, or to stop repeating. In this case we only want it to count the suit 4 times so we say '< 4' so it doesn't count past the 4th index (0, 1, 2, 3). Otherwise there could be an infinite loop.)
    // (third statement tells us what to do to the variable from first statement. To increase suitCounter by 1. This can be shown as + 1, += 1, or ++. All of which mean add one.)
        for (var rankCounter = 0; rankCounter < 13; rankCounter++){
    
            deck.push(ranks[rankCounter] + suits[suitCounter]);
        // (.push function/method inserts suits to the ranks with this line of code. 2+hearts, 3+hearts, etc.)
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for(var i = 0; i < 52; i++) {
        var tempCard = deck[i];
        var randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex]; 
        deck[randomIndex] = tempCard;
    }
}

var testDeck = createDeck();
shuffleDeck(testDeck);
console.log(testDeck);