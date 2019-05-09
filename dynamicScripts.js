
//Creating the header
var mainDiv = document.querySelector('div');
var header = document.createElement('h1'); 
header.textContent = 'HighOnCoding';

mainDiv.appendChild(header); 
mainDiv.setAttribute('class', 'container-fluid')
header.setAttribute('class', 'h-100 p-4 bg-primary text-light')

//Creating first content box "Curse of the Current Reviews"
var div1 = document.createElement('div'); 
var div1Header = document.createElement('h2')
div1Header.textContent = "Curse of the Current Reviews";
var divInnerOne = document.createElement('div');
divInnerOne.textContent = "The giant squid is a deep-ocean dwelling squid in the family Architeuthidae. Giant squid can grow to a tremendous size due to deep-sea gigantism: recent estimates put the maximum size at 13 m for females and 10 m for males from the posterior fins to the tip of the two long tentacles. The giant squid is a deep-ocean dwelling squid in the family Architeuthidae. Giant squid can grow to a tremendous size due to deep-sea gigantism: recent estimates put the maximum size at 13 m for females and 10 m for males from the posterior fins to the tip of the two long tentacles.";

mainDiv.appendChild(div1);
div1.appendChild(div1Header);
div1.appendChild(divInnerOne);
div1.setAttribute('class', 'm-5 p-4 bg-secondary text-light')

//Creating second content box "Hello WatchKit"
var div2 = document.createElement('div');
var div2Header = document.createElement('h3');
div2Header.textContent = "Hello WatchKit";
var div2InnerOne = document.createElement('div');
div2InnerOne.textContent = "The giant squid is a deep-ocean dwelling squid in the family Architeuthidae. Giant squid can grow to a tremendous size due to deep-sea gigantism: recent estimates put the maximum size at 13 m for females and 10 m for males from the posterior fins to the tip of the two long tentacles.The giant squid is a deep-ocean dwelling squid in the family Architeuthidae. Giant squid can grow to a tremendous size due to deep-sea gigantism: recent estimates put the maximum size at 13 m for females and 10 m for males from the posterior fins to the tip of the two long tentacles.";
var div2Comments = document.createElement('div');
div2Comments.textContent = "12 Comments 14 Likes";

mainDiv.appendChild(div2);
div2.appendChild(div2Header);
div2.appendChild(div2InnerOne);
div2.appendChild(div2Comments);
div2.setAttribute('class', 'm-5');
div2Header.setAttribute('class', 'text-primary')
div2Comments.setAttribute('class', 'p-1 bg-warning text-light')


//Creating third content box "Introduction to Swift"
var div3 = document.createElement('div');
var div3Header = document.createElement('h3');
div3Header.textContent = "Introduction to Swift";
var div3InnerOne = document.createElement('div');
div3InnerOne.textContent = "The giant squid is a deep-ocean dwelling squid in the family Architeuthidae. Giant squid can grow to a tremendous size due to deep-sea gigantism: recent estimates put the maximum size at 13 m for females and 10 m for males from the posterior fins to the tip of the two long tentacles.The giant squid is a deep-ocean dwelling squid in the family Architeuthidae. Giant squid can grow to a tremendous size due to deep-sea gigantism: recent estimates put the maximum size at 13 m for females and 10 m for males from the posterior fins to the tip of the two long tentacles.";
var div3Comments = document.createElement('div');
div3Comments.textContent = "15 comments";

mainDiv.appendChild(div3);
div3.appendChild(div3Header);
div3.appendChild(div3InnerOne);
div3.appendChild(div3Comments);
div3.setAttribute('class', 'm-5')
div3Header.setAttribute('class', 'text-primary')
div3Comments.setAttribute('class', 'p-1 bg-warning text-light')

// function liTag(className, innerHTML, idName){
//     var li = document.createElement('li');
//     li.id = idName;
//     li.className = className;
//     li.innerHTML = innerHTML;
// }

// var li1 = liTag("hot", "pine nuts", "two");
// var li2 = liTag("hot", "figs", "three");

