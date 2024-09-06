const btn = document.querySelector('button')
const results = document.querySelector('#results')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
const height = parseInt(document.querySelector('#height').value)
const weight = document.querySelector('#weight').value

    if( height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Give a valid Number : ${height}`
    }
    else if( weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Give a valid Number : ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML =  bmi
    }
})