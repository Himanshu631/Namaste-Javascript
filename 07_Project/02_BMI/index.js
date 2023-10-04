const form = document.querySelector('form');
//console.log(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results');
    const verdict = document.querySelector('#verdict');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please enter a valid height';
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please enter a valid weight.';
    }

    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}. </span>`;

        if(bmi < 18.5){
            verdict.innerHTML += `<span>You are underweight</span>`;
        }
        else if(bmi >= 18.5 && bmi <=24.9){
            verdict.innerHTML += `<span>You are healthy</span>`;
        }
        else{
            verdict.innerHTML += `<span>You are overweight</span>`;
        }
    }

})