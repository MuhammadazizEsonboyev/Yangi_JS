window.addEventListener('load', function (e) {
    var form = document.querySelector('form');
    var inp = document.querySelectorAll('.check');
    const loader = document.querySelector('.loader');
    form.style.display = 'none'

    setTimeout(function () {
        loader.style.opacity = '0';
        setTimeout(function () {
            loader.style.display = 'none'
            form.style.display = 'block';
            let data = new Date()
        }, 500)
    }, 2000)

    form.addEventListener('click', function (e) {
        for (var i = 0; i <= inp.length - 1; i++) {
            inp[i].addEventListener('input', function (e) {
                let valu = e.target.value
                console.log(valu);
            })
            if (inp[i].value == '') {
                inp[i].classList.add('error')
                e.preventDefault()
            }
            else {
                inp[i].classList.remove('error')
            }
        }
    });
});