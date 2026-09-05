const child=document.getElementById("chld");
console.log(child.parentNode.id);

const list=document.getElementById("list");
console.log(list.childNodes.length)
console.log(list.children.length)

const sibl=document.getElementById("first");
console.log(sibl.nextElementSibling.id);
console.log(sibl.nextElementSibling.textContent);
