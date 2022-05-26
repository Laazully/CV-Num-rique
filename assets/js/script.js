
// &&&&&&&&&&&&&&&&&&&&&&&&& Accueil mode phone menu burger &&&&&&&&&&&&&&&&&&&&&&&&&


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&& APPARITION IMAGES DIPLOMES XP &&&&&&&&&&&&&&&&&&&&



//réécriture du src
var divIn = document.querySelector('.divIn');
// console.log(divIn)

var dateOne = document.querySelector('.dateDip1');
var dateTwo = document.querySelector('.dateDip2');
var dateTree = document.querySelector('.dateDip3');
var dateFour = document.querySelector('.dateDip4');
var dateFive = document.querySelector('.dateXp10');
var dateSix = document.querySelector('.datesXp6');
var dateSeven = document.querySelector('.datesXp7');
var dateEight = document.querySelector('.datesXp8');
var dateNine = document.querySelector('.datesXp9');
var imgOne = document.querySelector('.imgOne');
var imgTwo = document.querySelector('.imgTwo');
var imgTree = document.querySelector('.imgTree');
var imgFour = document.querySelector('.imgFour');
var imgFive = document.querySelector('.imgFive');
var imgSix = document.querySelector('.imgSix');
var imgSeven = document.querySelector('.imgSeven');
var imgEight = document.querySelector('.imgEight');
var imgNine = document.querySelector('.imgNine');

// console.log(dateSix)

// LA MANU
dateSix.addEventListener('mouseover', function() {
    console.log(dateSix)
    imgOne.style.display = 'block';
})
dateSix.addEventListener('mouseout', function() {
    imgOne.style.display = 'none';
})

// COMDATA
dateSeven.addEventListener('mouseover', function() {
    console.log(dateSeven)
    imgTwo.style.display = 'block';
})
dateSeven.addEventListener('mouseout', function() {
    imgTwo.style.display = 'none';
})

// LA NEUVILLE
dateEight.addEventListener('mouseover', function() {
    console.log(dateSeven)
    imgTree.style.display = 'block';
})
dateEight.addEventListener('mouseout', function() {
    imgTree.style.display = 'none';
})

// FAMILO
dateNine.addEventListener('mouseover', function() {
    console.log(dateSix)
    imgFour.style.display = 'block';
})
dateNine.addEventListener('mouseout', function() {
    imgFour.style.display = 'none';
})

// MAURICE
dateFive.addEventListener('mouseover', function() {
    console.log(dateFive)
    imgNine.style.display = 'block';
})

dateFive.addEventListener('mouseout', function() {
    imgNine.style.display = 'none';
})

// WEBDESIGN
dateOne.addEventListener('mouseover', function() {
    console.log(dateSix)
    imgFive.style.display = 'block';
})
dateOne.addEventListener('mouseout', function() {
    imgFive.style.display = 'none';
})

// PCIE
dateTwo.addEventListener('mouseover', function() {
    console.log(dateSix)
    imgSix.style.display = 'block';
})
dateTwo.addEventListener('mouseout', function() {
    imgSix.style.display = 'none';
})

// MASTER
dateTree.addEventListener('mouseover', function() {
    console.log(dateSix)
    imgSeven.style.display = 'block';
})
dateTree.addEventListener('mouseout', function() {
    imgSeven.style.display = 'none';
})

// BAC
dateFour.addEventListener('mouseover', function() {
    console.log(dateSix)
    imgEight.style.display = 'block';
})
dateFour.addEventListener('mouseout', function() {
    imgEight.style.display = 'none';
})
// var divIn = document.queryselector('.divIn');

// divIn.addEventListener('mouseover', function() {
//     divIn.style.backgroundImage = "url('assets/img/img2.png')"
// })
// divIn.addEventListener('mouseout', function() {
//     divIn.style.backgroundImage = "url('assets/img/img1.jpg')"
// })
