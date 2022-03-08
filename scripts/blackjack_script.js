//issue notes
//after win, deck keeps dealing until hit play again
//redo how deck is pulled in - currently works, but requires a very specific name structure


window.addEventListener('DOMContentLoaded', function() {
    // this adds the event listener to our browser window, allowing us to see our work on the browser screen
    })
    
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    //this is to set up my suits array
    
    var deck = [];
    //this is setting the deck to an empty array, which will allow us to pull in random cards
    
    var playerHand = document.querySelector('#player-hand');
    //this is to display the players cards
    
    var dealerHand = document.querySelector('#dealer-hand');
    //this is to display the dealers cards
    
    var dealerHandPoints = document.querySelector('#dealer-points');
    //this is to display the numberic points for the cards next to the dealer name
    
    var playerHandPoints = document.querySelector('#player-points');
    //this is to display the numberic points for the cards next to the player name
    
    var deal = document.querySelector('#deal-button');
    //this allows the deck to deal out the cards
    
    var hit = document.querySelector('#hit-button');
    //this allows the player to get another card
    
    var stand = document.querySelector('#stand-button');
    //the stand button allows the player to indicate that they do not wish to draw another card
    
    var playAgain = document.querySelector('#again-button');
    //this allows the player to play another game without having to refresh the page and lose their win/loss count
    
    
    
    //the block of code below is responsible for the section that counts how many cards are left and keeps track of wins/losses.
    
    var names = document.querySelectorAll('.player-name2');
    
    var playerScoreShown = document.querySelector('.player-score-shown')
    
    var dealerScoreShown = document.querySelector('.dealer-score-shown')
    
    var cardsLeft = document.querySelector('.cards-left-shown')
    
    
    
    
    
    
    var initialPlayerHand = document.createElement('img');
    
    var initialDealerHand = document.createElement('img');
    
    
    
    
    var dealerHandList = [];
    //this sets the dealer hand to an empty array
    
    var playerHandList = [];
    //this sets the dealer hand to an empty array
    
    
    var playerPoints = 0;
    var dealerPoints = 0;
    var playerScore = 0;
    var dealerScore = 0;
    var cardAmount = 52;
    
    
    function getCardImage() {
        for (var i = 0; i < suits.length; i++) {
            for (var a = 1; a < 14; a++) {
                var card = {};
                card.rank = a
                card.suit = suits[i]
                card.img = `images/${a}_of_${suits[i]}.png` //this is the method used to call the images. I renamed the images to begin with a number in order for it to pull everything this way. Alternatively, one could write a switch statement.
                deck.push(card)
            }
        }
        }
    //the above function is responsible for pushing the card values and images to the game
        
    
    
    
    function shuffleDeck(array) {
        for (var i = array.length - 1; i > 0; i--) { 
            var a = Math.floor(Math.random() * (i + 1)); //math.random allows for the card to be different each time
            var temp = array[i];
            array[i] = array[a];
            array[a] = temp;
        }
        return array;
    }
    //the above function is responsible for randomizing the cards that are drawn as well as decrementing from the original number of cards, which in the case of this game is 52
    
    
    
    function dealDeck(){
        let playerCard1 = deck.pop(); //allows for the last card in the deck to be taken from the deck 
        let playerCard2 = deck.pop(); //allows for the last card in the deck to be taken from the deck 
        playerHandList.push(playerCard1);//allows for the card popped off above to be placed in the players hand where we can see it on the screen
        playerHandList.push(playerCard2);//allows for the card popped off above to be placed in the players hand where we can see it on the screen
    
        let dealerCard1 = deck.pop();//allows for the last card in the deck to be taken from the deck
        let dealerCard2 = deck.pop();//allows for the last card in the deck to be taken from the deck
        dealerHandList.push(dealerCard1);//allows for the card popped off above to be placed in the dealers hand where we can see it on the screen
        dealerHandList.push(dealerCard2);//allows for the card popped off above to be placed in the dealers hand where we can see it on the screen
    
        for(i=0 ; i < playerHandList.length ; i++){
        let initialPlayerHand = document.createElement('img');//this shows the initial cards that the player starts with
        initialPlayerHand.src = playerHandList[i].img;
        playerHand.appendChild(initialPlayerHand);
        }
    
        for(i=0 ; i < dealerHandList.length ; i++){
            let initialDealerHand = document.createElement('img');
            initialDealerHand.src = dealerHandList[i].img;
            dealerHand.appendChild(initialDealerHand);
        }
        
        cardAmount -= 4;
        cardsLeft.innerHTML = cardAmount
        
        }
        
        
    function hitPlayer() {
        playerPoints = 0;
        let playerCard = deck.pop();
        playerHandList.push(playerCard);
        
        let playerHitCard = document.createElement('img');
        playerHitCard.src = playerHandList[playerHandList.length - 1].img
        playerHand.appendChild(playerHitCard);
        
        cardAmount -= 1;
        cardsLeft.innerHTML = cardAmount;
        }
        
        
    function hitDealer() {
        dealerPoints = 0;
        let dealerCard = deck.pop();
        dealerHandList.push(dealerCard);
        
        let dealerHitCard = document.createElement('img');
        dealerHitCard.src = dealerHandList[dealerHandList.length - 1].img
        dealerHand.appendChild(dealerHitCard);
        
        cardAmount -= 1;
        cardsLeft.innerHTML = cardAmount;
        
        }
// I don't know what the everloving hell I'm doing. Somebody save me. Dear sweet lord baby Jesus! Allah! Krishna! Buddah
        
    function calculatePlayerPoints() {
        playerHandList.sort(function(a, b){
            return b.rank - a.rank;
        })
        for (var i = 0; i < playerHandList.length; i++) {
            if (playerHandList[i].rank === 1) {
                if (playerPoints < 11) {
                    playerPoints += 11;
                } else {
                playerPoints += 1;
            }
            } else if (playerHandList[i].rank > 1 && playerHandList[i].rank < 11) {
            playerPoints += playerHandList[i].rank;
            } else {
            playerPoints += 10;
            }
        }
        playerHandPoints.innerHTML = playerPoints.toString();
        
        let message = document.querySelector('.message');
        if (playerPoints > 21) {
            message.textContent = "You Busted! Dealer Wins!"
            hit.setAttribute('class', 'none');
            stand.setAttribute('class', 'none');
            playAgain.setAttribute('class', '');
            dealerScore++;
            gameOver();
        } 
        } 
        
        
    function calculateDealerPoints() {
        dealerHandList.sort(function(a, b){
        return b.rank - a.rank;
        })
        for (var i = 0; i < dealerHandList.length; i++) {
        if (dealerHandList[i].rank === 1) {
            if (dealerPoints < 11) {
            dealerPoints += 11;
            } else {
            dealerPoints += 1;
            }
        } else if (dealerHandList[i].rank > 1 && dealerHandList[i].rank < 11) {
            dealerPoints += dealerHandList[i].rank;
        } else {
            dealerPoints += 10;
        }
        }
        dealerHandPoints.innerHTML = dealerPoints.toString();
    
        let message = document.querySelector('.message');
        if (dealerPoints > 21) {
        message.textContent = "Dealer Busted! You Win!";
        hit.setAttribute('class', 'none');
        stand.setAttribute('class', 'none');
        playAgain.setAttribute('class', '');
        playerScore++;
        gameOver();
        }
    } 
    
    function updateScore() {
        playerScoreShown.textContent = playerScore;
        dealerScoreShown.textContent = dealerScore;
    }
    
    function clearCards() {
        playerHandList = [];
        playerHand.innerHTML = "";
    
        dealerHandList = [];
        dealerHand.innerHTML = "";
    }
    
    function gameOver() {
        let message = document.querySelector('.message');
        if (cardAmount === 0 || cardAmount < 4) {
        if (playerScore > dealerScore) {
            message.innerHTML = "Congratulations! You beat the Dealer!";
            hit.setAttribute('class', 'none');
            stand.setAttribute('class', 'none');
            playAgain.setAttribute('class', 'none');
            deal.setAttribute('class', 'none');
        } else if (dealerScore > playerScore) {
            message.innerHTML = "The Dealer won this round. Better luck next time!";
            hit.setAttribute('class', 'none');
            stand.setAttribute('class', 'none');
            playAgain.setAttribute('class', 'none');
            deal.setAttribute('class', 'none');
        } 
        else {
            message.innerHTML = "A Draw! Want to Play Again?";
            hit.setAttribute('class', 'none');
            stand.setAttribute('class', 'none');
            playAgain.setAttribute('class', 'none');
            deal.setAttribute('class', 'none');
        }
        }
        }
        
        
        
        
        
        
        getCardImage();
        shuffleDeck(deck);
        
        hit.setAttribute('class', 'none');
        stand.setAttribute('class', 'none');
        playAgain.setAttribute('class', 'none');
        names[0].setAttribute('class', 'none player-name2');
        names[1].setAttribute('class', 'none player-name2');
        cardsLeft.innerHTML = cardAmount;
        
        
        
        
        
        deal.addEventListener('click', ()=>{
        let message = document.querySelector('.message');
        message.textContent = "";
        hit.setAttribute('class', '');
        stand.setAttribute('class', '');
        names[0].setAttribute('class', 'player-name2');
        names[1].setAttribute('class', 'player-name2');
        
        dealDeck();
        calculatePlayerPoints();
        calculateDealerPoints();
            
        deal.setAttribute('class', 'none');
        
        })
        
        
        hit.addEventListener('click', ()=>{
            hitPlayer();
            calculatePlayerPoints();
            updateScore();
            gameOver();
                //here you can probably put an if statement that states if a player has over 21 points they will be unable to hit anything aside from the play again button.

        })
        
        
        stand.addEventListener('click', ()=>{
            let message = document.querySelector('.message');
        
        while (dealerPoints < 18 || dealerPoints <= playerPoints) {
            hitDealer();
            calculateDealerPoints();
        }
        
        if (dealerPoints < playerPoints && dealerPoints < 22) {
            message.textContent = "Congratulations! You Win!";
            playerScore++
        } else if (dealerPoints > playerPoints && dealerPoints < 22) {
            message.textContent = "Dealer Wins!";
            dealerScore++
        } else if (dealerPoints === 21 && playerPoints === 21) {
            message.textContent = "You tied with the Dealer!";
        }
        
        
        gameOver();
        updateScore();
        
        hit.setAttribute('class', 'none');
        stand.setAttribute('class', 'none');
        playAgain.setAttribute('class', '');
        
        
        })
        
        playAgain.addEventListener('click', ()=>{
        updateScore();
            
        dealerPoints = 0;
        playerPoints = 0;
            
        
        hit.setAttribute('class', '');
        stand.setAttribute('class', '');
        playAgain.setAttribute('class', 'none');
            
        let message = document.querySelector('.message');
        message.innerHTML = "";
            
        
        clearCards();
            
        dealDeck();
        calculatePlayerPoints();
        calculateDealerPoints();
            
        })