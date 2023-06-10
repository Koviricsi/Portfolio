var smNav = document.getElementById('smNav');
var navSmLogo = document.getElementById('navSmLogo');
function smNavShow(){
    if (!smNav.classList.contains('show')){
        smNav.classList.add('show');
        navSmLogo.style.position = 'relative'
        navSmLogo.style.right = '0'
        navSmLogo.style.margin = '1em 1em 0 auto'
        
    } else { 
        smNav.classList.remove('show');
        navSmLogo.style.position = 'absolute';
        navSmLogo.style.right = '1em'
        navSmLogo.style.margin = '0'
    }
}
window.onresize = function smNavOnResize(){
    if (window.innerWidth > 768){
        smNav.classList.remove('show');
        navSmLogo.style.position = 'absolute';
        navSmLogo.style.right = '1em'
        navSmLogo.style.margin = '0'
    }
}