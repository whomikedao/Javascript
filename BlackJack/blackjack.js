var playerArray = [];
var dealerArray = [];
const deck = [];
var shuffledDeck = [];
var dealButton = document.querySelector('#deal-button');
var dealerPoint = document.getElementById('dealer-points');
var playerPoint = document.getElementById('player-points');
document.getElementById('hit-button').disabled = true;
document.getElementById('stand-button').disabled = true;
var table = document.getElementById('table');
var replayButton = document.createElement('button');
replayButton.setAttribute('id', 'replay-button');
replayButton.textContent = "Replay";
var dealerHand = document.getElementById('dealer-hand');
var playerHand = document.getElementById('player-hand');
var drawCount = document.getElementById('draw-count');
var lossCount = document.getElementById('loss-count');
var winCount = document.getElementById('win-count');
var wins = 0;
var losses = 0;
var draws = 0;


//CREATE DECK
var aceOfHearts = {
    value: 11,
    suit: 'hearts',
    img: 'JPEG/AH.jpg'
}
var aceOfSpades = {
    value: 11,
    suit: 'spades',
    img: 'JPEG/AS.jpg'
}

var aceOfDiamonds = {
    value: 11,
    suit: 'diamonds',
    img: 'JPEG/AD.jpg'
}

var aceOfClubs = {
    value: 11,
    suit: 'clubs',
    img: 'JPEG/AC.jpg'
}

var kingOfHearts = {
    value: 10,
    suit: 'hearts',
    img: 'JPEG/KH.jpg'
}

var kingOfSpades = {
    value: 10,
    suit: 'spades',
    img: 'JPEG/KS.jpg'
}
var kingOfDiamonds = {
    value: 10,
    suit: 'diamonds',
    img: 'JPEG/KD.jpg'
}
var kingOfClubs = {
    value: 10,
    suit: 'clubs',
    img: 'JPEG/KC.jpg'
}
var queenOfClubs = {
    value: 10,
    suit: 'clubs',
    img: 'JPEG/QC.jpg'
}
var queenOfDiamonds = {
    value: 10,
    suit: 'diamonds',
    img: 'JPEG/QD.jpg'
}
var queenOfHearts = {
    value: 10,
    suit: 'hearts',
    img: 'JPEG/QH.jpg'
}
var queenOfSpades = {
    value: 10,
    suit: 'spades',
    img: 'JPEG/QS.jpg'
}
var jackOfClubs = {
    value: 10,
    suit: 'clubs',
    img: 'JPEG/JC.jpg'
}
var jackOfDiamonds = {
    value: 10,
    suit: 'diamonds',
    img: 'JPEG/JD.jpg'
}
var jackOfHearts = {
    value: 10,
    suit: 'hearts',
    img: 'JPEG/JH.jpg'
}
var jackOfSpades = {
    value: 10,
    suit: 'spades',
    img: 'JPEG/JS.jpg'
}
var tenOfClubs = {
    value: 10,
    suit: 'spades',
    img: 'JPEG/10C.jpg'
}
var tenOfDiamonds = {
    value: 10,
    suit: 'diamonds',
    img: 'JPEG/10D.jpg'
}
var tenOfHearts = {
    value: 10,
    suit: 'hearts',
    img: 'JPEG/10H.jpg'
}
var tenOfSpades = {
    value: 10,
    suit: 'spades',
    img: 'JPEG/10S.jpg'
}
var nineOfClubs = {
    value: 9,
    suit: 'clubs',
    img: 'JPEG/9C.jpg'
}
var nineOfDiamonds = {
    value: 9,
    suit: 'diamonds',
    img: 'JPEG/9D.jpg'
}
var nineOfHearts = {
    value: 9,
    suit: 'hearts',
    img: 'JPEG/9H.jpg'
}
var nineOfSpades = {
    value: 9,
    suit: 'spades',
    img: 'JPEG/9S.jpg'
}
var eightOfClubs = {
    value: 8,
    suit: 'clubs',
    img: 'JPEG/8C.jpg'
}
var eightOfDiamonds = {
    value: 8,
    suit: 'diamonds',
    img: 'JPEG/8D.jpg'
}
var eightOfHearts = {
    value: 8,
    suit: 'hearts',
    img: 'JPEG/8H.jpg'
}
var eightOfSpades = {
    value: 8,
    suit: 'spades',
    img: 'JPEG/8S.jpg'
}
var sevenOfClubs = {
    value: 7,
    suit: 'clubs',
    img: 'JPEG/7C.jpg'
}
var sevenOfDiamonds = {
    value: 7,
    suit: 'diamonds',
    img: 'JPEG/7D.jpg'
}
var sevenOfHearts = {
    value: 7,
    suit: 'hearts',
    img: 'JPEG/7H.jpg'
}
var sevenOfSpades = {
    value: 7,
    suit: 'spades',
    img: 'JPEG/7S.jpg'
}
var sixOfClubs = {
    value: 6,
    suit: 'clubs',
    img: 'JPEG/6C.jpg'
}
var sixOfDiamonds = {
    value: 6,
    suit: 'diamonds',
    img: 'JPEG/6D.jpg'
}
var sixOfHearts = {
    value: 6,
    suit: 'hearts',
    img: 'JPEG/6H.jpg'
}
var sixOfSpades = {
    value: 6,
    suit: 'spades',
    img: 'JPEG/6S.jpg'
}
var fiveOfCLubs = {
    value: 5,
    suit: 'clubs',
    img: 'JPEG/5C.jpg'
}
var fiveOfDiamonds = {
    value: 5,
    suit: 'diamonds',
    img: 'JPEG/5D.jpg'
}
var fiveOfHearts = {
    value: 5,
    suit: 'hearts',
    img: 'JPEG/5H.jpg'
}
var fiveOfSpades = {
    value: 5, 
    suit: 'spades',
    img: 'JPEG/5S.jpg'
}
var fourOfClubs = {
    value: 4,
    suit: 'clubs',
    img: 'JPEG/4C.jpg'
}
var fourOfDiamonds = {
    value: 4,
    suit: 'diamonds',
    img: 'JPEG/4D.jpg'
}
var fourOfHearts = {
    value: 4,
    suit: 'hearts',
    img: 'JPEG/4H.jpg'
}
var fourOfspades = {
    value: 4,
    suit: 'spades',
    img: 'JPEG/4S.jpg'
}
var threeOfClubs = {
    value: 4,
    suit: 'clubs',
    img: 'JPEG/3C.jpg'
}
var threeOfDiamonds = {
    value: 3,
    suit: 'diamonds',
    img: 'JPEG/3D.jpg'
}
var threeOfHearts = {
    value: 3,
    suit: 'hearts',
    img: 'JPEG/3H.jpg'
}
var threeOfSpades = {
    value: 3,
    suit: 'spades',
    img: 'JPEG/3S.jpg'
}
var twoOfClubs = {
    value: 2,
    suit: 'clubs',
    img: 'JPEG/2C.jpg'
}
var twoOfDiamonds = {
    value: 2,
    suit: 'diamonds',
    img: 'JPEG/2D.jpg'
}
var twoOfHearts = {
    value: 2,
    suit: 'hearts',
    img: 'JPEG/2H.jpg'
}
var twoOfSpades = {
    value: 2,
    suit: 'spades',
    img: 'JPEG/2S.jpg'
}

deck.push(twoOfSpades, twoOfDiamonds, twoOfHearts, twoOfClubs);
deck.push(threeOfClubs, threeOfHearts, threeOfSpades, threeOfDiamonds);
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

//SHUFFLE DECK
function shuffleArray(array) {
    for(var i = array.length - 1; i > 0; i--){ //GOES THROUGH DECK
        var j = Math.floor(Math.random() * (i+1)); //RANDOM RETURNS FLOAT, FLOOR PUTS BACK ON INT
        var temp = array[i]; //CREATING TEMPORARY ARRAY OF CARDS
        array[i] = array[j]
        array[j] = temp;
    }
    return array
}
shuffleArray(deck);

//CALCULATING POINTS
function calcPoints(array){
    var sum = 0;
    var aceCount = 0;
    var other = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i]
        if(array[i] == aceOfClubs || array[i] == aceOfDiamonds || array[i] == aceOfHearts || array[i] == aceOfSpades) {
            aceCount += 1;
        } else {
            other += 1;
        }
        if (sum > 21){ //IF STATEMENT TO CHANGE THE VALUE OF ACE FROM 11 TO 1 IF PLAYER OR DEALER IS OVER 21
            if(array.includes(aceOfClubs) || array.includes(aceOfDiamonds) || array.includes(aceOfHearts) || array.includes(aceOfSpades)){
                sum = sum - (aceCount*10)
                aceCount = 0
            }
        }
    }
    return sum
}

//DEAL BUTTON
function deal(){
    return deck.pop();//REMOVES CARD FROM "TOP" OF DECK AND RETURNS IT
}
//BUST
function bust() {
    var bust = document.createElement('div');
    bust.setAttribute('class', 'pop-up')
    bust.textContent = "You busted"
    messages.appendChild(bust)
    bust.appendChild(replayButton)
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    losses += 1;

}

//LOSE
function lose(){
    var lose = document.createElement('div');
    lose.setAttribute('class', 'pop-up')
    lose.textContent = "You lose!"
    messages.appendChild(lose)
    lose.appendChild(replayButton)
    losses += 1;

}

//WIN
function win(){
    var win = document.createElement('div');
    win.setAttribute('class', 'pop-up')
    win.textContent = "You win!"
    messages.appendChild(win);
    win.appendChild(replayButton)
    wins += 1;
}
//TIE
function tie(){
    var tie = document.createElement('div');
    tie.setAttribute('class', 'pop-up')
    tie.textContent = "You tied!"
    messages.appendChild(tie)
    tie.appendChild(replayButton)
    draws += 1;
}

//CLICKING ON DEAL
dealButton.addEventListener('click', function(){
    document.getElementById('deal-button').disabled = true;
    document.getElementById('hit-button').disabled = false; //BUTTONS BECOME AVAILABLE AFTER USER DEALS
    document.getElementById('stand-button').disabled = false;
    for(var i = 0; i < 2; i++){
        dealerArray.push(deal()) //ADDS CARD TO DEALER ARRAY
        var pic = document.createElement('img'); //CREATES ELEMENT OF IMG TO VARIABLE PIC
        pic.src = dealerArray[dealerArray.length-1].img; //ASSIGNED THE INDEX OF DEALER ARRAY IMG TO PIC.SRC
        pic.setAttribute('class', 'height50 cardIMG'); //SET ATTRIBUTE CLASS
        dealerHand.appendChild(pic); //APPENDS 
    }

    dealerPoint.textContent = calcPoints(dealerArray).toString()

    for (var i = 0; i < 2; i++) {
        playerArray.push(deal())
        var pic = document.createElement('img');
        pic.src = playerArray[playerArray.length-1].img;
        pic.setAttribute('class', 'height50 cardIMG');
        playerHand.appendChild(pic);
    }
    playerPoint.textContent = calcPoints(playerArray).toString()

})

var hitButton = document.querySelector('#hit-button');

hitButton.addEventListener('click', function(){
    playerArray.push(deal())
    var pic = document.createElement('img');
    pic.src = playerArray[playerArray.length-1].img;
    pic.setAttribute('class', 'height50 cardIMG');
    playerHand.appendChild(pic);
    playerPoint.textContent = calcPoints(playerArray).toString()
    if (calcPoints(playerArray) > 21) {
        bustFunc()
        lossCount.textContent = losses.toString()
    }
})

var standButton = document.querySelector('#stand-button')

standButton.addEventListener('click', function(){
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    while(calcPoints(dealerArray) <= 17) {
        dealerArray.push(deal())
        var pic = document.createElement('img');
        pic.src = dealerArray[dealerArray.length-1].img 
        pic.setAttribute('class', 'height75 cardIMG')
        dealerHand.appendChild(pic);
        dealerPoint.textContent = calcPoints(dealerArray).toString()
    }
    //POSSIBILITIES OF LOSING AND WINNING AND A TIE
    //when dealer has higher but not busted
    if(calcPoints(dealerArray) > calcPoints(playerArray) && calcPoints(dealerArray) <= 21){
        lose();
        lossCount.textContent = losses.toString();
    //when player is higher but not busted
    } else if(calcPoints(dealerArray) < calcPoints(playerArray) && calcPoints(dealerArray) <= 21) {
        win();
        winCount.textContent = wins.toString();
    //when dealer busted
    } else if(calcPoints(dealerArray) > 21) {
        win();
        winCount.textContent = wins.toString();
    //when tied but dealer has less cards
    } else if(calcPoints(dealerArray) == calcPoints(playerArray) && dealerArray.length < playerArray.length){
        lose();
        lossCount.textContent = losses.toString();
    //when tied but player has less cards
    } else if(calcPoints(dealerArray) == calcPoints(playerArray) && dealerArray.length > playerArray.length){
        win();
        winCount.textContent = wins.toString()
    //when tied everything
    } else {
        tie();
        drawCount.textContent = draws.toString();
    }
})

replayButton.addEventListener('click', function(){
    while (dealerArray.length != 0){//DEALS THE FIRST TWO CARDS FOR EACH PLAYER
        deck.push(dealerArray.pop())
    }
    while(playerArray.length != 0){
        deck.push(playerArray.pop())
    }
    shuffleArray(deck);
    document.getElementById('deal-button').disabled = false;
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;

})