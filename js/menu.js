(function(){
    const openButton = document.querySelector('.nav_img');
    const menu = document.querySelector('.nav_link');
    const close = document.querySelector('.nav_close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    });
    close.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });
})();