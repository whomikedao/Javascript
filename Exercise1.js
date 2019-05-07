//madlib

function madlib(name, subject){
    var name = name;
    var subject = subject;
    var sentence = (name + "'s favorite subject in school is " + subject + ".");
    return sentence;
}

madlib("Michael", "math")

//Tip Calculator + tip calculator 2
function tipAmount(bill, service){
    var bill = bill;
    var service = service.toLowerCase();
    var tip = 0;
    var total = 0;
    if(service == "good"){
        var total = bill * 1.2;
        var tip = bill * .2
        return("Your tip is: " + tip + " and your total is: " + total + ".");
    } else if(service == "fair"){
        var total = bill * 1.15;
        var tip = bill * .15;
        return ("Your tip is: " + tip + " and your total is: " + total + ".");
    } else if(service == "bad"){
        var total = bill * 1.1;
        var tip = bill * .1;
        return ("Your tip is: " + tip + " and your total is: " + total + ".");
    }
}

//printNumbers
function printNumbers(a, b){
    for(i = a; i <= b; i++){
        console.log(i);
    }
}

function printNumbers2(a, b){
    var i = a;
    while(i <= 10){
        console.log(i);
        i += 1;
    }
}

//Print a Square
function printSquare(size){
    for(i = size; i > 0; i--){
        var star = "";
        for(i = size-1; i > 0; i--){
            star += "*";
        }
        console.log(star);
    }
}

printSquare(5);

//printBox
function printBox(width, height){
    var w = width;
    var h = height;
    var star = "*";
    var space = " ";
    for(i = height; i > 0; i--){
        if(i == 0 || i == height){
            console.log(star.repeat(w+2));
        } else {
            console.log(star + space*width + star);
        }
    }
}

//Print a Banner
function printBanner(text){
    var banner = "*";
    for(i = text.length; i > 0; i--){
        if(i == text.length);
    }
}