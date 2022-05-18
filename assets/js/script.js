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