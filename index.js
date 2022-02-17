let menu = document.querySelector(".menu");

// alert("Hi");
let rn = document.querySelector(".rightNav");
menu.addEventListener('click' , ()=>{
    
    rn.classList.toggle('h-resp');
});

let anchor = document.querySelectorAll(".a-resp");


anchor.forEach(anc =>{
    anc.addEventListener('click' , ()=>{
        rn.classList.toggle('h-resp');
    });
    
})

let sections = document.querySelectorAll(".sec");
let navList = document.querySelectorAll(".rightNav a")
// navList[0].classList.add("active");
window.addEventListener('scroll' , ()=>{
    let currentY = pageYOffset;
    let currentDiv = "";
    sections.forEach(section =>{
        let currentSectionTop = section.offsetTop;
        if(currentY >= currentSectionTop-150){
            currentDiv = section.getAttribute('id');
        }
    })

    let visited = false;
    navList.forEach(nav =>{
        nav.classList.remove('active');
        if(nav.classList.contains(currentDiv)){
            nav.classList.add("active");
            visited = true;
        }

    })

    if(!visited)    navList[0].classList.add('active');

});






