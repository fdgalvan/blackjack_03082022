// https://www.youtube.com/watch?v=NxRwIZWjLtE   The video I used as a guide.
//52 card, standard deck for any typical game that uses the 52-card deck.
//the shuffle method ensures that the deck is perfectly shuffled every time there's a refresh.

const SUITS = ["spades", "diamonds", "hearts", "clubs"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}
