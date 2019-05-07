
//Creating the header
var mainDiv = document.querySelector('div');
var header = document.createElement('h1'); 
header.textContent = 'HighOnCoding';

mainDiv.appendChild(header); 

//Creating first content box "Curse of the Current Reviews"
var div1 = document.createElement('div'); 
var div1Header = document.createElement('h2')
div1Header.textContent = "Curse of the Current Reviews";
var divInnerOne = document.createElement('div');
divInnerOne.textContent = "content content content";

mainDiv.appendChild(div1);
div1.appendChild(div1Header);
div1.appendChild(divInnerOne);

//Creating second content box "Hello WatchKit"
var div2 = document.createElement('div');
var div2Header = document.createElement('h3');
div2Header.textContent = "Hello WatchKit";
var div2InnerOne = document.createElement('div');
div2InnerOne.textContent = "Last month...";
var div2Comments = document.createElement('div');
div2Comments.textContent = "12 Comments";

mainDiv.appendChild(div2);
div2.appendChild(div2Header);
div2.appendChild(div2InnerOne);
div2.appendChild(div2Comments);


//Creating third content box "Introduction to Swift"
var div3 = document.createElement('div');
var div3Header = document.createElement('h3');
div3Header.textContent = "Introduction to Swift";
var div3InnerOne = document.createElement('div');
div3InnerOne.textContent = "Swift is a modern...";
var div3Comments = document.createElement('div');
div3Comments.textContent = "15 comments";

mainDiv.appendChild(div3);
div3.appendChild(div3Header);
div3.appendChild(div3InnerOne);
div3.appendChild(div3Comments);

function liTag(className, innerHTML, idName){
    var li = document.createElement('li');
    li.id = idName;
    li.className = className;
    li.innerHTML = innerHTML;
}

var li1 = liTag("hot", "pine nuts", "two");
var li2 = liTag("hot", "figs", "three");