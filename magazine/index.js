const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
menuButton.addEventListener('click', ()=> {
    if(!hamburger.classList.contains('show-menu')){
        hamburger.classList.add('show-menu');
        
        if(search.classList.contains('open')){
            search.classList.remove('open');
            search.style.display = 'none';


        }
    }else{
        hamburger.classList.remove('show-menu');

    }
    
});
searchIcon.addEventListener('click', ()=> {
    
    if(!search.classList.contains('open')){
        search.style.display = 'block';
        search.classList.add('open');

        if(hamburger.classList.contains('show-menu')){
            hamburger.classList.remove('show-menu');
        }
        
    }
    else{
        search.style.display = 'none';
        search.classList.remove('open');
        header.style.background = 'white';


    }    
});
