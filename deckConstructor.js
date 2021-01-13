// A deck is also represented as a collection of cards, but it would also be convenient for it to be able to shuffle itself, and be asked to draw a card. We would like to be able to do this with a Deck constructor:

// > var myDeck = new Deck()
// > myDeck.draw()
// Card {point: 6, suit: "clubs"}
// > myDeck.draw()
// Card {point: 1, suit: "spades"}
// > myDeck.shuffle()
// > myDeck.numCardsLeft()
// 50

// Implement a Deck class that will allow for the above code to work.

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    };
};

class Deck {
    constructor() {
        this.deck = [];
        this.points = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'Jack', 'Queen', 'King', 'Ace']
        this.suit = ['hearts', 'diamonds', 'clubs', 'spades'];
        this.hand = [];
    };
    draw() {
        if(this.deck.length === 0) {
            return console.log(`No cards left in the deck. Please shuffle first.`);
        };
        const randomCard = {
            point: this.points[Math.floor(Math.random() * (this.points.length))],
            suit: this.suit[Math.floor(Math.random() * (this.suit.length))]
        };
        const index = this.deck.indexOf(randomCard) //fix this, it's returning -1 (not found). add the if -1 then not found too
        console.log(index) //delete this line
        // this.deck.splice(index, 1);
        this.hand.push(randomCard);
        return console.log(randomCard)
    };
    shuffle() {
        for (let i = 0; i < this.points.length; i++) {
            for (let j = 0; j < this.suit.length; j++) {
                this.deck.push(
                    {
                        point: this.points[i],
                        suit: this.suit[j]
                    }
                );
            };
        };
        this.deck.sort(() => Math.random() - 0.5);
        console.log(this.deck) //delete this
    };
    numCardsLeft() {
        return console.log(this.deck.length - this.hand.length); //make sure this works after fixing 1 and 2
    };
};

const myDeck = new Deck();
myDeck.shuffle();
myDeck.draw()

//to finish:
//1. fix indexOf returning -1
//2. splice card from this.deck
//3. make sure numCardsLeft works