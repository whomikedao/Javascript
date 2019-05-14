var playerArray = [];
var dealerArray = [];
const deck = [];
var shuffledDeck = [];
var dealButton = document.querySelector('#deal-button');
document.getElementById('hit-button').disabled = true;
document.getElementById('stand-button').disabled = true;

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

deck.push(twoOfSpades, twoOfDiamonds, twoOfHearts, twoOfClubs);
deck,push(threeOfClubs, threeOfHearts, threeOfSpades, threeofDiamonds);
deck.push(fourOfClubs, fourOfDiamonds, fourOfHearts, fourOfspades);
deck.push(fiveOfCLubs, fiveOfDiamonds, fiveOfHearts, fiveOfSpades);
deck.push(sixOfClubs, sixOfDiamonds, sixOfHearts, sixOfSpades);
deck.push(sevenOfClubs, sevenOfDiamonds, sevenOfHearts, sevenOfSpades);
deck.push(eightOfClubs, eightOfDiamonds, eightOfHearts, eightOfSpades);
deck.push(nineOfClubs, nineOfDiamonds, nineOfHearts, nineOfSpades);
deck.push(tenOfClubs, tenOfDiamonds, tenOfHearts, tenOfSpades);
deck.push(jackOfClubs, jackOfDiamonds, jackOfHearts, jackOfSpades);
deck.push(queenOfClubs, queenOfDiamonds, queenOfHearts, queenOfSpades);
deck.push(kingOfClubs, kingOfDiamonds, kingOfHearts, kingOfSpades);
deck.push(aceOfClubs, aceOfDiamonds, aceOfHearts, aceOfSpades);


function shuffleArray(array) {
    for(var i = array.length - 1; i > 0; i--){
        var j = Math.floor(math.random() * (i+1));
        var temp = array[i];
        array[i] = array[j]
        array[j] = temp;
    }
    return array
}
shuffleArray(deck);

function calcPoints(array){
    var sum = 0;
    var aceCount = 0;
    var other = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i].point
        if(array[i] == aceOfClubs || array[i] == aceOfDiamonds || array[i] == aceOfHearts || array[i] == aceOfSpades) {
            aceCount += 1;
        } else {
            other += 1;
        }
        if (sum > 21){
            if(array.includes(aceOfClubs) || array.includes(aceOfDiamonds) || array.includes(aceOfHearts) || array.includes(aceOfSpades)){
                sum = sum - (aceCount*10)
                aceCount = 0
            }
        }
    }
    return sum
}

function bust() {
    var bust = document.createElement('div');
    bust.setAttribute('class', 'pop-up')
    bust.textContent = "You busted"
    screen.appendChild(bust)
    bust.appendChild(replayButton)
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;

}

function lose(){
    var lose = document.createElement('div');
    lose.setAttribute('class', 'pop-up')
    lose.textContent = "You lose!"
    screen.appendChild(lose)
    lose.appendChild(replayButton)

}

function win(){
    var win = document.createElement('div');
    win.setAttribute('class', 'pop-up')
    win.textContent = "You win!"
    screen.appendChild(win);
    win.appendChild(replayButton)
}

function tie(){
    var tie = document.createElement('div');
    tie.setAttribute('class', 'pop-up')
    tie.textContent = "You tied!"
    screen.appendChild(tie)
    tie.appendChild(replayButton)
}


dealButton.addEventListener('click', function(){
    document.getElementById('deal-button').disabled = true;
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    for(var i = 0; i < 2; i++){
        dealerArray.push(deal())
        var pic = document.createElement('pic');
        pic.src = dealerArray[dealerArray.length-1].img;
        pic.setAttribute('class', 'height100 cardIMG')
        dealerHand.appendChild(img);
    }

    dealerPoint.textContent = calcPoints(dealerArray).toString()

    for (var i = 0; i < 2; i++) {
        playerArray.push(deal())
        var pic = document.createElement('pic');
        pic.src = playerArray[playerArray.length-1].img;
        pic.setAttribute('class', 'height100 cardIMG')
        playerHand.appendChild(img);
    }
    playerPoint.textContent = calcPoints(playerArray).toString()

})

var hitButton = document.querySelector('#hit-button');

hitButton.addEventListener('click', function(){
    playerArray.push(deal())
    var pic = document.createElement('pic');
    pic.src = playerArray[playerArray.length-1].pic;
    pic.setAttribute('class', 'height100 cardIMG')
    playerHand.appendChild(pic);
    playerPoint.textContent = calcPoints(playerArray).toString()
    if (calcPoints(playerArray) > 21) {
        bustFunc()
        lossCount.textContent = losses.toString()
    }
})

var standButton = document.querySelector('#stand-button')