const nav = document.querySelector(".navbar");

window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        nav.style.backgroundColor = 'rgba(9, 9, 9, 1)';
    }
    else{
        nav.style.backgroundColor = 'rgba(9, 9, 9, 0)';

    }
})