var playerArray = [];
var dealerArray = [];
const deck = [];
var shuffledDeck = [];

var aceOfHearts = {
    value: 11,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/AH.jpg'
}
var aceOfSpades = {
    value: 11,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/AS.jpg'
}

var aceOfDiamonds = {
    value: 11,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/AD.jpg'
}

var aceOfClubs = {
    value: 11,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/AC.jpg'
}

var kingOfHearts = {
    value: 10,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/KH.jpg'
}

var kingOfSpades = {
    value: 10,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/KS.jpg'
}
var kingOfDiamonds = {
    value: 10,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/KD.jpg'
}
var kingOfClubs = {
    value: 10,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/KC.jpg'
}
var queenOfClubs = {
    value: 10,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/QC.jpg'
}
var queenOfDiamonds = {
    value: 10,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/QD.jpg'
}
var queenOfHearts = {
    value: 10,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/QH.jpg'
}
var queenOfSpades = {
    value: 10,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/QS.jpg'
}
var jackOfClubs = {
    value: 10,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/JC.jpg'
}
var jackOfDiamonds = {
    value: 10,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/JD.jpg'
}
var jackOfHearts = {
    value: 10,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/JH.jpg'
}
var jackOfSpades = {
    value: 10,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/JS.jpg'
}
var tenOfClubs = {
    value: 10,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/10C.jpg'
}
var tenOfDiamonds = {
    value: 10,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/10D.jpg'
}
var tenOfHearts = {
    value: 10,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/10H.jpg'
}
var tenOfSpades = {
    value: 10,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/10S.jpg'
}
var nineOfClubs = {
    value: 9,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/9C.jpg'
}
var nineOfDiamonds = {
    value: 9,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/9D.jpg'
}
var nineOfHearts = {
    value: 9,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/9H.jpg'
}
var nineOfSpades = {
    value: 9,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/9S.jpg'
}
var eightOfClubs = {
    value: 8,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/8C.jpg'
}
var eightOfDiamonds = {
    value: 8,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/8D.jpg'
}
var eightOfHearts = {
    value: 8,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/8H.jpg'
}
var eightOfSpades = {
    value: 8,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/8S.jpg'
}
var sevenOfClubs = {
    value: 7,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/7C.jpg'
}
var sevenOfDiamonds = {
    value: 7,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/7D.jpg'
}
var sevenOfHearts = {
    value: 7,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/7H.jpg'
}
var sevenOfSpades = {
    value: 7,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/7S.jpg'
}
var sixOfClubs = {
    value: 6,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/6C.jpg'
}
var sixOfDiamonds = {
    value: 6,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/6D.jpg'
}
var sixOfHearts = {
    value: 6,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/6H.jpg'
}
var sixOfSpades = {
    value: 6,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/6S.jpg'
}
var fiveOfCLubs = {
    value: 5,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/5C.jpg'
}
var fiveOfDiamonds = {
    value: 5,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/5D.jpg'
}
var fiveOfHearts = {
    value: 5,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/5H.jpg'
}
var fiveOfSpades = {
    value: 5, 
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/5S.jpg'
}
var fourOfClubs = {
    value: 4,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/4C.jpg'
}
var fourOfDiamonds = {
    value: 4,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/4D.jpg'
}
var fourOfHearts = {
    value: 4,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/4H.jpg'
}
var fourOfspades = {
    value: 4,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/4S.jpg'
}
var threeOfClubs = {
    value: 4,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/3C.jpg'
}
var threeofDiamonds = {
    value: 3,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/3D.jpg'
}
var threeOfHearts = {
    value: 3,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/3H.jpg'
}
var threeOfSpades = {
    value: 3,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/3S.jpg'
}
var twoOfClubs = {
    value: 2,
    suit: 'clubs',
    img: 'Javascript/BlackJack/JPEG/2C.jpg'
}
var twoOfDiamonds = {
    value: 2,
    suit: 'diamonds',
    img: 'Javascript/BlackJack/JPEG/2D.jpg'
}
var twoOfHearts = {
    value: 2,
    suit: 'hearts',
    img: 'Javascript/BlackJack/JPEG/2H.jpg'
}
var twoOfSpades = {
    value: 2,
    suit: 'spades',
    img: 'Javascript/BlackJack/JPEG/2S.jpg'
}