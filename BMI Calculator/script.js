const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const suggest = document.querySelector('#suggest')
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Weight
    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        result.innerHTML = `<span>${bmi}</span>`;
    }

    // Print
    if(bmi < 18.6) {
        suggest.innerHTML = "You are Under Weight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
        suggest.innerHTML = "You are in Normal Range";
    } else if (bmi >= 24.9) {
        suggest.innerHTML = "You are Over Weight";
    } else {
        suggest.innerHTML = "Enter Valid information";
    }
})