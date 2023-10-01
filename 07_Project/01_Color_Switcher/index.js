const body = document.querySelector('body');
const buttons = document.querySelectorAll('.col-btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
     
        if(e.target.id === 'pink'){
            body.style.backgroundColor = 'rgb(255, 27, 255)';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = 'rgb(0, 199, 0)';
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
    });
});


const navbutton = document.querySelectorAll('.nav-btn');

navbutton.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
        }
    });
});