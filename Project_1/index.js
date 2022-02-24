const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

const accordion = document.getElementsByClassName('contentBx');

var pointer = document.getElementsByClassName('pointer');
var carouselItem = document.getElementsByClassName('carousel-item');
var l = 0;

menu.addEventListener('click', ()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


for (i=0; i<accordion.length;i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}

pointer[1].onclick = ()=>{
    l++;
    for(var i of carouselItem)
    {
        if (l==0){i.style.left = "0px";}
        if (l==1){i.style.left = "-740px";}
        if (l==2){i.style.left = "-1480px";}
        if (l==3){i.style.left = "-2220px";}
        if (l==4){i.style.left = "-2960px";}
        if (l>4){l=4;}
        
    }
}
pointer[0].onclick = ()=>{
    l--;
    for(var i of carouselItem)
    {
        if (l==0){i.style.left = "0px";}
        if (l==1){i.style.left = "-740px";}
        if (l==2){i.style.left = "-1480px";}
        if (l==3){i.style.left = "-2220px";}
        if (l<0){l=0;}
        
    }
}