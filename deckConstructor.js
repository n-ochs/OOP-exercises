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

class Deck {
    constructor() {
        this.deck = [];
        this.points = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        this.suit = ['hearts', 'diamonds', 'clubs', 'spades'];
        this.hand = [];
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
    };
    draw() {
        if(this.deck.length === 0) {
            return console.log('No cards left in the deck.');
        };
        //ATTEMPT #1 - making the card itself then finding it in deck array
        // let drawnCard = {
        //     point: this.points[Math.floor(Math.random() * (this.points.length))],
        //     suit: this.suit[Math.floor(Math.random() * (this.suit.length))]
        // };
        // const index = this.deck.indexOf(drawnCard) // THIS DOESN'T WORK BECAUSE INDEXOF USES ===
        // if (index > -1) {
        //     this.deck.splice(index, 1);
        //     this.hand.push(drawnCard);
        // }
        
        //ATTEMPT #2 - pulling the card at a random index after the deck has already been created
        let drawnCard = this.deck[[Math.floor(Math.random() * (this.deck.length))]];
        let index = this.deck.indexOf(drawnCard);
        if (index > -1) {
            this.deck.splice(index, 1);
            this.hand.push(drawnCard);
        };
        return console.log(drawnCard);
    };
    shuffle() {
        this.deck.sort(() => Math.random() - 0.5);
        // console.log('Here is your shuffled deck', this.deck); // commented this out - used for testing purposes
    };
    numCardsLeft() {
        return console.log(this.deck.length);
    };
};

const myDeck = new Deck(); //works
myDeck.draw(); //works
myDeck.draw(); //works
myDeck.shuffle(); //works
myDeck.numCardsLeft(); //works