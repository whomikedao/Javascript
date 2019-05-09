// "use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

var operations = [];




number.forEach(function(e){
    e.addEventListener('click', function(e){
        if(event.target.nodeName = "DIV"){
            console.log("You've clicked " + event.target.textContent)
            input.textContent = (event.target.textContent)
            operations.push(event.target.textContent)
            console.log(operations)
        }
    })
});

function empty(){
    operations.length = 0;
};

operator.forEach(function(element){
    element.addEventListener('click', function(e){
        console.log(e);
        if(event.target.nodeName = "DIV"){
            console.log("You've clicked " + event.target.textContent)
            input.textContent = (event.target.textContent)
            operations.push(event.target.textContent)
            console.log(operations)
            if(event.target.textContent === 'C'){
                empty();
                console.log(operations);
            }
        } 
    })
});




// number.addEventListener('click', function(e){
//     console.log(e);
// })

// adding click handlers to number buttons

// adding click handlers to the operation buttons

// on click of 'equal' button

// clearing the input on press of clear
