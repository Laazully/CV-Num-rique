
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
dateSix.addEventListener('click', function() {
    setTimeout(function() {
        imgOne.style.display = 'block';
        setTimeout(function(){
            imgOne.style.display = 'none';
        },3000)
    },200);
    
})

// COMDATA

dateSeven.addEventListener('click', function() {
    setTimeout(function() {
        imgTwo.style.display = 'block';
        setTimeout(function(){
            imgTwo.style.display = 'none';
        },3000)
    },200);
})

// LA NEUVILLE
dateEight.addEventListener('click', function() {
    setTimeout(function() {
        imgTree.style.display = 'block';
        setTimeout(function(){
            imgTree.style.display = 'none';
        },3000)
    },200);
})


// FAMILO
dateNine.addEventListener('click', function() {
    setTimeout(function() {
        imgFour.style.display = 'block';
        setTimeout(function(){
            imgFour.style.display = 'none';
        },3000)
    },200);
})


// MAURICE
dateFive.addEventListener('click', function() {
    setTimeout(function() {
        imgNine.style.display = 'block';
        setTimeout(function(){
            imgNine.style.display = 'none';
        },3000)
    },200);
})


// WEBDESIGN
dateOne.addEventListener('click', function() {
    setTimeout(function() {
        imgFive.style.display = 'block';
        setTimeout(function(){
            imgFive.style.display = 'none';
        },3000)
    },200);
})


// PCIE
dateTwo.addEventListener('click', function() {
    setTimeout(function() {
        imgSix.style.display = 'block';
        setTimeout(function(){
            imgSix.style.display = 'none';
        },3000)
    },200);
})


// MASTER
dateTree.addEventListener('click', function() {
    setTimeout(function() {
        imgSeven.style.display = 'block';
        setTimeout(function(){
            imgSeven.style.display = 'none';
        },3000)
    },200);
})

// BAC
dateFour.addEventListener('click', function() {
    setTimeout(function() {
        imgEight.style.display = 'block';
        setTimeout(function(){
            imgEight.style.display = 'none';
        },3000)
    },200);
})
