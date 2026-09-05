const button=document.getElementById('btn')
button.addEventListener('click',() =>{
    alert('Hi Melkamu!')
})
const box = document.getElementById('hoverBox');
box.addEventListener('mouseenter',()=>{
    box.style.background= 'blue';
})
box.addEventListener('mouseleave',()=>{
    box.style.background='green';
})
