window.addEventListener('load', () => {
    const loader  = document.querySelector('.loader');
    setTimeout(function (){
        loader.style.opacity = '0'; 
        setTimeout(function () {
            loader.style.display = 'none'
        },500)
    }, 2000)
})