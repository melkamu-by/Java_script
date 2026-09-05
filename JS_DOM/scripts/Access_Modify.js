const heading=document.getElementById("heading");
console.log(heading.textContent);
heading.textContent="Welcome to JS DOM! this is DOM manipulation";
//selecting elements by class name
const boxes=document.getElementsByClassName("Box");
console.log(boxes[0].textContent);

//selecting elements by tag name
const paragraphs=document.getElementsByTagName("p");

console.log(paragraphs.length);

//selecting elements by query selector
const boxs=document.querySelectorAll(".Box");
boxs.forEach((box)=> console.log(box.textContent));


