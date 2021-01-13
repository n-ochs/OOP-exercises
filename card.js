// Create a class Card. A card object will have 2 properties:

// point - the point value of the card: a number between 1 and 13.
// suit - the suit of the card: one of diamonds, clubs, hearts and spades.

// A card will be created thus:

// let myCard = new Card(5, 'diamonds')


// And you can access the individual properties like:

// > myCard.point
// 5
// > myCard.suit
// 'diamonds'

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    };
};

const myCard = new Card (5, 'diamonds');