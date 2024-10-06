
let animationInterval;

function startAnimations() {
    document.getElementById('myName').classList.remove('visible', 'float-in');
    document.getElementById('myskill1').classList.remove('visible', 'float-in');
    document.getElementById('myskill2').classList.remove('visible', 'float-in');

    setTimeout(function() {
        document.getElementById('myName').classList.add('visible', 'float-in');
    }, 500); // Délai de 0.5 seconde

    setTimeout(function() {
        document.getElementById('myskill1').classList.add('visible', 'float-in');
    }, 1500); // Délai de 1.5 secondes

    setTimeout(function() {
        document.getElementById('myskill2').classList.add('visible', 'float-in');
    }, 2500); // Délai de 2.5 secondes
}

function stopAnimations() {
    clearInterval(animationInterval);
}

function resumeAnimations() {
    startAnimations();
    animationInterval = setInterval(startAnimations, 6000); // Boucle toutes les 2 minutes (120000 ms)
}

window.addEventListener('load', function() {
    resumeAnimations();

    document.getElementById('myName').addEventListener('mouseover', stopAnimations);
    document.getElementById('myName').addEventListener('mouseout', resumeAnimations);

    document.getElementById('myskill1').addEventListener('mouseover', stopAnimations);
    document.getElementById('myskill1').addEventListener('mouseout', resumeAnimations);

    document.getElementById('myskill2').addEventListener('mouseover', stopAnimations);
    document.getElementById('myskill2').addEventListener('mouseout', resumeAnimations);
});

let logoP = document.getElementById("logoP");
let icon = document.getElementById("icon");
let body = document.getElementById("body");
let phasebienvenu = document.getElementById('myName');
let cards = document.querySelectorAll(".card");
let buttons = document.querySelectorAll(".btn-outline-primary");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".nav-link");
let titre_sect = document.querySelector(".titre_sect");

let services1 = document.getElementById("services1");
let expService1 = document.getElementById("expService1");
let services2 = document.getElementById("services2");
let expService2 = document.getElementById("expService2");
let services3 = document.getElementById("services3");
let expService3 = document.getElementById("expService3");
let services4 = document.getElementById("services4");
let expService4 = document.getElementById("expService4");

let previous1 = document.getElementById("previous1");
let previous2 = document.getElementById("previous2");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");

console.log(services1);
console.log(expService1);
console.log(services2);
console.log(expService2);
console.log(services3);
console.log(expService3);
console.log(services4);
console.log(expService4);

icon.onclick = function() {
    body.classList.toggle("dark-mode");
    cards.forEach(card => card.classList.toggle("dark-mode"));
    phasebienvenu.classList.toggle("dark-mode");
    titre_sect.classList.toggle("dark-mode");
    buttons.forEach(button => button.classList.toggle("dark-mode"));
    navbar.classList.toggle("dark-mode");
    navLinks.forEach(link => link.classList.toggle("dark-mode"));
    services1.classList.toggle("dark-mode");
    expService1.classList.toggle("dark-mode");
    services2.classList.toggle("dark-mode");
    expService2.classList.toggle("dark-mode");
    services3.classList.toggle("dark-mode");
    expService3.classList.toggle("dark-mode");
    services4.classList.toggle("dark-mode");
    expService4.classList.toggle("dark-mode"); 

    previous1.classList.toggle("dark-mode");
    previous2.classList.toggle("dark-mode");
    next1.classList.toggle("dark-mode");
    next2.classList.toggle("dark-mode"); 

    if (body.classList.contains("dark-mode")) {
        icon.src = "images/sunny.png";
        logoP.src = "images/logoP1.png";
    } else {
        icon.src = "images/half-moon.png";
        logoP.src = "images/logoP.png";
    }
}



// function startAnimations() {
//     document.getElementById('myName').classList.remove('visible', 'float-in');
//     document.getElementById('myskill1').classList.remove('visible', 'float-in');
//     document.getElementById('myskill2').classList.remove('visible', 'float-in');

//     setTimeout(function() {
//         document.getElementById('myName').classList.add('visible', 'float-in');
//     }, 500); // Délai de 0.5 seconde

//     setTimeout(function() {
//         document.getElementById('myskill1').classList.add('visible', 'float-in');
//     }, 1500); // Délai de 1.5 secondes

//     setTimeout(function() {
//         document.getElementById('myskill2').classList.add('visible', 'float-in');
//     }, 2500); // Délai de 2.5 secondes
// }

// window.addEventListener('load', function() {
//     startAnimations();
//     setInterval(startAnimations, 5000); // Boucle toutes les 2 minutes (120000 ms)
// });




// window.addEventListener('load', function() {
//     setTimeout(function() {
//         document.getElementById('myName').classList.add('visible', 'float-in');
//     }, 500); // Délai de 0.5 seconde

//     setTimeout(function() {
//         document.getElementById('myskill1').classList.add('visible', 'float-in');
//     }, 1500); // Délai de 1.5 secondes

//     setTimeout(function() {
//         document.getElementById('myskill2').classList.add('visible', 'float-in');
//     }, 2500); // Délai de 2.5 secondes
// });