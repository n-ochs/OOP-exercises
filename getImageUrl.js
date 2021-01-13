// ## getImageUrl()
// Add a getImageUrl method to card objects by adding it as a member method to your Card class. The method should return the URL path to the png image file for the card.

// > myCard.getImageUrl()
// 'images/5_of_diamonds.png'

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    };
    getImageUrl() {
        return `images/${this.point}_of_${this.suit}.png`
    };
};

const myCard = new Card(5, 'diamonds');
console.log(myCard.getImageUrl());