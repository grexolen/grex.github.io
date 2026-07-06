// smooth scrolling

document.querySelectorAll("a").forEach(link=>{

link.onclick=e=>{

if(link.hash){

e.preventDefault();

document.querySelector(link.hash)
.scrollIntoView({

behavior:"smooth"

});

}

}

});




// glass card tilt effect


document.querySelectorAll(".glass")
.forEach(card=>{


card.addEventListener("mousemove",e=>{


let x=e.offsetX/card.offsetWidth-.5;

let y=e.offsetY/card.offsetHeight-.5;


card.style.transform=
`
perspective(700px)
rotateY(${x*8}deg)
rotateX(${-y*8}deg)
`;

});



card.addEventListener("mouseleave",()=>{


card.style.transform="";


});


});
