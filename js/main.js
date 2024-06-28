

document.addEventListener("DOMContentLoaded", function() 
{ // ON LOAD

   
   // AOSinit();




}); 


window.addEventListener("resize", function () 
{ // ON RESIZE



});

// AOS init
function AOSinit() {
    AOS.init({
        offset: 120,
        delay: 100,
        duration: 1000,
        easing: 'ease-out',
        once: true,
        anchorPlacement: 'top-bottom',
    });
}

