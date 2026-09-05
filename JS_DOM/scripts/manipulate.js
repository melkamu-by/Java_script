const title=document.getElementById("title");
title.textContent="This is JS DOM Manipulation ";
title.style.color="blue";
title.style.fontSize="2em";

//changing Attribute
const img=document.getElementById("img");
img.setAttribute("src","images/web.png");
img.setAttribute("alt","web image");
//img.removeAttribute("src");

const box=document.getElementById('box');
box.classList.add('blue')
box.classList.remove('red')
console.log(box.className)

const list1=document.getElementById('list1');
const newItem=document.createElement('li')
newItem.textContent='Item 2'
list1.appendChild(newItem)