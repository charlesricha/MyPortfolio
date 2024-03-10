
//fuctionality of menu icon-bar

let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

navbar.classList.toggle('active');
};



//scroll active link change throgh links

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+ height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
        
    });

//sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

    //remove the navbar on click of link

    navbar.classList.remove('active');
};

//read more button functionality
function readMore(){
    let displayText = document.getElementById("hidden-txt");
    let dot = document.getElementById("dot");
    let btn = document.getElementById("read-more");

    if(displayText.style.display === "none"){
        displayText.style.display = "block";
        dot.style.display = "none";
        btn.textContent = "View Less";
    }else{
        displayText.style.display = "none";
        dot.style.display = "block";
        btn.textContent = "Read More";
    }
}









