
// Tests pour déplacer les icones dans la div

// var randomElements = document.querySelectorAll('.random') 
// var divRandom = document.querySelector('.divRandom') 
// // console.log(randomElements);


// // au chargement de la page
// window.addEventListener('onload', () => {
    
//     // for (element of elements){
    
//     // }
    
    
//     $(document).ready(function(){
//         randomElements;
//     });
    
//     // fonction de random
//     function makeNewPosition(){
        
//         // trouver la position x et y de la divRandom
//         var h = $(window).height() - 50; 
//         var w = $(window).width() - 50;
//         // les éléments de la divRandom doivent avoir un mouvement random
//         var nh = Math.floor(Math.random() * h);
//         var nw = Math.floor(Math.random() * w);
        
//         return [nh,nw];    
        
//     }

//     function animateDiv(myclass){
//         var newq = makeNewPosition();
//         $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
//         animateDiv(myclass);        
//         });
        
//     };
// })



// tests pour au survol dip et xp change image



// var img1 = document.querySelector('#img1');
// var img2 = document.querySelector('#img2');

// img1.addEventListener('mouseover', function() {
//     img1.style.display = 'none';
//     img2.style.display = 'block';
// })
// img2.addEventListener('mouseout', function() {
//     img1.style.display = 'block';
//     img2.style.display = 'none';
// })

// Exercice 2  - réécriture du src
// var img6 = document.querySelector('#img6');

// img6.addEventListener('mouseover', function() {
//     img6.src = 'assets/img/img2.png';
// })

// img6.addEventListener('mouseout', function() {
//     img6.src = 'assets/img/img1.jpg';
// })

// Exercice 2  - opacity
// var img4 = document.querySelector('#img4');

// img4.addEventListener('mouseover', function() {
//     img4.style.opacity = 0;
// })
// img4.addEventListener('mouseout', function() {
//     img4.style.opacity = 1;
// })
